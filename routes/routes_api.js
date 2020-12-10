const router = require("express").Router();
const Workout = require("../models/model_workout.js");

router.get("/api/workouts", (req, res) => {
  Workout.find()
    .then((dataWorkout) => res.json(dataWorkout))
    .catch((err) => res.json(err));
});

router.post("/api/workouts", ({ body }, res) => {
  console.log("Post method successful.", { body });
  Workout.create(body)
    .then((dataWorkout) => {
      res.json(dataWorkout);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
});

router.put("/api/workouts/:id", (req, res) => {
  Workout.findByIdAndUpdate(
    req.params.id,
    { $push: { exercises: req.body } },
    { new: true }
  )
    .then((workout) => res.json(workout))
    .catch((err) => res.json(err));
});

router.get("/api/workouts/range", (req, res) => {
  Workout.find({})
    .then((dataWorkout) => {
      res.json(dataWorkout);
    })
    .catch((err) => res.json(err));
});

router.delete("/api/workouts", (req, res) => {});

module.exports = router;
