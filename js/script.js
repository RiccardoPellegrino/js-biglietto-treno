"use strict";

// Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
// Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
// il prezzo del biglietto è definito in base ai km (0.21 € al km)
// va applicato uno sconto del 20% per i minorenni
// va applicato uno sconto del 40% per gli over 65.
// Llet km = prompt ("Inserie il numero  km che vuoi percorrere");



let klm = prompt("Inserisci il numero dei klm che vuoi percorrere");
let eta = prompt("Inserisci la tua età");

let prezzoBiglietto = klm * 0.21;
console.log(prezzoBiglietto);

let scontoBiglietto;

if (isNaN(klm) || isNaN(eta)) {

    alert('Attenzione devi inserire solo numeri e non caratteri');
    window.location.reload();
}


if (eta < 18) {
    scontoBiglietto = (prezzoBiglietto *80) /100;
    console.log(scontoBiglietto);

} else if (eta >= 65) {
    scontoBiglietto = (prezzoBiglietto *60) /100;
} else {
    scontoBiglietto = prezzoBiglietto;
}
scontoBiglietto = scontoBiglietto.toFixed(2);

document.getElementById("prezzo").innerHTML = scontoBiglietto + ' &euro;';
document.getElementById("kilometri").innerHTML = klm;   
