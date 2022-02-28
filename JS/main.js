//Train Ticket

//Dato statico
let KmPrice = parseFloat("0.21");

//Richiedo dati all'utente
let age = parseInt( prompt('Inserisci la tua età') );
let km = parseInt( prompt('Inserisci i km da percorrere') );

//Stampo i dati a schermo
document.getElementById('age').innerHTML += `${age}`;
console.log(age);

document.getElementById('km').innerHTML += `${km} km`;
console.log(km);

//Calcolo prezzo biglietto
let ticketPrice = KmPrice * km;
console.log(ticketPrice);

//Applico eventuali sconti

    