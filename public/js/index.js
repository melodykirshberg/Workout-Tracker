$("#result-btn").on("click", function () {
    location.href = "result.html"
});

$("add-btn").on("click", function (event) {
    const workoutName = $("#wname").val().trim();
    const workoutSets = $("#sets").val().trim();
    const workoutReps = $("#reps").val().trim();
    const workoutWeight = $("#weight").val().trim();
    
    const newWorkout = {
        workoutName: workoutName,
        sets: parent(workoutSets),
        reps: parent(workoutReps),
        weight: parent(workoutWeight)
    }
    $.ajax({
        url: "/api/workout",
        method: "POST",
        header: { "Content-Type:": "applocation/json" },
        data: newWorkout
    }).then(function () {
        console.log("working")
    });
});