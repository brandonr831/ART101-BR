function askNumber(whatNumber) {
    let userNumber = prompt("Guess 1-10?");

    if (userNumber == whatNumber) {
        $("#output").html("Thats it homie");
    }
    else {
        $("#output").html("Nah");
    }
}

$("#good-button").click(function () {
    askNumber(5);
}); 