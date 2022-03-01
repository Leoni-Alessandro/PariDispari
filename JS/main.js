//Train Ticket

//Richiedo dati all'utente
let age = parseInt( prompt('Inserisci la tua età') );
let km = parseInt( prompt('Inserisci i km da percorrere') );

//Stampo i dati a schermo
document.getElementById('age').innerHTML += `${age}`;
console.log(age);

document.getElementById('km').innerHTML += `${km} km`;
console.log(km);

//Calcolo prezzo biglietto
let ticketPrice = km * 0.21;
console.log(ticketPrice);

//Applico eventuali sconti
if (age < 18) {
    ticketPrice -= ticketPrice * 0.2;

}
console.log(ticketPrice);

if(age >= 65) {
    ticketPrice -= ticketPrice * 0.4;
}
console.log(ticketPrice);

document.getElementById('price').innerHTML = `Il tuo viaggio costa: ${ticketPrice}`;
    