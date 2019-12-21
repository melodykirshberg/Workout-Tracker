$("#add-btn").on("click", function () {
    console.log("test")
    const workoutName = $("#nameInput").val().trim();
    const workoutSets = $("#setsInput").val().trim();
    const workoutReps = $("#repsInput");
    const workoutWeight = $("weightInput");

    const newWorkout = {
        workoutName: workoutName,
        workoutSets: parseInt(workoutSets),
        workoutReps: parseInt(workoutReps),
        workoutWeight: parseInt(workoutWeight)
    }
$.ajax({
    url: "api/workout",
    method: "POST",
    data: newWorkout
}).then(function(){
    console.log("added workout!")
});
})