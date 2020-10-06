const { db } = require('../util/admin');


exports.getAllArticles = (req, res) => {
  db.collection('articles')
    .orderBy('createdDate', 'desc')
    .get()
    .then((data) => {
      let articles= [];
      data.forEach((doc) => {
        articles.push({
           articlesId:doc.id,
          articleTitle:doc.data().articleTitle,
          createdDate:doc.data().createdDate,
        });
      });
      return res.json(articles);
    })

    .catch((err) => {
      console.error(err);
      res.status(500).json({ error: err.code });
    });
};




exports.postOnegetAllArticle = (req, res) => {
    const newPark = {
    articleTitle: req.body.articleTitle,
      createdDate: new Date().toISOString(),
    };
  å
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

