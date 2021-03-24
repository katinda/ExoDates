var today = new Date ();
var change = document.getElementById("target");
var noPrecise = new Date (2021,1,0,17,30,0);

if (today.getHours() >=0 && today.getHours()< noPrecise){
    document.getElementById("target").innerHTML = "s'il est moins de 17H30";

}
else {
    document.getElementById("target").innerHTML = "Bonsoir";
}


console.log (change);