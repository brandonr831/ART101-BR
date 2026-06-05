$(document).ready(function () {

    let count = 0;

    let buttonCreature = {
        name: "Big Daws",
        species: "large creature",
        favoriteFood: "treats",
        moods: ["sleepy", "crazy", "hungry", "tired", "playful", "confused"]
    };

    $("#needy-button").click(function () {

        count++;

        let arrayPosition = count - 1;
        let currentMood = buttonCreature.moods[arrayPosition];

        let message = "<p>You clicked me " + count + " times.</p>";
        message += "<p>My current mood is " + currentMood + ".</p>";
        message += "<p>My name is " + buttonCreature.name + ".</p>";
        message += "<p>I am an " + buttonCreature.species + ".</p>";
        message += "<p>My favorite food is " + buttonCreature.favoriteFood + ".</p>";

        $("#output").html(message);

    });

});