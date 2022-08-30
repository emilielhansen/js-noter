/*
OPGAVE 2
--------
Byg en side hvor du checker om det er fredag.
På siden skal der starte med at stå "Er det fredag?"
Når siden loader, checker du om det er fredag, og indsætter et svar på siden.
Hvis ja, skal i også starte en konfetti kanon vha: https://github.com/catdad/canvas-confetti
*/

window.onload = function fredagTest(){
const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];

var d = new Date();
var day = weekday[d.getDay()];
var friday = weekday[5];

if(day === "Friday"){
    document.getElementById("output").innerHTML = "Det er fredag";
}

else if (day != "Friday"){
    document.getElementById("output").innerHTML = "Det er ikke fredag";
}

if(day === "Friday"){
confetti({
    particleCount: 100,
    spread: 70,
    origin: { y: 0.6 }
  });
}
}

