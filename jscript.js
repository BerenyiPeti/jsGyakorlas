console.log("szkriptben");
function init() {
    document.getElementById("uzenet").innerHTML = "Szia!";
    //console.log("initben vagyunk");
}

window.addEventListener("load", init, false);

/* ********************************************************************** */

/* Változók a js-ben var let const*/
var ertek;
ertek = "szöveg";

var a = 2;
var b = 3;
var osszeg = Number(a) + Number(b);
console.log(osszeg);
var logikai = true;

if (logikai) {
    console.log("igaz");
} else {
    console.log("hamis");
}

var szin = "red";

/* 
switch(szin) {
    case "red":
        console.log("piros");
        break;
    case "orange":
        console.log("narancs")
        break;
    case "blue":
        console.log("kék");
        break;
    default:
        console.log("Nem ismerem ezt a színt!");
  }
*/

if (szin === "red") {
    console.log("piros");
} else if (szin === "orange") {
    console.log("narancs");
} else if (szin === "blue") {
    console.log("kék");
} else {
    console.log("Nem ismerem ezt a színt!");
}

var szam = 2;

if (szam === 2) {
    console.log("Ez egy 2-es szám!");
    console.log(typeof szam);
} else {
    console.log("ez nem szám!");
    console.log(typeof szam);
}