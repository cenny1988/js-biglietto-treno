/*
Il programma dovrà chiedere all’utente il numero di chilometri che vuole percorrere e l’età del passeggero.
Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
il prezzo del biglietto è definito in base ai km (0.21 € al km)
va applicato uno sconto del 20% per i minorenni
va applicato uno sconto del 40% per gli over 65.
L’output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo). Questo richiederà un minimo di ricerca.
Aggiungerei: ocio  a non incasinarvi sui calcoli matematici, alla fine dovete applicare, in certe condizioni, degli sconti in percentuale (come fare? :faccia_nerd:)
Buon viaggio :stazione:
*/

const indexPrice = 0.21;
// chiedere al cliente i km da percorrere
let km = prompt("Indicare i chilometri da percorrere");
// inserisco controllo su valore inserito
while(isNaN(km)) {
    km = prompt("Il valore non è corretto. Inserire i chilometri da percorrere")
}
// chiedere al cliente età
let age = prompt("Inserire l'età del viaggiatore");
// inserisco controllo su valore inserito
while(isNaN(age)) {
    age = prompt("Il valore non è corretto. Inserire l'età del viaggiatore")
}

// calcolare prezzo intero del biglietto
let ticketPrice = (km*indexPrice);
console.log(`I Km da percorrere sono `, km, `L'età è `, age, `Il biglietto costa `, ticketPrice);

// Se il cliente ha un'età compresa tra  i 18 e 66 anni allora non va applicato nessuno sconto
if (age<18 || age>65){
    if(age<18){ // se il cliente ha un'èta inferiore ai 18 anni applicare 20% di sconto
        ticketPrice = ticketPrice-((ticketPrice*20)/100);
        //console.log(ticketPrice);
        document.getElementById("ticket").innerHTML = 
        `Il costo del biglietto per il suo viaggio è: ${ticketPrice.toFixed(2)}€ 
        già scontato del 20% avendo lei meno di 18 anni`;
    }
    else{// se il cliente ha un'èta superiore ai 65 anni applicare 40% di sconto
        ticketPrice = ticketPrice-((ticketPrice*40)/100);
        //console.log(ticketPrice);
        document.getElementById("ticket").innerHTML = 
        `Il costo del biglietto per il suo viaggio è: ${ticketPrice.toFixed(2)}€ 
        già scontato del 40% avendo lei più di 65 anni`;
    }
}else{// output costo esatto del biglietto con max 2 decimali
    document.getElementById("ticket").innerHTML = 
    `Il costo del biglietto per il suo viaggio è: ${ticketPrice.toFixed(2)}€`;
}

// console.log(54.54545454.toFixed(2)); prova del metodo .toFixed - fissiamo a 2 decimali con arrotondamento


