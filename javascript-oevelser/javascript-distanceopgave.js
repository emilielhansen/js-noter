/*
OPGAVE 1
--------
Byg en side hvor du beregner en distance der er rejst på baggrund af brugerens input.
Der skal være ét input felt til hastighed, angivet i km/t.
Der skal være ét input felt til tid, angivet i timer.
Der skal være en "beregn" knap.
Resultatet skal vises vha. "alert" funktionen.
*/

//Først laver jeg min funktion

/*function beregn (hastighed,tid){
    return hastighed * tid
}*/

function knapTryk (){

const result = (document.getElementById("hastighed").value * document.getElementById("tid").value );

// document.getElementById("result").innerHTML = result;   //Udskriver resultatet på siden.

alert(result); //Udskriver resultatet i en alert-box
}