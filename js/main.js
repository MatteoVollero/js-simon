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
    var finito = false;
    var stampato = false;

    //Espongo i numeri tramite un alert
    for(var i = 0 ; i < 5 ; i ++){
      var numero = Math.floor(Math.random() * 5 + 1);
      numeriCasuali.push(numero);
      giaPresente.push(false);
      alert(numero);
    }

    //Aspetto 30 secondi
    setTimeout(
      function(){
        alert("Bene ora vediamo quanti numeri ricordi... hai 5 tentativi");

        for(var i = 0 ;i < 5 ;i ++){
          numeriInseriti.push(parseInt(prompt("Inserisci un numero: ")));
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

});
