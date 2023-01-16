const express = require("express");
const router = express.Router();
const workoutsController = require("../controllers/workouts");
const { ensureAuth } = require("../middleware/auth");

router.get("/", ensureAuth, workoutsController.getWorkouts);

router.post("/createWorkout", workoutsController.createWorkout);

router.put("/markComplete", workoutsController.markComplete);

router.put("/markIncomplete", workoutsController.markIncomplete);

router.delete("/deleteWorkout", workoutsController.deleteWorkout);

module.exports = router;
