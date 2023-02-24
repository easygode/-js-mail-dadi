'use strict';

//L'evento parte al click del bottone "Gioca"
document.addEventListener("click", myFunction);
function myFunction() {
  //1. imposto una variabile per un numero random da 1 a 6 generato dal computer
const numeroPc = (parseInt(Math.random() * (6 - 1) + 1));

//2. imposto una variabile per un numero random da 1 a 6 generato dal giocatore
const numeroUtente = (parseInt(Math.random() * (6 - 1) + 1));

//3. genero un numero random per il computer
console.log(numeroPc);
//4. genero un numero random per l'utente
console.log (numeroUtente);
//5. creo una condizione per stabilire il numero più alto
   if (numeroPc < numeroUtente) {
//6. in base a chi ottiene il numero più alto stampo un alert
   //a. 'Hai VINTO' se l'utente ha il numero più alto
   alert('HAI VINTO');
} 
    //b. 'Hai PERSO' se il computer ha il numero più alto
  else if (numeroPc > numeroUtente) {
    alert ('HAI PERSO')
  }
   //c. 'RITENTA SARAI PIÛ FORTUNATO' se viene generato lo stesso numero
   else {
    alert ('RITENTA SARAI PIÛ FORTUNATO')
   }
}

