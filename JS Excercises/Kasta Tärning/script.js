var person1 = prompt("Spelare 1:");
var person2 = prompt("Spelare 2:");

dice1 = Math.floor(Math.random() * 6) + 1;
dice2 = Math.floor(Math.random() * 6) + 1;

if (dice1 > dice2) {
    alert(person1 + " vinner med kast " + dice1 + "mot " + person2 + " med kast " + dice2);
} else {
    alert(person2 + " vinner med kast " + dice2 + "mot " + person1 + " med kast " + dice1);

}