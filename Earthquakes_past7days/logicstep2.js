/* Earthquake_past7days, step 2 style up*/

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

//1.4 pass layer control
L.control.layers(baseMap).addTo(map);

// create a style
let myStyle = {
    color: "#ffffa1",
    weight:2 
};

// or create a style function and callback in the d3.json()
function styleInfo(feature) {
    return {
      opacity: 1,
      fillOpacity: 0.5,
      fillColor: "#ffae42",
      color: "#000000",
      radius: getRadius(feature.properties.mag),
      stroke: true,
      weight: 0.5
    };
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
        style: styleInfo
    }).addTo(map);
});

// '#ffae42' : light orange