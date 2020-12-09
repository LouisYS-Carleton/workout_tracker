const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const workoutSchema = new Schema(
  {
    day: {
      type: Date,
      default: Date.now,
    },
    exercises: [
      {
        type: { type: String },
        name: { name: String },
        duration: { duration: Number },
        weight: { weight: Number },
        reps: { rep: Number },
        sets: { sets: Number },
        distance: { type: Number },
      },
    ],
  },
  {
    toJSON: {
      virtuals: true,
    },
  }
);

workoutSchema.virtual("totalPounds").get(function () {
  return this.exercises.reduce((total, exercise) => {
    return total + exercise.weight;
  }, 0);
});

const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;
