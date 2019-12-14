const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const workOutSchema = new Schema({
    workoutName: {
        type: String
    },
    sets: {
        type: Number
    },
    reps: {
        type: Number
    },
    weight: {
        type: Number
    }
});

const Workout = mongoose.model("Workout", workOutSchema);

module.exports = Workout;
