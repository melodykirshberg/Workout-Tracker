const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const WorkoutSchema = new Schema({
    workoutName: {
        type: String,
        trim: true
    },
    sets: {
        type: Number,
    },
    reps: {
        type: Number
    },
    weight: {
        type: Number
    }
});

const Workout = mongoose.model("Workout", WorkoutSchema);

module.exports = Workout;
