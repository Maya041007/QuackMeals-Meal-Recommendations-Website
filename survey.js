// When the user clicks the button:
document.getElementById("submitBtn").addEventListener("click", function () {

    // Get input values:
    let height = document.getElementById("height").value;
    let weight = document.getElementById("weight").value;
    let budget = document.getElementById("budget").value;
    let goal = document.getElementById("goal").value;
    let activity = document.getElementById("activity").value;

    let userData = {
        height: height,
        weight: weight,
        budget: budget,
        goal: goal,
        activity: activity
    };

    localStorage.setItem("surveyData", JSON.stringify(userData));

    window.location.href = "output.html";
});