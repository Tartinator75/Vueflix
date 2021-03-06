const Serie = require("../models/serie.model");
const bcrypt = require("bcrypt");
exports.create = (req, res) => {
  // req valeur qu'on recupere res resultat

  const serie = new Serie({
    Title: req.body.Title,
    Year:req.body.Year,
    Description: req.body.Description,
    Age: req.body.Age,
    Saison: req.body.Saison,
    Trailer: req.body.Trailer,
    Cover: req.body.Cover,
    Content: req.body.Content,
    Categorie:req.body.Categorie,
    Rate:req.body.Rate,
    Logo:req.body.Logo,
    Director:req.body.Director,
    Cast:req.body.Cast,
    Disponible:req.body.Disponible
  });

  /*if (err) {
    res.send(err);
  } else {*/
    serie
    .save()
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message: err.message
      });
    });
};

exports.findAll = (req, res) => {
  Serie.find()
    .then(Series => {
      res.send(Series);
    })
    .catch(err => {
      res.status(500).send({
        message: err.message || "some error occured when finding Series"
      });
    });
};


exports.findById = (req, res) => {
  Serie.findById(req.params.id)
    .then(Serie => {
      res.send(Serie);
    })
    .catch(err => {
      res.status(500).send({
        message: err.message || "some error occured when finding Series"
      });
    });
};


exports.findByIdAndUpdate = (req, res) => {// deprecated
  Serie.findOneAndUpdate(req.params.id, req.body)
    .then(Serie => {
      res.send(Serie);
    })
    .catch(err => {
      res.status(500).send({
        message: err.message || "some error occured when finding Series"
      });
    });
};





//params c'est les valeurs dans l'url
exports.findByIdAndRemove= (req, res) => {
  Serie.findByIdAndRemove(req.params.id)
    .then(Serie => {
      res.send(Serie);
    })
    .catch(err => {
      res.status(500).send({
        message: err.message || "some error occured when finding Series"
      });
    });
};



exports.removeALL= (req, res) => {
  Serie.remove()
    .then(Series => {
      res.send(Series);
    })
    .catch(err => {
      res.status(500).send({
        message: err.message || "some error occured when finding Series"
      });
    });
};
//}
