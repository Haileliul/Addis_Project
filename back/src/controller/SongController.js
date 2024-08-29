const Song = require("../model/SongModel"); // Adjust the path to your Song model

// Add a new song
const addSong = async (req, res) => {
  try {
    const newSong = new Song(req.body); // Create a new Song instance with request body data
    await newSong.save(); // Save the new song to the database
    res
      .status(201)
      .json({ message: "Song added successfully!", song: newSong });
  } catch (error) {
    res.status(400).json({ message: "Error adding song", error });
  }
};

// Get all songs
const getAllSongs = async (req, res) => {
  try {
    const songs = await Song.find(); // Retrieve all songs from the database
    res.status(200).json(songs);
  } catch (error) {
    res.status(500).json({ message: "Error fetching songs", error });
  }
};

// Get a single song by ID
const getOneSong = async (req, res) => {
  try {
    const song = await Song.findById(req.params.id); // Find a song by its ID
    if (!song) {
      return res.status(404).json({ message: "Song not found" });
    }
    res.status(200).json(song);
  } catch (error) {
    res.status(500).json({ message: "Error fetching song", error });
  }
};

// Update a song by ID
const updateOneSong = async (req, res) => {
  try {
    const song = await Song.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    }); // Update song data
    if (!song) {
      return res.status(404).json({ message: "Song not found" });
    }
    res.status(200).json({ message: "Song updated successfully!", song });
  } catch (error) {
    res.status(400).json({ message: "Error updating song", error });
  }
};

// Delete a song by ID
const deleteOneSong = async (req, res) => {
  try {
    const song = await Song.findByIdAndDelete(req.params.id); // Delete song by its ID
    if (!song) {
      return res.status(404).json({ message: "Song not found" });
    }
    res.status(200).json({ message: "Song deleted successfully!" });
  } catch (error) {
    res.status(500).json({ message: "Error deleting song", error });
  }
};

module.exports = {
  addSong,
  getAllSongs,
  getOneSong,
  updateOneSong,
  deleteOneSong,
};
