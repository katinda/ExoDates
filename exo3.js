
var today = new Date ();
var button = document.getElementById("run");
var jour = document.getElementById("dob-day").value;
var mois = document.getElementById("dob-month").value;
var année = document.getElementById("dob-year").value;



button.addEventListener("click",function(){
    var diff = Date.now() - new Date(année,mois,jour);
    new Date(diff);

    console.log(new Date(diff));
    
});


