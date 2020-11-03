const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const serieSchema = new Schema(
  {
    Title: {
      type: String,
      required: true,
      unique: true,
    },
    Year: {
      type: Number, // année de sorti 2020
    },

    Description: {
      type: String,
    },
    Age: {
      type: Number, // +18 +3 +99
    },
    Saison: {
      // nombre de saison
      type: Number,
    },
    Trailer: {
      // link trailer
      type: String,
    },
    Cover: {
      // link Image Cover
      type: String,
    },
    Content: [[String]],
    Categorie: [String],
    Rate: {
      type: Number, //  star
    },
    Logo: {
      type: String, //  logo
    },
    Cast: [{}],
    Director: { type: String },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Serie", serieSchema);
