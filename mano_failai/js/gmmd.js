let metai = 1999;
let menuo = 06;
let diena = 15;
console.log(suma=metai%10+menuo%10+diena%10)  //turi sudeti paskutinius skaicius, metu, menesio ir dienos

let r = 15
let pi = 3.14
console.log(ilgis=2*r*pi)
console.log(plotas=r**2*pi)

let money=100.50; let price=105.50;
if (money>price)
{console.log("You paid extra,here's your change.");}//A
else if (money===price)
{console.log("You paid theexact amount,have a nice day!");}//B
else
{console.log("That's not enough,you still owe me money.");}//C


//let vardas = "Jonas";
//let vieta = 2;
//let medalis ;
//if (vieta === 1) {    medalis="aukso";}
//else if (vieta === 2) {     medalis="sidabro";}
//else if (vieta === 3) {     medalis="bronzos";}
//if (medalis !== undefined)
//{console.log(`Zaidejas ${vardas} gavo medali ${medalis}`);}


//let a = true;
//let b;
//if(a===true) {b=true;}
//else {b=false;}

var a = true;
var beverage= (a=true) ? "True" : "Falce"
console.log(beverage);

//parasykite for loopa kuriame bus sukurtas kazkoks variable kuris outputins consoleje skaicius 0 4 8 12 16.
for(let i=0; i<=16; i+=4) {console.log(i)}

let sportininkas = "Oksana Jakubauske"
let laimejimas = '3'
let medalis;
switch(typeof laimejimas)
                {case  1:
                medalis='auksas';
                break;
                case  2:
                medalis='sidabras';
                break;
                case  3:
                medalis='bronza';
                break;
                default:
                medalis = 'nieko';
                break;}
 console.log(sportininkas + ' '+"laimejo" +' '+ medalis);

let aa = 2+2;
switch(aa) {
        case 3:
        console.log('aa reiksme yra mazesne uz 4');
        break;
        case 4:
        console.log('aa reiksme yra lygi 4');
        break;
        case 5:
        console.log('aa reiksme yra daugiau uz 4');
        break;
        default:
        console.log(' '+ 'aa reiksme yra nezinoma')
        }
console.log('Atsakymas:'+ aa + ' ' + 'yra' + ' ' + 'lygus' + ' ' + 4 )

let fruits = ["Apple", "Orange", "Plum"];
console.log(fruits[0]);
console.log(fruits[1]);
console.log(fruits[2]);
fruits[2] = 'Pier';
console.log(fruits[0]);
console.log(fruits[1]);
console.log(fruits[2]);
fruits[3] = 'Lemon'
console.log(fruits.length);
let arr = ["Apple", "Orange", "Plum"];
for (let i = 0; i< arr.length; i++)
{console.log(arr[i]);}
let fruitss = ["Apple", "Orange", "Plum"];
// iterates over array elements
for (let fruit of fruitss)
{console.log(fruit);}
function spausdinti(duomenys) {
    console.log('--' + duomenys + '--');
}
for (let elementas of fruits)
    spausdinti(elementas)
function spausdinti(duomenys) {
    console.log('--[' + duomenys + ']--');
}
function sandauga (a, b)
{let sandauga = a * b;
console.log ("Sandauga yra:", sandauga);
}
sandauga(2,5);

let studentas1={vardas:'Oksana', pavarde:'Jakubauske', pazymiai:[8,6,7]};
let studentas2={vardas:'Rasa', pavarde:'Sutkiene', pazymiai:[6,6,7]};
let studentas3={vardas:'Lina', pavarde:'Svelginiene', pazymiai:[8,7,7]};
let studentas4={vardas:'Inga', pavarde:'Valatkiene', pazymiai:[8,8,7]};
let studentas5={vardas:'Daiva', pavarde:'Rinkeviciene', pazymiai:[6,6,6]};
let studentas6={vardas:'Gytaute', pavarde:'Barzdziute', pazymiai:[10,9,10]};
let sarasas=[studentas1,studentas2,studentas3,studentas4,studentas5, studentas6];
console.log(sarasas[5]);
console.log(sarasas[5].vardas+' '+ sarasas[5].pavarde+' '+"mokosi KTU, 4 kurse, jos pazymiai"+' '+sarasas[5].pazymiai);
console.log(sarasas[5].pazymiai);
//for (let i = 0; i < pazymiai.length; i++) {
//    pazymys = pažymiai[i];
//    console.log(pazymys) // Čia pakeiskite "išvesk" su tinkamu metodu, kad išvestų pažymį
//}
// 1 variantas
    function kaDaryti () {
        alert("Ačiū, kad paspaudėte mane1!")
    }

    // document.body.addEventListener("click", kaDaryti);
    //
    // // 2 variantas
    // document.body.addEventListener("click", () => alert("Ačiū, kad paspaudėte mane2!"));

    //elementas.onclick = kaDaryti;
    //elementas.onclick = () => alert("Ačiū, kad paspaudėte mane2!");
    //elementas.onclick = function() { alert("Ačiū, kad paspaudėte mane3!"); };



let atsitiktinisSkaicius=Math.random();
atsitiktinisSkaicius *=10 //atsitiktinis kaicius dauginamas is

//Suapvalinsiu iki paskutinio skaiciaus

if (atsitiktinisSkaicius < 1) {atsitiktinisSkaicius = 1}
if (atsitiktinisSkaicius > 10) {atsitiktinisSkaicius = 10}

atsitiktinisSkaiciusFloor = Math.floor(atsitiktinisSkaicius);
atsitiktinisSkaiciusCeil = Math.ceil(atsitiktinisSkaicius);
atsitiktinisSkaiciusRound = Math.round(atsitiktinisSkaicius);
atsitiktinisSkaiciusTrunc = Math.trunc(atsitiktinisSkaicius);

console.log('Floor: ' + atsitiktinisSkaiciusFloor);
console.log('Ceil: ' + atsitiktinisSkaiciusCeil);
console.log('Round: ' + atsitiktinisSkaiciusRound);
console.log('Trunc: ' + atsitiktinisSkaiciusTrunc);

let i = 0;
while (i<=16) {
console.log( i);
i+=4;
}

for (let i=0; i<=16; i+=4) {
console.log(i);
}
function paspaustiMygtuka () {
        alert("Ačiū, kad paspaudėte mane1!")
    }
document.body.addEventListener("click", paspaustiMygtuka);

