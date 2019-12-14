const Workout = require("../models/workout.js");
const app = require("express").Router();

app.get("/api/workout", function (req, res) {
  Workout.find().then(function (dbWorkout) {
    res.json(dbWorkout);
  });
});

app.post("/api/workout", function (req, res) {
  Workout.create(req.body).then(function (dbWorkout) {
    res.json(dbWorkout);
  });
});

module.exports = app;