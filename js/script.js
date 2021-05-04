
function iniciarMap(){
    var coord = {lat:4.6019163105637855 ,lng: -74.07839655898347};
    var map = new google.maps.Map(document.getElementById('map'),{
      zoom: 14,
      center: coord
    });
    var marketOne = {lat:4.600026479460904, lng:-74.07999119871776};
    var marker = new google.maps.Marker({
      position: marketOne,
      map: map
    });
    var MarketTwo = {lat:4.6019163105637855,lng:-74.07839655898347};
    var marker = new google.maps.Marker({
        position: MarketTwo,
        map: map
    });
    var MarketTwo = {lat:4.599575,lng:-74.081629};
    var marker = new google.maps.Marker({
        position: MarketTwo,
        map: map
    });
    var MarketFour = {lat:4.602112,lng:-74.076846};
    var marker = new google.maps.Marker({
      position: MarketFour,
      map: map 
    })
};
  
var reproductor = document.getElementById("reproducir");
reproducir.addEventListener('click',presionar,false);
function presionar(){
  if (!medio.paused && !medio.ended) {
    medio.paused();
    reproducir.innerHTML='Reproducir';
    window.clearInterval(bucle);
  }else{
    medio.play();
    reproducir.innerHTML='Pausa';
    bucle.setInterval(estado, 1000);
  }

};