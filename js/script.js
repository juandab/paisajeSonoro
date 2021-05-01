
function iniciarMap(){
    var coord = {lat:4.6019163105637855 ,lng: -74.07839655898347};
    var map = new google.maps.Map(document.getElementById('map'),{
      zoom: 12,
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
};
    