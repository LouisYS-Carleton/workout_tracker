const router = require("express").Router();
const db = require("../models");

router.get("/api/workouts", async (req, res) => {
  try {
    const workouts = await db.Workout.find({});
    res.status(200).json(workouts);
  } catch (err) {
    res.status(500).json({ error: err });
  }
});

router.post("/api/workouts", async (req, res) => {});

router.put("/api/workouts/:id", async (req, res) => {});

router.get("/api/workouts/range", async (req, res) => {});

router.delete("/api/workout", (req, res) => {});

module.exports = router;
