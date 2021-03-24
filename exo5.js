/*
var today = new Date();
var button = document.getElementById("run");
var i = 0;
var imax = 10 ;
var vend = new Date () + Date.prototype.getDay()

button.addEventListener("click",function(){
    while (i<imax){
        if(vend == 13){
            console.log(vend);
            i+=1
            vend += Date.prototype.getDay(7)
        }
      }
});

*/

var today = new Date();
console.log("Date du jour: " + today);

var njs = today.getDay();
console.log ("Numéro du jour de semaine:  " + njs );

var deltavend = (7-njs+4)%7;
console.log("A ajouter pour avoir le vendredi suivant: " + deltavend);

var vendredi = today + today.toDateString(deltavend);
console.log("Date du vendredi suivant: " + vendredi);