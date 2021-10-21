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

// chiedere al cliente i km da percorrere
let km = prompt("Indicare i chilometri da percorrere");
// chiedere al cliente età
let age = prompt("Inserire l'et&agrave; del viaggiatore");

console.log(km),age;
// calcolare prezzo intero del biglietto

// se il cliente ha un'èta inferiore ai 18 anni applicare 20% di sconto
// se il cliente ha un'èta superiore ai 65 anni applicare 40% di sconto

// output costo esatto del biglietto con max 2 decimali
