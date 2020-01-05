const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const WorkoutSchema = new Schema({
    name: {
        type: String,
        trim: true,
        required: "Enter a name for workout"
    },
    duration: {
        type: Number,
        required: "Enter an amount"
    },
    date: {
        type: Date,
        defaualt: Date.now
    }
});

const Workout = mongoose.model("Workout", WorkoutSchema);

module.exports = Workout;
