'use strict';


//1. creo una variabile per una lista array con email fittizie
//2. creo una lista array con email fittizie
const email = ['gaetanofresco@gmail.com', 'annava@me.com', 'cosimopaolott@hotmail.it', 'pippoefranco@insider.to', 'gitgaeta@sublime.com', 'unindirizzo@gmail.cim', 'test@test.com', 'email@hotel.com'];

//3. creo una variabile per l'input utente
//4. inserisco un prompt per l'input email da parte dell'utente
let inputEmail = prompt ('Inserisci il tuo indirizzo Email');

//5. creo un ciclo for che mi permetterà di confrontare l'input con i dati nell'array
for(let index = 0; index < email.length; index++){
    console.log(email[index]);
    //6. SE l'indirizzo e-mail input esiste  nell'array stampo un alert: "Email esisitente"
    if(email[index] === inputEmail){
        alert('Email esistente');
        break} 
    }


