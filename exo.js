var today = new Date ();
var change = document.getElementById("target");

if (today.getHours() >=0 && today.getHours()< 18){
    document.getElementById("target").innerHTML = "Bonjour";

}
else {
    document.getElementById("target").innerHTML = "Bonsoir";
}


console.log (change);