const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const workOutSchema = new Schema({
    workoutName: {
        type: String
    }
    // workoutType: {
    //     type: String
    // },
    // exercises: [{
    //     weight: Number,
    //     sets: Number,
    //     reps:Number,
    //     duration: Number
    // }],
    // date: {
    //     type: Date,
    //     default: Date.now
    // }
});

const Workout = mongoose.model("Workout", workOutSchema);

module.exports = Workout;
