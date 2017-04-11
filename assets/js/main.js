var botonFutbol= document.getElementById('futbol');
var botonBasquet = document.getElementById('basquet');
var botonTennis = document.getElementById('tennis');

var canchaFut = document.getElementById('canchaFutbol');
var canchaBasquet = document.getElementById('canchaBasquet');
var canchaTennis = document.getElementById('canchaTennis');

quitarCanchas();
function quitarCanchas(){
	canchaFut.style.display = "none";
	canchaBasquet.style.display = "none";
	canchaTennis.style.display = "none";
};

function futbol(){
  quitarCanchas();
  canchaFutbol.style.display ='block';
};

function basquet(){
  quitarCanchas();
  canchaBasquet.style.display ='block';
};

function tennis(){
  quitarCanchas();
  canchaTennis.style.display = 'block';
};

botonFutbol.addEventListener("click",futbol);
botonBasquet.addEventListener("click", basquet);
botonTennis.addEventListener("click",tennis);
