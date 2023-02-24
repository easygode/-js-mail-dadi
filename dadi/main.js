'use strict';

//1. imposto una variabile per un numero random da 1 a 6 generato dal computer
const numeroPc = Math.random() * (6 - 1) + 1;


//2. imposto una variabile per un numero random da 1 a 6 generato dall'utente
let numeroUtente = Math.random() * (6 - 1) + 1;

//3. genero un numero random per il computer
console.log(numeroPc);
//4. creo un prompt per l'inserimento dell'utente
numeroUtente = prompt ('Scegli un numero tra 1 e 6');
console.log (numeroUtente);
//5. creo una condizione per stabilire il numero più alto
   if (numeroPc < numeroUtente) {
//6. in base a chi ottiene il numero più alto stampo un alert
   //a. 'Hai VINTO' se l'utente ha il numero più alto
   alert('HAI VINTO');
}
   //b. 'Hai PERSO' se il computer ha il numero più alto
   else {
    alert('HAI PERSO');
   }