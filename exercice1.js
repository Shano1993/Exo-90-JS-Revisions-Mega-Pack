// variable nom voiture
let nomVoiture = "Peugeot";

// variable x = 50
let x = 50;

// variable z et w + résultat d
let z = 5;
let w = 10;
let demo = document.getElementById('demo');
demo.innerHTML = "z = 5 et w = 10, le résultat de 5 + 10 est égal à" + " " + (z + w);
let d = z + w;
alert("Valeur de d est" + " " + d);

// trois variable en ligne
let prenom = "John", nom = "Doe", age = 35;

// multiplication et division
alert("10 multiplié par 5 =" + " " + 10*5);
alert("10 divisé par 2 =" + " " + 10/2);

// variable l et k
let l = 10;
let k = 5;
l += k;

// ma fonction
function maFonction() {
    alert("Salut tout le monde !");
}
maFonction();

// ma fonction de retour
function maFonctionDeRetour() {
    let demoRetour = document.getElementById('demoRetour');
    demoRetour.innerHTML = "Bonjour!";
}
maFonctionDeRetour();

// mon boutton
let monBoutton = document.getElementById('monBoutton');
monBoutton.addEventListener("click", function () {
    alert("Aie pas si fort !");
})

// change sur over
document.getElementById('changeSurOver').addEventListener("mouseover", function () {
    document.getElementById('changeSurOver').style.backgroundColor = "red";
})

// variable txt
let txt = "Une longue phrase";
let longueur = txt.length
alert(longueur + " " + "est la longueur de ma variable txt");

// variable str1 et str2
let str1 = "Bonjour";
let str2 = "le monde!";
alert(str1 + " " + str2);

// tableau liste voitures
let listeVoitures = ["Renault", "Volvo", "Citroen"];
let maVoiture = listeVoitures[1];
listeVoitures[0] = "Ford";
alert(listeVoitures.length);
listeVoitures.pop();
listeVoitures.push("Ferrari");

// variable rnumber
let rNumber = Math.floor(Math.random() * 100);

// variable fnumber
let fNumber = 15.7;
Math.ceil(fNumber);

// variable nombreun et nombredeux
let nombreUn = 10;
let nombreDeux = 5;
if (nombreUn > nombreDeux) {
    alert("nombreUn est supérieur à nombreDeux");
}

// variable nombretrois et nombrequatre
let nombreTrois = 10;
let nombreQuatre = 10;
if (nombreTrois === nombreQuatre) {
    alert("nombreTrois est égal à nombreQuatre");
}

// condition nombreun et nombredeux sont différent
if (nombreUn !== nombreDeux) {
    alert("nombreUn n'est pas égal à nombreDeux");
}

// boucle de 0 à 9
for (let i = 0; i < 9; i++) {
    console.log(i);
}

// tableau fruit
let fruits = ["pomme", "banane", "poire"];
for (let i = 0; i < fruits.length; i++) {
    console.log(i + " " + fruits[i]);
}

// boucle while 1
let i = 0;
while (i < 10) {
    console.log(i);
    i++;
}

// boucle while 2
let j = 0;
while (j < 10) {
    console.log(j);
    j += 2;
}

// boucle 0 à 10
for (let i = 0; i < 10; i++) {
    if (i === 5) {
        alert("Merci Samuel !");
    }
}