let workoutCount = 0;

let gymName = "Brandon's Gym";

let equipment = ["dumbbell", "glasses", "old weights", "bench"];

let jack = {
    name: "Jack",
    type: "gym rat",
    mood: "aggressive",
    favorite: "dumbbell"
};

$("#gymName").click(function () {
    $("#final").html("<p>This gym is called " + gymName + "</p>");
});

$("#equipment").click(function () {
    $("#final").html("<p>Equipment: " + equipment + "</p>");
});

$("#jacked").click(function () {
    $("#final").html(
        "<p>Name: " + jack.name + "</p>" +
        "<p>Type: " + jack.type + "</p>" +
        "<p>Mood: " + jack.mood + "</p>" +
        "<p>Favorite item: " + jack.favorite + "</p>"
    );
});

$("#workoutCounter").click(function () {
    workoutCount = workoutCount + 1;

    $("#final").html(
        "<p>You worked out " + workoutCount + " times</p>"
    );
});