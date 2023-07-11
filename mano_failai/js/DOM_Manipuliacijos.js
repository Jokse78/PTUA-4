const ManoVardas = "Oksana Jakubauske";

const ManoVardasDOM = document.getElementById("ManoVardas");

ManoVardasDOM.innerHTML = ManoVardas;



const Titulinis = "Titulinis puslapis";

const TitulinisDOM = document.querySelector(".Titulinis");

TitulinisDOM.innerHTML = "Titulinis puslapis";


const Puslapiukas = "NAUJAS";

const PuslapiukasDOM = document.querySelector("#Puslapiukas");

PuslapiukasDOM.innerHTML = "NAUJAS";


imgTagai = document.getElementsByTagName('img');
let imgTaguSkaicius = imgTagai.length;
// Rezultato išvedimas konsolėje
console.log("HTML faile yra " + imgTaguSkaicius + " <img> tagai.");
// Suskaičiuoti <img> taguslet
let elementas = document.getElementById('uuid');
elementas.textContent = "Šiame faile yra " + imgTaguSkaicius + " <img> tagai.";

// Atspausdinti rezultatą konsolėje
console.log(elementas.textContent);

