var kotak = document.querySelectorAll('.kotak');
var kodeWarna = document.getElementById('kodeWarna');
var h1 = document.querySelector('h1');
var tombolUlang = document.querySelector('#ulang');
var jmlKotak = 4;
var arrWarna = [];

fnFormatKotak();
fnUlang();

function fnFormatKotak() {
  for(var i=0; i<kotak.length; i++) {
    kotak[i].addEventListener('click', function() {
      kodeWarna.textContent = '{ ' + this.style.background + ' }';
    });
  }
}

function fnUlang() {
  arrWarna = fnTampilAcakWarna(jmlKotak);
  for(var i=0; i<kotak.length; i++) {
    kotak[i].style.background = arrWarna[i];
  }
  kodeWarna.textContent = '{ rgb }'
  h1.style.background = 'green';
}

//menentukan warna pilihan secara acak di antara warna di array
function fnPilihWarna() {
  var acak = Math.floor(Math.random() * arrWarna.length);
  return arrWarna[acak];
}

function fnTampilAcakWarna(num) {
  var arr = []
  for(var i=0; i<num; i++) {
  	arr.push(fnAcakWarna());
  }
  return arr;
}

function fnAcakWarna() {
  var r = Math.floor(Math.random() * 255);
  var g = Math.floor(Math.random() * 255);
  var b = Math.floor(Math.random() * 255);
  return 'rgb(' + r + ', ' + g + ', ' + b + ')';
}

tombolUlang.addEventListener('click', function() {
  fnUlang();
});
