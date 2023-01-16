const Workout = require("../models/Workout");

module.exports = {
  getWorkouts: async (req, res) => {
    console.log(req.user);
    try {
      const workoutItems = await Workout.find({ userId: req.user.id });
      const itemsLeft = await Workout.countDocuments({
        userId: req.user.id,
        completed: false,
      });
      res.render("workouts.ejs", {
        workouts: workoutItems,
        left: itemsLeft,
        user: req.user,
      });
    } catch (err) {
      console.log(err);
    }
  },
  createWorkout: async (req, res) => {
    try {
      await Workout.create({
        workout: req.body.workoutItem,
        repetitions: req.body.repetitionsItem,
        weight: req.body.weightItem,
        interval: req.body.intervalItem,
        completed: false,
        userId: req.user.id,
      });
      console.log("Workout has been added!");
      res.redirect("/workouts");
    } catch (err) {
      console.log(err);
    }
  },
  markComplete: async (req, res) => {
    try {
      await Workout.findOneAndUpdate(
        { _id: req.body.workoutIdFromJSFile },
        {
          completed: true,
        }
      );
      console.log("Marked Complete");
      res.json("Marked Complete");
    } catch (err) {
      console.log(err);
    }
  },
  markIncomplete: async (req, res) => {
    try {
      await Workout.findOneAndUpdate(
        { _id: req.body.workoutIdFromJSFile },
        {
          completed: false,
        }
      );
      console.log("Marked Incomplete");
      res.json("Marked Incomplete");
    } catch (err) {
      console.log(err);
    }
  },
  deleteWorkout: async (req, res) => {
    console.log(req.body.workoutIdFromJSFile);
    try {
      await Workout.findOneAndDelete({ _id: req.body.workoutIdFromJSFile });
      console.log("Deleted Workout");
      res.json("Deleted It");
    } catch (err) {
      console.log(err);
    }
  },
};
