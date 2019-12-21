const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const WorkoutSchema = new Schema({
    date: {
        type: Date,
        default: Date.now()
    },
    workouts: [
        {
            type:{
                type: String
            },
            name: {
                type: String
            },
            weight: {
                type: Number
            },
            sets: {
                type: Number
            },
            reps: {
                type: Number
            },
            duration: {
                type: Number
            }
      }]
});

const Workout = mongoose.model("Workout", WorkoutSchema);

module.exports = Workout;
