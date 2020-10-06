//requireの書き方はnode.jsで動作してくれる書き方。

const { db } = require('../util/admin');


// exports.getAllParks = (req, res) => {
// db.collection("parks")
// .orderBy('createdDate', 'desc')
//   .get()
//   .then((data) => {
//   let parks = [];
//   data.forEach((doc) => {
//     parks.push({
//       parkId:doc.id,
//       parksName:data.data().parkName});
//   });
//   return res.json(parks);
// })
// .catch((error)=>{
//   console.log(`データの取得に失敗しました`);
// });

// };

exports.getAllParks = (req, res) => {
  db.collection('parks')
    .orderBy('createdDate', 'desc')
    .get()
    .then((data) => {
      let parks = [];
      data.forEach((doc) => {
        parks.push({
          parkId:doc.id,
          parkName:doc.data().parkName,
          parkAbout:doc.data().parkAbout,
          parkFeature:doc.data().parkFeature,
          parkLocation:doc.data().parkLocation,
          parkTag1:doc.data().parkTag1,
          parkTag2:doc.data().parkTag2,
          parkTag3:doc.data().parkTag3,
          parkTag4:doc.data().parkTag4,
          parkUrl:doc.data().parkUrl,
          parkPrice:doc.data().parkPrice,
          parkImage:doc.data().parkImage,

          userName: doc.data().userName,
          createdDate: doc.data().createdDate,
          commentCount: doc.data().commentCount,
          likeCount: doc.data().likeCount,
          userImage: doc.data().userImage,
        });
      });
      return res.json(parks);
    })
    .catch((err) => {
      console.error(err);
      res.status(500).json({ error: err.code });
    });
};




exports.postOneParks = (req, res) => {
  // if (req.body.parkName.trim() === '') {
  //   return res.status(400).json({ body: 'Body must not be empty' });
  // }
  const newPark = {
    parkName: req.body.parkName,
    parkAbout:req.body.parkAbout,
    parkFeature:req.body.parkFeature,
    parkLocation:req.body.parkLocation,
    parkPrice:req.body.parkPrice,
    parkUrl:req.body.parkUrl,
    parkTag1:req.body.parkTag1,
    parkTag2:req.body.parkTag2,
    parkTag3:req.body.parkTag3,
    parkTag4:req.body.parkTag4,
    parkImage:req.body.parkImage,
    userName: req.user.userName,
    userImage: req.user.imageUrl,
    createdDate: new Date().toISOString(),
    likeCount: 0,
    commentCount: 0
  };
  db.collection('parks')
    .add(newPark)
    .then((doc) => {
      const resPark = newPark;
      resPark.parkId = doc.id;
      res.json(resPark);
    })
    .catch((err) => {
      console.log("たかひろだよ");
      res.status(800).json({ error: 'something went wrong' });
    });
};




exports.postOneAc = (req, res) => {
  const newAc = {
    AcName: req.body.AcName,
    AcAbout:req.body.AcAbout,
    AcFeature:req.body.AcFeature,
    AcLocation:req.body.AcLocation,
    AcPrice:req.body.AcPrice,
    parkUrl:req.body.parkUrl,
    AcTag1:req.body.AcTag1,
    AcTag2:req.body.AcTag2,
    AcTag3:req.body.AcTag3,
    userName: req.user.userName,
    userImage: req.user.imageUrl,
    createdDate: new Date().toISOString(),
    likeCount: 0,
    commentCount: 0
  };

  db.collection('parksAc')
    .add(newAc)
    .then((doc) => {
      const resAc = newAc;
      resAc.parksAcId = doc.id;
      res.json(resAc);
    })
    .catch((err) => {
      console.log("たかひろだよ");
      res.status(800).json({ error: 'something went wrong' });
    });
};






exports.getPark = (req, res) => {
  db.collection('parks')
    .doc(req.params.parkId)
    .get()
    .then((doc) => {
      let parks = [];
      parks.push({
        parkId:doc.id,
        parkName:doc.data().parkName,
        parkAbout:doc.data().parkAbout,
        parkFeature:doc.data().parkFeature,
        parkLocation:doc.data().parkLocation,
        parkTag1:doc.data().parkTag1,
        parkTag2:doc.data().parkTag2,
        parkTag3:doc.data().parkTag3,
        parkTag4:doc.data().parkTag4,
        parkUrl:doc.data().parkUrl,
        parkPrice:doc.data().parkPrice,
        parkImage:doc.data().parkImage,

        userName: doc.data().userName,
        createdDate: doc.data().createdDate,
        commentCount: doc.data().commentCount,
        likeCount: doc.data().likeCount,
        userImage: doc.data().userImage,
      });
      return res.json(parks);
      })
      .catch((err) => {
        console.log("たかひろだよ");
        res.status(800).json({ error: 'something went wrong' });
    })
  }



