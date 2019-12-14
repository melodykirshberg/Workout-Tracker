function getResults() {
    $.ajax({
        url: "/api/workout",
        method: "GET"
    }).then(function (res) {
        for (let i = 0; i < res.length; i++) {
            let name = res[i].workoutName;
            let sets = res[i].sets;
            let reps = res[i].reps;
            let weight = res[i].weight;
            const row = $("<tr>").append(
                $("<td>").text(name),
                $("<td>").text(sets),
                $("<td>").text(reps),
                $("<td>").text(weight)
            )
            $("#table > tbody").append(row);
        }
    });
}
getResults();