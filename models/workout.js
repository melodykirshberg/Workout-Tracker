const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const workOutSchema = new Schema({
    workoutName: {
        type: String,
        trim: true,
        required: "Enter a name for the workout"
    },
    data: [{
        sets: Number,
        reps: Number,
        weight: Number
    }],
    date: {
        type: Date,
        default: Date.now
    }
});

const Workout = mongoose.model("Workout", workOutSchema);

module.exports = Workout;
