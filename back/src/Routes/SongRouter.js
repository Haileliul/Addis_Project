const router = require("express").Router();
const SongController = require("../controller/SongController");

router.post("/addSong", async (req, res) => {
  await SongController.addSong(req, res); // Ensure to pass req and res
});

router.get("/allSongs", async (req, res) => {
  await SongController.getAllSongs(req, res); // Ensure to pass req and res
});

router.get("/:id", async (req, res) => {
  await SongController.getOneSong(req, res); // Ensure to pass req and res
});

router.put("/:id", async (req, res) => {
  await SongController.updateOneSong(req, res); // Ensure to pass req and res
});

router.delete("/:id", async (req, res) => {
  await SongController.deleteOneSong(req, res); // Ensure to pass req and res
});

module.exports = router; // Changed from `export default` to CommonJS `module.exports`
