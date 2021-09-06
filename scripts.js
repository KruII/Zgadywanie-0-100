var targetNumber = Math.floor(Math.random() * 101) ;
var liczbaProb = 0;
var koniecGry = 101;
var n = targetNumber.toString();

var liczba = document.getElementById('liczba');

var button = document.getElementById('button').onclick = function check() {
if (liczbaProb >= koniecGry){
      pokazporazke();
}
else
  if (liczba.value > n) {
      pokazblad1();
  }
  else if (liczba.value < n) {
      pokazblad2();
  }
  else if (liczba.value == n) { 
      pokazwygrana();
  }
    
    
  
};
function pokazwygrana() {
    liczbaProb++;
    alert('Wygrałeś w : ' + liczbaProb + ' ruchach!');
}

function pokazporazke() {
    alert('Po wszystkich możliwych możliwościach niezgadłeś. Wylosowana liczba to: ' + n);
}

function pokazblad1() {
    liczbaProb++;
    alert('Liczba jest większa od szukanej.');
    
}
function pokazblad2() {
    liczbaProb++;
    alert('Liczba jest mniejsza od szukanej.');
    
}






