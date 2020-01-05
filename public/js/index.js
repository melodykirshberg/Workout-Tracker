let workouts = [];
let myChart;

fetch("/api/workout")
    .then(response => response.json())
    .then(data => {
        workouts = data;
        populateTable();
        populateChart();
    });

function populateTable() {
    const tbody = document.querySelector("#tbody");
    tbody.innerHTML = "";

    workouts.forEach(workout => {
        const tr = document.createElement("tr");
        tr.innerHTML = `
      <td>${workout.name}</td>
      <td>${workout.value}</td>
    `;
        tbody.appendChild(tr);
    });
}

function populateChart() {
    const reversed = workouts.slice().reverse();
    let sum = 0;
    const labels = reversed.map(t => {
        const date = new Date(t.date);
        return `${date.getMonth() + 1}/${date.getDate()}/${date.getFullYear()}`;
    });
    const data = reversed.map(t => {
        sum += parseInt(t.value);
        return sum;
    });
    if (myChart) {
        myChart.destroy();
    }
    const ctx = document.getElementById("my-chart").getContext("2d");

    myChart = new Chart(ctx, {
        type: "line",
        data: {
            labels,
            datasets: [
                {
                    label: "Total Over Time",
                    fill: true,
                    backgroundColor: "#6666ff",
                    data
                }
            ]
        }
    });
}

function sendworkout(isAdding) {
    const nameEl = document.querySelector("#t-name");
    const amountEl = document.querySelector("#t-amount");
    const errorEl = document.querySelector(".form .error");

    if (nameEl.value === "" || amountEl.value === "") {
        errorEl.textContent = "Missing Information";
        return;
    } else {
        errorEl.textContent = "";
    }
    const workout = {
        name: nameEl.value,
        value: amountEl.value,
        date: new Date().toISOString()
    };

    if (!isAdding) {
        workout.value *= -1;
    }
    workouts.unshift(workout);

    populateChart();
    populateTable();

    fetch("/api/workout", {
        method: "POST",
        body: JSON.stringify(workout),
        headers: {
            Accept: "application/json, text/plain, */*",
            "Content-Type": "application/json"
        }
    })
        .then(response => response.json())
        .then(data => {
            if (data.errors) {
                errorEl.textContent = "Missing Information";
            } else {
                nameEl.value = "";
                amountEl.value = "";
            }
        })
        .catch(err => {
            saveRecord(workout);
            nameEl.value = "";
            amountEl.value = "";
        });
}

document.querySelector("#add-btn").addEventListener("click", function (event) {
    event.preventDefault();
    sendworkout(true);
});
