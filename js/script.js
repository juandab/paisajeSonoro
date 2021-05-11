var consulta = window.matchMedia('(max-width: 500px)')
consulta.addListener(mediaQuery)

var $burguerButtom = document.getElementById('burguer-buttom');
var $menu = document.getElementById('menu');
function toggleMenu(){
    $menu.classList.toggle('active')
};
function showMenu(){
    $menu.classList.add('active')
};
function hideMenu(){
    $menu.classList.remove('active')
};

function mediaQuery(){
    if (consulta.matches){
  console.log('se cumple la condicion')
  $burguerButtom.addEventListener('touchstart', toggleMenu)

  }else {
    console.log('No se cumple la condicion')
    $burguerButtom.removeEventListener('touchstart', toggleMenu)
  }
};


function iniciarMap(){
    var coord = {lat:4.6019163105637855 ,lng: -74.07839655898347};
    var map = new google.maps.Map(document.getElementById('map'),{
      zoom: 14,
      center: coord
    });

// Marcador 1 de Carrera 10 calle 13
    var marketCalle10 = {lat:4.602159144577068, lng:-74.07689400014242};
    var marker = new google.maps.Marker({
      position: marketCalle10,
      map: map,
      title: "Bogota Colombia - San Victorino - Cra 10 CLL 13"
    });
    var texto = "<h1>Esquina carrera 10 y Avenida Jiménez</h1>"
    +'<h2 id="title2">Esquina de encuentro</h2>' 
    + "<p>Recorrido a la esquina entre carrera 10 - Avenida Jiménes. Mediodía, ambiente laboral, almuerzos , ritmo de motores, siga, siga…</p>" 
    + '<audio id="audio6"><source src="audio/CRA10 - CLL13 MEDIODIA.mp3.mp3" type="audio/mpeg"></audio>' 
    + '<div class="reproductores"><button id="playPauseBTN6" onclick="playPause6()">Play &#9658;</button>&nbsp;&nbsp;<button onclick="stop6()">Stop &#9611;</button></div>'
  ;
    var informacion = new google.maps.InfoWindow({
      content:texto
    });
    marker.addListener('click',function () {
      informacion.open(map,marker)
    });

    // Marcador 1 de Calle 10

    // Marcador 2 de Skate Park
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

  // Marcador 3

  var markerTree = {lat:4.600559627905172,lng:-74.07783864444269};
  var marker3 = new google.maps.Marker({
    position:markerTree,
    map:map,
    title:"BOGOTA COLOMBIA - SAN VICTORINO - CARRERA 10"
  });

  var texto3 = '<h1>CRA 10 - 10 min</h1>'
  +'<h2 id="title2">Calle de las Brujas - Calle de las Siete Vueltas </h2> '
  +'<p>Desde la época colonial la carrera Décima estaba conformada por senderos angostos, la mayor parte de su trazado se encuentra en la localidad de Santa Fe, en su corto trayecto recibía diversos nombres, como calle de Santa Inés, calle de las brujas o calle de las siete vueltas</p>' 
  + '<audio id="audio3"><source src="audio/" type="audio/mpeg"></audio>'
  +  '<div class="reproductores vista2"><button id="playPauseBTN3" onclick="playPause3()">Play &#9658;</button>&nbsp;&nbsp;<button onclick="stop3()">Stop &#9611;</button></div>'
var informacion3 = new google.maps.InfoWindow({
  content:texto3
})

marker3.addListener('click', function () {
  informacion3.open(map,marker3)
});
  // Marcador 4 CRA 12
  var markerFour = {lat:4.601373,lng:-74.079320};
  var marker4 = new google.maps.Marker({
    position:markerFour,
    map:map,
    title:"BOGOTA COLOMBIA - SAN VICTORINO - CRA 12"
  });

  var texto4 = '<h1>San Victorino - CRA 12</h1>'
  +'<h2 id="title2">Papeleria, Textiles, Fiesta </h2> '
  +'<p>En la actualidad San Victorino sigue siendo el lugar comercial por excelencia de las clases populares de la ciudad.</p>' 
  + '<audio id="audio7"><source src="audio/" type="audio/mpeg"></audio>'
  +  '<div class="reproductores vista2"><button id="playPauseBTN7" onclick="playPause7()">Play &#9658;</button>&nbsp;&nbsp;<button onclick="stop7()">Stop &#9611;</button></div>'
var informacion4 = new google.maps.InfoWindow({
  content:texto4
})

marker4.addListener('click', function () {
  informacion4.open(map,marker4)
});
// Marcador 5 CLL 12B 
var markerFive = {lat:4.601480,lng:-74.078468};
  var marker5 = new google.maps.Marker({
    position:markerFive,
    map:map,
    title:"BOGOTA COLOMBIA - SAN VICTORINO - CLL 12B"
  });

  var texto5 = '<h1>San Victorino - CLL 12B</h1>'
  +'<h2 id="title2">San Victorino 12B</h2> '
  +'<p>Galletas chocolates a la orden, lo que es camiseta lacos, a la orden, siga, a la orden, ¿Qué libro busca?, Bodega de Jeanes, camisas, chaquetas, ¡Joven se le puede colaborar, pregunte!</p>' 
  + '<audio id="audio8"><source src="audio/" type="audio/mpeg"></audio>'
  +  '<div class="reproductores vista2"><button id="playPauseBTN8" onclick="playPause8()">Play &#9658;</button>&nbsp;&nbsp;<button onclick="stop8()">Stop &#9611;</button></div>'
var informacion5 = new google.maps.InfoWindow({
  content:texto5
})

marker5.addListener('click', function () {
  informacion5.open(map,marker5)
});


// MARCADOR 6 CLL 11 CRA 12
var markerSix = {lat:4.600516,lng:-74.078765};
  var marker6 = new google.maps.Marker({
    position:markerSix,
    map:map,
    title:"BOGOTA COLOMBIA - SAN VICTORINO - CLL 11 CRA 11"
  });

  var texto6 = '<h1>11 - 11</h1>'
  +'<h2 id="title2">San Victorino 11</h2> '
  +'<p>En la actualidad San Victorino sigue siendo el lugar comercial por excelencia de las clases populares de la ciudad.</p>' 
  + '<audio id="audio9"><source src="audio/" type="audio/mpeg"></audio>'
  +  '<div class="reproductores vista2"><button id="playPauseBTN9" onclick="playPause9()">Play &#9658;</button>&nbsp;&nbsp;<button onclick="stop9()">Stop &#9611;</button></div>'
var informacion6 = new google.maps.InfoWindow({
  content:texto6
})

marker6.addListener('click', function () {
  informacion6.open(map,marker6)
});
// MARCADOR 7 CLL 9

var markerSeven = {lat:4.599794,lng:-74.081816};
  var marker7 = new google.maps.Marker({
    position:markerSeven,
    map:map,
    title:"BOGOTA COLOMBIA - SAN VICTORINO - CLL 9"
  });

  var texto7 = '<h1>Calle 9</h1>'
  +'<h2 id="title2">Nocturna</h2> '
  +'<p>Contrastes, modulaciones, reverberaciones, comunidad y comunicación, voces y motores este es un lugar en permanente transformación, que requiere</p>' 
  + '<audio id="audio9"><source src="audio/" type="audio/mpeg"></audio>'
  +  '<div class="reproductores vista2"><button id="playPauseBTN9" onclick="playPause9()">Play &#9658;</button>&nbsp;&nbsp;<button onclick="stop9()">Stop &#9611;</button></div>'
var informacion7 = new google.maps.InfoWindow({
  content:texto7
})

marker7.addListener('click', function () {
  informacion7.open(map,marker7)
});

// MARCADOR 8 ENCERRADOS
var markerEight = {lat:4.601992,lng:-74.078603};
  var marker8 = new google.maps.Marker({
    position:markerEight,
    map:map,
    title:"BOGOTA COLOMBIA - SAN VICTORINO - ENCERRADOS NO"
  });

  var texto8 = '<h1>ENCERRADOS NO</h1>'
  +'<h2 id="title2">Tenemos que abrir Los Ojos</h2> '
  +'<p>Reflexiones vendedores ambulantes y urgencias sociales en medio de la pandemia.</p>' 
  + '<audio id="audio10"><source src="audio/" type="audio/mpeg"></audio>'
  +  '<div class="reproductores vista2"><button id="playPauseBTN10" onclick="playPause10()">Play &#9658;</button>&nbsp;&nbsp;<button onclick="stop10()">Stop &#9611;</button></div>'
var informacion8 = new google.maps.InfoWindow({
  content:texto8
})

marker8.addListener('click', function () {
  informacion8.open(map,marker8)
});
// MARCADOR 9 CRA 11 - CLL 11

var markerNine = {lat:4.599974,lng:-74.079107};
  var marker9 = new google.maps.Marker({
    position:markerNine,
    map:map,
    title:"BOGOTA COLOMBIA - SAN VICTORINO - ENCERRADOS NO"
  });

  var texto9 = '<h1>CRA 11- CLL 11</h1>'
  +'<h2 id="title2">RECORRIDO</h2> '
  +'<p>Pijama, Short, regaños. Movimiento y trabajo acciones repetidas espacios transitados. Plásticos, motores, gritos.</p>' 
  + '<audio id="audio11"><source src="audio/" type="audio/mpeg"></audio>'
  +  '<div class="reproductores vista2"><button id="playPauseBTN11" onclick="playPause11()">Play &#9658;</button>&nbsp;&nbsp;<button onclick="stop11()">Stop &#9611;</button></div>'
var informacion9 = new google.maps.InfoWindow({
  content:texto9
})

marker9.addListener('click', function () {
  informacion9.open(map,marker9)
});
// MARCADOR 10 QUEREMOS TRABAJAR

var markerTen = {lat:4.601805,lng:-74.078583};
  var marker10 = new google.maps.Marker({
    position:markerTen,
    map:map,
    title:"BOGOTA COLOMBIA - SAN VICTORINO - QUEREMOS TRABAJAR"
  });

  var texto10 = '<h1>Queremos Trabajar</h1>'
  +'<h2 id="title2">Invitación - Protesta - Fiesta</h2> '
  +'<p>Comerciantes quieren ser Escuchados.</p>' 
  + '<audio id="audio12"><source src="audio/" type="audio/mpeg"></audio>'
  +  '<div class="reproductores vista2"><button id="playPauseBTN12" onclick="playPause12()">Play &#9658;</button>&nbsp;&nbsp;<button onclick="stop12()">Stop &#9611;</button></div>'
var informacion10 = new google.maps.InfoWindow({
  content:texto10
})

marker10.addListener('click', function () {
  informacion10.open(map,marker10)
});
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
// Reproductor de audio #5
var audio5 = document.getElementById("audio5");
var playPauseBTN5 = document.getElementById("playPauseBTN5");
var count = 0;
function playPause5() {
  if(count == 0) {
    count = 1;
    audio5.play();
    playPauseBTN5.innerHTML = "Pause &#9208;";

  }else{
    count = 0;
    audio5.pause();
    playPauseBTN5.innerHTML = "Play &#9658;";
  }
}

function stop5(){
  playPause5()
  audio5.pause();
  audio5.currentTime = 0;
  playPauseBTN5.innerHTML = "Play &#9658;";

}
// Reproductor de audio #6
var audio6 = document.getElementById("audio6");
var playPauseBTN6 = document.getElementById("playPauseBTN6");
var count = 0;
function playPause6() {
  if(count == 0) {
    count = 1;
    audio6.play();
    playPauseBTN6.innerHTML = "Pause &#9208;";

  }else{
    count = 0;
    audio6.pause();
    playPauseBTN6.innerHTML = "Play &#9658;";
  }
}

function stop6(){
  playPause6()
  audio6.pause();
  audio6.currentTime = 0;
  playPauseBTN6.innerHTML = "Play &#9658;";
}

// Reproductor de audio #7
var audio7 = document.getElementById("audio7");
var playPauseBTN7 = document.getElementById("playPauseBTN7");
var count = 0;
function playPause7() {
  if(count == 0) {
    count = 1;
    audio7.play();
    playPauseBTN7.innerHTML = "Pause &#9208;";

  }else{
    count = 0;
    audio7.pause();
    playPauseBTN7.innerHTML = "Play &#9658;";
  }
}

function stop7(){
  playPause7()
  audio7.pause();
  audio7.currentTime = 0;
  playPauseBTN7.innerHTML = "Play &#9658;";
}
// Reproductor de audio #8
var audio8 = document.getElementById("audio8");
var playPauseBTN8 = document.getElementById("playPauseBTN8");
var count = 0;
function playPause8() {
  if(count == 0) {
    count = 1;
    audio8.play();
    playPauseBTN8.innerHTML = "Pause &#9208;";

  }else{
    count = 0;
    audio8.pause();
    playPauseBTN8.innerHTML = "Play &#9658;";
  }
}

function stop8(){
  playPause8()
  audio8.pause();
  audio8.currentTime = 0;
  playPauseBTN8.innerHTML = "Play &#9658;";
}

// Reproductor de audio #9
var audio9 = document.getElementById("audio9");
var playPauseBTN9 = document.getElementById("playPauseBTN9");
var count = 0;
function playPause9() {
  if(count == 0) {
    count = 1;
    audio9.play();
    playPauseBTN9.innerHTML = "Pause &#9208;";

  }else{
    count = 0;
    audio9.pause();
    playPauseBTN9.innerHTML = "Play &#9658;";
  }
}

function stop9(){
  playPause9()
  audio9.pause();
  audio9.currentTime = 0;
  playPauseBTN9.innerHTML = "Play &#9658;";
}
// Reproductor de audio #10
var audio10 = document.getElementById("audio10");
var playPauseBTN10 = document.getElementById("playPauseBTN10");
var count = 0;
function playPause10() {
  if(count == 0) {
    count = 1;
    audio10.play();
    playPauseBTN10.innerHTML = "Pause &#9208;";

  }else{
    count = 0;
    audio10.pause();
    playPauseBTN10.innerHTML = "Play &#9658;";
  }
}

function stop10(){
  playPause10()
  audio10.pause();
  audio10.currentTime = 0;
  playPauseBTN10.innerHTML = "Play &#9658;";
}
// Reproductor de audio #11
var audio11 = document.getElementById("audio11");
var playPauseBTN11 = document.getElementById("playPauseBTN11");
var count = 0;
function playPause11() {
  if(count == 0) {
    count = 1;
    audio11.play();
    playPauseBTN11.innerHTML = "Pause &#9208;";

  }else{
    count = 0;
    audio11.pause();
    playPauseBTN11.innerHTML = "Play &#9658;";
  }
}

function stop11(){
  playPause11()
  audio11.pause();
  audio11.currentTime = 0;
  playPauseBTN11.innerHTML = "Play &#9658;";
}
// Reproductor de audio #12
var audio12 = document.getElementById("audio12");
var playPauseBTN12 = document.getElementById("playPauseBTN12");
var count = 0;
function playPause12() {
  if(count == 0) {
    count = 1;
    audio12.play();
    playPauseBTN12.innerHTML = "Pause &#9208;";

  }else{
    count = 0;
    audio12.pause();
    playPauseBTN12.innerHTML = "Play &#9658;";
  }
}

function stop12(){
  playPause12()
  audio12.pause();
  audio12.currentTime = 0;
  playPauseBTN12.innerHTML = "Play &#9658;";
}
