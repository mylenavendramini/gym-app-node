const mongoose = require("mongoose");

const WorkoutSchema = new mongoose.Schema({
  workout: {
    type: String,
    required: true,
  },
  repetitions: {
    type: Number,
    required: true,
  },
  weight: {
    type: Number,
    required: true,
  },
  interval: {
    type: Number,
    required: true,
  },
  completed: {
    type: Boolean,
    required: true,
  },
  userId: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Workout", WorkoutSchema);
