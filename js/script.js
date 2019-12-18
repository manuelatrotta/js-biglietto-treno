alert("click ok for visit this page!");
//chiedere i km da percorrere
var kmPercorso = parseInt (prompt ('Inserire i km da percorrere'));
console .log (kmPercorso);
document .getElementById('kmPercorso') .innerHTML = "Secondo i tuoi km da percorrere:" + kmPercorso;
//chiedere età
var etaUtente = parseInt (prompt ('Inserire la tua età'));
console .log (etaUtente);
//moltiplicare km da percorrere con prezzo al km per avere prezzo biglietto
var prezzoBiglietto = kmPercorso * 0.21;
console .log (prezzoBiglietto);
document .getElementById('prezzoBiglietto') .innerHTML = "Il prezzo del tuo biglietto secondo tariffa ordinaria é:" + prezzoBiglietto + "&euro;";
//vedere se età<=18 applicare sconto 20%
var scontoMinorenni = (prezzoBiglietto* 20 / 100);
var prezzoMinorenni = (prezzoBiglietto - scontoMinorenni);
if (etaUtente <18) {
  console .log (prezzoMinorenni);
  document .getElementById('prezzoMinorenni') .innerHTML = "Essendo minorenne puoi usufruire del prezzo ridotto " + prezzoMinorenni + "&euro;";
}
// se età >=65 applicare sconto 40%
var scontoOver = (prezzoBiglietto* 40 / 100);
var prezzoOver = (prezzoBiglietto - scontoOver);
if (etaUtente >=65) {
  console .log (prezzoOver);
  document .getElementById('prezzoOver') .innerHTML = "Essendo Over65 puoi usufruire del prezzo ridotto " + prezzoOver + "&euro;";
}
