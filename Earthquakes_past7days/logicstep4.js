/* Earthquake_past7days, step 3 :add color and popup*/

// 0. Add console.log to check to see if our code is working.
console.log("Mapping_multiple_GeoJSON_Maps is working");

// 1.1 add map tileLayer options : streets and satellite streets
let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/{z}/{x}/{y}?access_token={accessToken}', {
attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    accessToken: API_KEY
});

let satelliteStreets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/satellite-streets-v11/tiles/{z}/{x}/{y}?access_token={accessToken}', {
attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    accessToken: API_KEY
});

// 1.2 create a baseMap :
var baseMap = {
    Streets: streets,
    Satellite_Streets: satelliteStreets
};

// 1.3 create map object
var map = L.map("mapid", {
    center:  [39.5, -98.5],
    zoom: 3,
    layers: [streets]
});

// 1.5 create overlay layer 
let earthquakes = new L.layerGroup();

let overlays = {
  Earthquakes: earthquakes
}; 

//1.4 pass layer control
L.control.layers(baseMap, overlays).addTo(map);



// or create a style function and callback in the d3.json()
function styleInfo(feature) {
    return {
      opacity: 1,
      fillOpacity: 0.5,
      fillColor: getColor(feature.properties.mag),
      color: "#000000",
      radius: getRadius(feature.properties.mag),
      stroke: true,
      weight: 0.5
    };
  };

function getColor(magnitude){
    if (magnitude >= 5) {
        return "#ea2c2c";
      }
      if (magnitude >= 4) {
        return "#ea822c";
      }
      if (magnitude >= 3) {
        return "#ee9c00";
      }
      if (magnitude >= 2) {
        return "#eecc00";
      }
      if (magnitude >= 1) {
        return "#d4ee00";
      }
      return "#98ee00";
};

function getRadius(mag){
    if (mag === 0){
        return 1;
    }
    return mag*4;
};

// soure data url
var link = "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_week.geojson";

// parse source data, then add GeoJSON layer to the map
d3.json(link).then(function(data){
    L.geoJSON(data, {

        pointToLayer: function(feature, latlng) {
            console.log(data);
            return L.circleMarker(latlng);
        },
        style: styleInfo,
        onEachFeature: function(feature, layer) {
            layer.bindPopup("Magnitude: " + feature.properties.mag + "<br>Location: " + feature.properties.place);
          }
    }).addTo(earthquakes);
    // then add earthquake layer to the map
    earthquakes.addTo(map);
});

// '#ffae42' : light orange