// Comment on a comment
exports.commentOnPark = (req, res) => {
  if (req.comment.comment.trim() === '')
    return res.status(400).json({ comment: 'Must not be empty' });

  const newComment = {
    comment: req.parkName.comment,
    createdDate: new Date().toISOString(),
    parkId: req.params.parkId,
    userName: req.user.userName,
    userImage: req.user.imageUrl
  };
  console.log(newComment);

  db.doc(`/parks/${req.params.parkId}`)
    .get()
    .then((doc) => {
      if (!doc.exists) {
        return res.status(404).json({ error: 'Scream not found' });
      }
      return doc.ref.update({ commentCount: doc.data().commentCount + 1 });
    })
    .then(() => {
      return db.collection('comments').add(newComment);
    })
    .then(() => {
      res.json(newComment);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ error: 'Something went wrong' });
    });
};


// Like a scream
exports.likePark = (req, res) => {
  const likeDocument = db
    .collection('likes')
    .where('userName', '==', req.user.userName)
    .where('parkId', '==', req.params.parkId)
    .limit(1);

  const screamDocument = db.doc(`/parks/${req.params.parkId}`);

  let screamData;

  screamDocument
    .get()
    .then((doc) => {
      if (doc.exists) {
        screamData = doc.data();
        screamData.parkId = doc.id;
        screamData.parkName = doc.data().parkName;
        screamData.parkLocation = doc.data().parkLocation;
        return likeDocument.get();
      } else {
        return res.status(404).json({ error: 'Scream not found' });
      }
    })
    .then((data) => {
      if (data.empty) {
        return db
          .collection('likes')
          .add({
            parkId: req.params.parkId,
            parkName: req.params.parkName,
            parkLocation: req.params.parkLocation,
            userName: req.user.userName
          })
          .then(() => {
            screamData.likeCount++;
            return screamDocument.update({ likeCount: screamData.likeCount });
          })
          .then(() => {
            return res.json(screamData);
          });
      } else {
        return res.status(400).json({ error: 'Scream already liked' });
      }
    })
    .catch((err) => {
      console.error(err);
      res.status(500).json({ error: err.code });
    });
};




exports.unlikePark = (req, res) => {
  const likeDocument = db
    .collection('likes')
    .where('userName', '==', req.user.userName)
    .where('parkId', '==', req.params.parkId)
    .limit(1);

  const screamDocument = db.doc(`/parks/${req.params.parkId}`);

  let screamData;

  screamDocument
    .get()
    .then((doc) => {
      if (doc.exists) {
        screamData = doc.data();
        screamData.parkId = doc.id;
        return likeDocument.get();
      } else {
        return res.status(404).json({ error: 'Scream not found' });
      }
    })
    .then((data) => {
      if (data.empty) {
        return res.status(400).json({ error: 'Scream not liked' });
      } else {
        return db
          .doc(`/likes/${data.docs[0].id}`)
          .delete()
          .then(() => {
            screamData.likeCount--;
            return screamDocument.update({ likeCount: screamData.likeCount });
          })
          .then(() => {
            res.json(screamData);
          });
      }
    })
    .catch((err) => {
      console.error(err);
      res.status(500).json({ error: err.code });
    });
};



// Delete a scream
exports.deletePark = (req, res) => {
  const document = db.doc(`/parks/${req.params.parkId}`);
  document
    .get()
    .then((doc) => {
      if (!doc.exists) {
        return res.status(404).json({ error: 'Scream not found' });
      }
      if (doc.data().userName !== req.user.userName) {
        return res.status(403).json({ error: 'Unauthorized' });
      } else {
        return document.delete();
      }
    })
    .then(() => {
      res.json({ message: 'Scream deleted successfully' });
    })
    .catch((err) => {
      console.error(err);
      return res.status(500).json({ error: err.code });
    });
};
