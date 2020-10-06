const functions = require('firebase-functions');
const app = require('express')();
const FBAuth = require('./util/fbAuth');

const cors = require('cors');
app.use(cors());

// const cors = require('cors');
// app.use(cors());

const { db } = require('./util/admin');

const {
  getAllParks,
  postOneParks,
  postOneAc,
  getPark,
  commentOnPark,
  likePark,
  unlikePark,
  deletePark
} = require('./handlers/parks');

const {
  getAllParkAc
} = require('./handlers/parks_ac');

const {
  getAllArticles
} = require('./handlers/articles');


const {
  signup,
  login,
  uploadImage,
  addUserDetails,
  getAuthenticatedUser,
  getUserDetails,
  markNotificationsRead,
  getuserInfo
} = require('./handlers/users');

// parks routes
app.get('/parks', getAllParks);
app.post('/park', FBAuth, postOneParks);

app.get('/park/:parkId', getPark);
app.post('/park/:parkId/comment', FBAuth, commentOnPark);

app.delete('/park/:parkId', FBAuth, deletePark);
app.get('/park/:parkId/like', FBAuth, likePark);
app.get('/park/:parkId/unlike', FBAuth,unlikePark);

// parksEx routes
app.get('/parksAc', getAllParkAc);
app.post('/parkAc', FBAuth, postOneAc);

// parksEx routes
app.get('/articles', getAllArticles);
app.post('/parkAc', FBAuth);

app.get('/users',getuserInfo);

// users routes
app.post('/signup', signup);
app.post('/login', login);
app.post('/user/image',FBAuth,uploadImage);
app.post('/user', FBAuth, addUserDetails);
app.get('/user', FBAuth, getAuthenticatedUser);
app.get('/user/:userName', getUserDetails);
app.post('/notifications', FBAuth, markNotificationsRead);

exports.api = functions.region('asia-northeast1').https.onRequest(app);

//モジュールと呼ばれるやつ。
//exports.プロパティ名　とmodule.exportsはほとんど同じ。




exports.createNotificationOnLike = functions
  .region('asia-northeast1')
  .firestore.document('likes/{id}')
  .onCreate((snapshot) => {
    return db
      .doc(`/parks/${snapshot.data().parkId}`)
      .get()
      .then((doc) => {
        if (
          doc.exists &&
          doc.data().userName !== snapshot.data().userName
        ) {
          return db.doc(`/notifications/${snapshot.id}`).set({
            createdDate: new Date().toISOString(),
            recipient: doc.data().userName,
            sender: snapshot.data().userName,
            type: 'like',
            read: false,
            parkId: doc.id
          });
        }
      })
      .catch((err) => console.error(err));
  });




exports.deleteNotificationOnUnLike = functions
  .region('asia-northeast1')
  .firestore.document('likes/{id}')
  .onDelete((snapshot) => {
    return db
      .doc(`/notifications/${snapshot.id}`)
      .delete()
      .catch((err) => {
        console.error(err);
        return;
      });
  });



exports.createNotificationOnComment = functions
  .region('asia-northeast1')
  .firestore.document('comments/{id}')
  .onCreate((snapshot) => {
    return db
      .doc(`/parks/${snapshot.data().parkId}`)
      .get()
      .then((doc) => {
        if (
          doc.exists &&
          doc.data().userName !== snapshot.data().userName
        ) {
          return db.doc(`/notifications/${snapshot.id}`).set({
            createdDate: new Date().toISOString(),
            recipient: doc.data().userName,
            sender: snapshot.data().userName,
            type: 'comment',
            read: false,
            parkId: doc.id
          });
        }
      })
      .catch((err) => {
        console.error(err);
        return;
      });
  });


exports.onUserImageChange = functions
  .region('asia-northeast1')
  .firestore.document('/users/{userId}')
  .onUpdate((change) => {
    console.log(change.before.data());
    console.log(change.after.data());


    if (change.before.data().imageUrl !== change.after.data().imageUrl) {
      console.log('image has changed');
      const batch = db.batch();
      return db
        .collection('parks')
        .where('userName', '==', change.before.data().userName)
        .get()
        .then((data) => {
          data.forEach((doc) => {
            const scream = db.doc(`/parks/${doc.id}`);
            batch.update(scream, { userImage: change.after.data().imageUrl });
          });
          return batch.commit();
        });
    } else return true;
  });



exports.onScreamDelete = functions
  .region('asia-northeast1')
  .firestore.document('/parks/{parkId}')
  .onDelete((snapshot, context) => {
    const parkId = context.params.parkId;
    const batch = db.batch();
    return db
      .collection('comments')
      .where('parkId', '==', parkId)
      .get()
      .then((data) => {
        data.forEach((doc) => {
          batch.delete(db.doc(`/comments/${doc.id}`));
        });
        return db
          .collection('likes')
          .where('parkId', '==', parkId)
          .get();
      })
      .then((data) => {
        data.forEach((doc) => {
          batch.delete(db.doc(`/likes/${doc.id}`));
        });
        return db
          .collection('notifications')
          .where('parkId', '==', parkId)
          .get();
      })
      .then((data) => {
        data.forEach((doc) => {
          batch.delete(db.doc(`/notifications/${doc.id}`));
        });
        return batch.commit();
      })
      .catch((err) => console.error(err));
  });
