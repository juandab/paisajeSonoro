
function iniciarMap(){
    var coord = {lat:4.6019163105637855 ,lng: -74.07839655898347};
    var map = new google.maps.Map(document.getElementById('map'),{
      zoom: 14,
      center: coord
    });

// Marcador de Calle 10
    var marketCalle10 = {lat:4.600026479460904, lng:-74.07999119871776};
    var marker = new google.maps.Marker({
      position: marketCalle10,
      map: map,
      title: "Bogota Colombia - San Victorino - Calle 13 "
    });
    var texto = "<h1 class='tituloGrande'>Nombre del lugar</h1>" 
    + "<p>Descripcion del lugar</p>" 
    + '<audio id="audio"><source src="audio/BODEGA DE PIÑATAS.mp3" type="audio/mpeg"></audio>' 
    + '<div class="reproductores"><button id="playPauseBTN" onclick="playPause()">Play &#9658;</button>&nbsp;&nbsp;<button onclick="stop()">Stop &#9611;</button></div>'
  ;
    var informacion = new google.maps.InfoWindow({
      content:texto
    });
    marker.addListener('click',function () {
      informacion.open(map,marker)
    });

    // Marcador de Calle 10

    // Marcador de Skate Park
    var markerSkate = {lat:4.596472356872688,lng:-74.08337283205327};
    var marker2 = new google.maps.Marker({
      position: markerSkate,
      map: map,
      title:"Bogota Colombia - San Victorimo - Tercer Milenio - SkatePark"
    });
    var texto2 = '<h1>Parque Metropolitano - Tercer Milenio</h1>'
      +'<h2 id="title2">Skate Park Tercer Milenio</h2> '
      +'<p>Lugar de encuentro de niños, jóvenes y adultos donde se comparte al aire libre de la actividad física en unas instalaciones mejores intervenidas en la ciudad para desarrollar deportes, juegos y actividades lúdicas.</p>' 
      + '<audio id="audio2"><source src="audio/SKATE PARK.mp3" type="audio/mpeg"></audio>'
      +  '<div class="reproductores"><button id="playPauseBTN2" onclick="playPause2()">Play &#9658;</button>&nbsp;&nbsp;<button onclick="stop2()">Stop &#9611;</button></div>'
    var informacion2 = new google.maps.InfoWindow({
      content:texto2
    })

  marker2.addListener('click', function () {
      informacion2.open(map,marker2)
  });
  // Marcador de Skate Park

  // Marcador de ejemplo3

  var markerExaple = {lat:4.600559627905172,lng:-74.07783864444269};
  var marker3 = new google.maps.Marker({
    position:markerExaple,
    map:map,
    title:"BOGOTA COLOMBIA - SAN VICTORINO - CARRERA 10"
  });

  var texto3 = '<h1>CRA 10 - 10 min</h1>'
  +'<h2 id="title2">Calle de las Brujas - Calle de las Siete Vueltas </h2> '
  +'<p>Desde la época colonial la carrera Décima estaba conformada por senderos angostos, la mayor parte de su trazado se encuentra en la localidad de Santa Fe, en su corto trayecto recibía diversos nombres, como calle de Santa Inés, calle de las brujas o calle de las siete vueltas</p>' 
  + '<audio id="audio3"><source src="audio/" type="audio/mpeg"></audio>'
  +  '<div class="reproductores"><button id="playPauseBTN3" onclick="playPause3()">Play &#9658;</button>&nbsp;&nbsp;<button onclick="stop3()">Stop &#9611;</button></div>'
var informacion3 = new google.maps.InfoWindow({
  content:texto3
})

marker3.addListener('click', function () {
  informacion3.open(map,marker3)
});
  // Marcador de ejemplo3 
};

// Reproductor de Calle 13 
var audio = document.getElementById("audio");
var playPauseBTN = document.getElementById("playPauseBTN");
var count = 0;
function playPause() {
  if(count == 0) {
    count = 1;
    audio.play();
    playPauseBTN.innerHTML = "Pause &#9208;";

  }else{
    count = 0;
    audio.pause();
    playPauseBTN.innerHTML = "Play &#9658;";
  }
}

function stop(){
  playPause()
  audio.pause();
  audio.currentTime = 0;
  playPauseBTN.innerHTML = "Play &#9658;";

}
// Reproductor de Calle 13

// Reproductor de Skate Park 
var audio2 = document.getElementById("audio2");
var playPauseBTN2 = document.getElementById("playPauseBTN2");
var count = 0;
function playPause2() {
  if(count == 0) {
    count = 1;
    audio2.play();
    playPauseBTN2.innerHTML = "Pause &#9208;";

  }else{
    count = 0;
    audio2.pause();
    playPauseBTN2.innerHTML = "Play &#9658;";
  }
}

function stop2(){
  playPause()
  audio2.pause();
  audio2.currentTime = 0;
  playPauseBTN2.innerHTML = "Play &#9658;";

}
// Reproductor de AUDIO #3 
var audio3 = document.getElementById("audio3");
var playPauseBTN3 = document.getElementById("playPauseBTN3");
var count = 0;
function playPause3() {
  if(count == 0) {
    count = 1;
    audio3.play();
    playPauseBTN3.innerHTML = "Pause &#9208;";

  }else{
    count = 0;
    audio3.pause();
    playPauseBTN3.innerHTML = "Play &#9658;";
  }
}

function stop3(){
  playPause3()
  audio3.pause();
  audio3.currentTime = 0;
  playPauseBTN3.innerHTML = "Play &#9658;";

}
// Reproductor de audio #4
var audio4 = document.getElementById("audio4");
var playPauseBTN4 = document.getElementById("playPauseBTN4");
var count = 0;
function playPause4() {
  if(count == 0) {
    count = 1;
    audio4.play();
    playPauseBTN4.innerHTML = "Pause &#9208;";

  }else{
    count = 0;
    audio4.pause();
    playPauseBTN4.innerHTML = "Play &#9658;";
  }
}

function stop4(){
  playPause4()
  audio4.pause();
  audio4.currentTime = 0;
  playPauseBTN4.innerHTML = "Play &#9658;";

}
