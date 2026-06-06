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
        "<p>You worked out " + workoutCount + " times.</p>"
    );
});

function tuneGym(mood) {

    if (mood == "intense") {

        $("body").css("background-image", "url('gymroom.jpeg')");

        $("#final").html(
            "<p>The gym feels intense time for a sick pump</p>"
        );

    } else if (mood == "calm") {

        $("body").css("background-image", "url('day.jpeg')");

        $("#final").html(
            "<p>The gym feels calm time for cardio</p>"
        );

    } else {

        $("#final").html(
            "<p>hat mood are you feeling?, Type 'calm' to brighten the lights  or 'intense' to dim the lights.</p>"
        );

    }
}

$("#tuneGym").click(function () {

    let answer = prompt("What mood are you feeling?, Type 'calm' to brighten the lights  or 'intense' to dim the lights.");

    tuneGym(answer);

});