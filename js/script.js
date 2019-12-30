//btn genera
var buttonGenera = document.getElementById('genera');
buttonGenera.addEventListener('click',
function(){
  var inputName = document.getElementById('nomeUtente');
  var nomeUtente = inputName.value;
  console.log(nomeUtente);

  var inputKm = document.getElementById('km');
  var kmDaPercorrere = parseInt(inputKm.value);
  console.log(kmDaPercorrere);

  var rangeEtaSelect = document.getElementById('range-eta');
  var fascia = rangeEtaSelect.value;
  console.log(fascia);

  var prezzoKm = 0.21;
  var prezzoBiglietto = kmDaPercorrere * prezzoKm;
  console.log(prezzoBiglietto);

  var offerta = 'Tariffa standard';

    //condizioni per offerta costo biglietto
    if(fascia=='minorenne'){
    prezzoBiglietto -= ((prezzoBiglietto * 20) / 100);
    offerta = 'Sconto Minorenne'

    } else if(fascia=='Over65'){
      prezzoBiglietto -= ((prezzoBiglietto * 40) / 100);
      offerta = 'Sconto Silver'
    }
    var carrozza = Math.floor(Math.random() * 9) + 1;
    var cp = Math.floor(Math.random() *(100000 - 90000 + 1) ) + 90000;
    document.getElementById('nomepasseggero').innerHTML = nomeUtente;
    document.getElementById('offerta').innerHTML = offerta;
    document.getElementById('costobiglietto').innerHTML = prezzoBiglietto.toFixed(2);
    document.getElementById('carrozza').innerHTML = carrozza;
    document.getElementById('codiceCp').innerHTML = cp;
  }
)
//btn annulla
var annulla = document.getElementById('annulla');
annulla.addEventListener("click",
  function () {
  document.getElementById('nomeUtente').value = ("");
  document.getElementById('km').value = ("");
  document.getElementById('nomepasseggero').innerHTML = ("");
  document.getElementById('offerta').innerHTML = ("");
  document.getElementById('carrozza').innerHTML = ("");
  document.getElementById('codiceCp').innerHTML = ("");
  document.getElementById('costobiglietto').innerHTML = ("");
  }
)
