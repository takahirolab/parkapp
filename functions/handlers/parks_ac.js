//requireの書き方はnode.jsで動作してくれる書き方。

const { db } = require('../util/admin');

// var array1 = [‘東京’, ‘神奈川’, ‘千葉’, ‘埼玉’];
// array1.forEach(function(value) {
// console.log(value);
// });

// var myPromise2 = new Promise(function (resolve, reject) {
//   // 複数の値を渡す場合は、配列にまとめる
//   resolve([123, 'abc']); // resolve([値1, 値2...])
// });


// myPromise2
//   .then(function(value) {
//     console.log(value[0]); // => 123
//     console.log(value[1]); // => abc
//   });

exports.getAllParkAc = (req, res) => {
  db.collection('parksAc')
    .orderBy('createdDate', 'desc')
    .get()
    .then((data) => {
      let parksAc = [];
      data.forEach((doc) => {
        parksAc.push({
          parksAcId:doc.id,
          AcName:doc.data().AcName,
          AcFeature:doc.data().AcFeature,
          AcAbout:doc.data().AcAbout,
          AcLocation:doc.data().AcLocation,
          AcTag1:doc.data().AcTag1,
          AcTag2:doc.data().AcTag2,
          AcTag3:doc.data().AcTag3,
          AcPrice:doc.data().AcPrice,
          hostName: doc.data().hostName,
          createdDate: doc.data().createdDate,
          AclikeCount: doc.data().AclikeCount,
          userImage: doc.data().userImage,
          AcImage: doc.data().AcuserImage,
        });
      });
      return res.json(parksAc);
    })

    .catch((err) => {
      console.error(err);
      res.status(500).json({ error: err.code });
    });
};




exports.postOneParkAc = (req, res) => {
    const newPark = {
      AcName: req.body.AcName,
      createdDate: new Date().toISOString(),
    };

    // if (req.parks.parkName.trim() === '') {
    //   return res.status(400).json({ parkName: 'Body must not be empty' });
    // }

    db.collection('parks')
      .add(newPark)
      .then((doc) => {
        const resPark = newPark;
        resPark.parkId = doc.id;
        res.json(resPark);
      })
      .catch((err) => {
        res.status(500).json({ error: 'something went wrong' });
        console.error(err);
      });
  };

