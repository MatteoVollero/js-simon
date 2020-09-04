/*Un alert espone 5 numeri casuali diversi.
Dopo 30 secondi l’utente deve inserire, un prompt alla volta, i numeri che ha visto precedentemente.
Una volta inseriti i 5 numeri, il software dice quanti e quali numeri sono stati ricordati*/
$(document).ready(
  function(){

    var numeriCasuali = [];
    var giaPresente = [];
    var numeriInseriti = [];
    var numeriIndovinati = [];
    var punteggio  = 0;
    var numero;
    var finito = false;
    var stampato = false;

    //Espongo i numeri tramite un alert
    for(var i = 0 ; i < 5 ; i ++){
      do{//Con questo ciclo evito ripetizioni
        numero = Math.floor(Math.random() * 100 + 1);
      }
      while(isInArray(numeriCasuali,numero) == true)
      numeriCasuali.push(numero);
      giaPresente.push(false);
      alert(numero);
    }

    //Aspetto 30 secondi
    setTimeout(
      function(){
        alert("Bene ora vediamo quanti numeri ricordi... hai 5 tentativi");

        for(var i = 0 ;i < 5 ;i ++){
          numero = parseInt(prompt("Inserisci un numero: "));
          while(isInArray(numeriInseriti,numero) == true){
            numero = parseInt(prompt("Numero gia inserito inseriscine un altro: "));
          }
          while(numero < 1){
            numero = parseInt(prompt("Il numero inserito è troppo piccolo inserirne un altro (range [1,100]): "));
          }
          while(numero > 100){
            numero = parseInt(prompt("Il numero inserito è troppo grande inserirne un altro (range [1,100]): "));
          }
          numeriInseriti.push(numero);
          numeroIndovinato()
        }

        finito = true;

      },1000);

      function numeroIndovinato(){
        var ultimoNumeroInserito = numeriInseriti[numeriInseriti.length - 1];
        for(var i = 0 ; i < numeriCasuali.length ; i ++){
          if(numeriCasuali[i] == ultimoNumeroInserito && giaPresente[i] == false){
            numeriIndovinati.push(ultimoNumeroInserito);
            giaPresente[i] = true;
            punteggio ++;
          }
        }
      }

      setTimeout(
        function(){
            console.log("numeri usciti prima ----> " + numeriCasuali);
            console.log("numeri che hai inserito ---> " + numeriInseriti);
            console.log("numeri corretti ---> " + numeriIndovinati);
            console.log("Punteggio ---> " + punteggio);
            stampato = true;
        },2000);


        function isInArray(numeri,numero){

          for(var i = 0 ; i < numeri.length ; i ++){
            if(numeri.indexOf(numero) != -1){
              console.log("numero presente ---> " + numero);
              return true; //Vuole dire che il numero è presente
            } else {
              console.log("numero assente ---> " + numero);
              return false;//Vuole dire che non è presente
            }
          }
        }

});
