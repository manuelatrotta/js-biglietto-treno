//alert("click ok for visit this page!");
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


    if(fascia=='minorenne'){
    prezzoBiglietto -= ((prezzoBiglietto * 20) / 100);

    } else if(fascia=='Over65'){
      prezzoBiglietto -= ((prezzoBiglietto * 40) / 100);
    }
    document.getElementById('nomeUtente').innerHTML = name;
    document.getElementById('offerta').innerHTML = offerta;
  }
);
