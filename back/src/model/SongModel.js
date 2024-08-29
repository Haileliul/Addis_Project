const mongoose = require("mongoose");

const songSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true,
  },
  artist: {
    type: String,
    required: true,
    trim: true,
  },
  album: {
    type: String,
    trim: true,
  },
  genre: {
    type: String,
    trim: true,
  },
});

const SongModel = mongoose.model("song", songSchema);

module.exports = SongModel;
