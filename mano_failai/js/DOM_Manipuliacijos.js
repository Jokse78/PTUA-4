const ManoVardas = "Oksana Jakubauske";

const ManoVardasDOM = document.getElementById("ManoVardas");

ManoVardasDOM.innerHTML = ManoVardas;



//const Titulinis = "Titulinis puslapis";

//const TitulinisDOM = document.querySelector(".Titulinis");

//TitulinisDOM.innerHTML = Titulinis;


//const Puslapiukas = "NAUJAS";

//const PuslapiukasDOM = document.querySelector("#Puslapiukas");

//PuslapiukasDOM.innerHTML = Puslapiukas;

//1.
const images = document.getElementsByTagName('img');
const imgKiekis = images.lenght;
console.log("HTML faile yra " + imgKiekis + " <img> tagai.");
// 2.
const elementas = document.getElementById('uuid');
const atsakymas = 'Siame puslapyje yra $ {imgKiekis} paveiksleliai';
elementas.innerHTML = atsakymas;
//3.
const mygtukoElementas = document.querySelector('button');
mygtukoElementas.addEventListener('click', function() {
  window.alert("Paveikslėlių kiekis: " + imgTaguSkaicius);
});
//4.
for(let i=0; i< imgKiekis; i+=2) {
let paveikslelis = images[i];
//paveikslelis.setAlttribute('alt', 'Testas');
paveikslelis.alt = 'Testas'
}
//5.
elementas.style.fontSize = '24px';
elementas.style.backgroundColor = 'green';
elementas.style.width = '200px';
elementas.style.height = '200px';