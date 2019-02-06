var points = 0;

alert("Välkommen!");
alert("Fråga 1");
var answer1 = prompt("Svar fråga 1");
alert("Fråga 2");
var answer2 = prompt("Svar fråga 2");
alert("Fråga 3");
var answer3 = prompt("Svar fråga 3");

if (answer1 != null) {
    answer1 == "mygga";
    points++;
}

if (answer2 != null) {
    answer2 == "häst";
    points++;
}

if (answer3 != null) {
    answer3 == "haj";
    points++;
}


alert("Du har nu " + points + "p!");