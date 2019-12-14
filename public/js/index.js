$("#result-btn").on("click", function () {
    console.log("clicky");
    location.href = "result.html"
});

$("#add-btn").on("click", function (event) {
    const workoutN = $("#wname").val().trim();
    const workoutSets = $("#sets").val().trim();
    const workoutReps = $("#reps").val().trim();
    const workoutWeight = $("#weight").val().trim();
    
    const newWorkout = {
        workoutName: workoutN,
        sets: workoutSets,
        reps: workoutReps,
        weight: workoutWeight
    }
    console.log(newWorkout)
    $.ajax({
        url: "/api/workout",
        method: "POST",
        header: { "Content-Type:": "application/json" },
        data: newWorkout
    }).then(function () {
        console.log("working")
    });
});