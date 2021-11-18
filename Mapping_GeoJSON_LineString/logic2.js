  /* GeoJSON, 
  s13.5.4, multiple maps
  */

// 0. Add console.log to check to see if our code is working.
console.log("Mapping_multiple_GeoJSON_Maps is working");

// 1.2 map tileLayer
let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/outdoors-v11/tiles/{z}/{x}/{y}?access_token={accessToken}', {
attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    accessToken: API_KEY
});

// 1.3 create the dark view tile layer that will be an option for our map.
let dark = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/dark-v10/tiles/{z}/{x}/{y}?access_token={accessToken}', {
attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    accessToken: API_KEY
});

let light = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/{z}/{x}/{y}?access_token={accessToken}', {
attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    accessToken: API_KEY
});

// navigation-night view
let naviNight = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/navigation-night-v1/tiles/{z}/{x}/{y}?access_token={accessToken}', {
attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    accessToken: API_KEY
});
let naviDay = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/navigation-day-v1/tiles/{z}/{x}/{y}?access_token={accessToken}', {
attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    accessToken: API_KEY
});

// 1.4 create a baseMap with streets and dark layers:
var baseMap = {
    Streets: streets,
    Dark: dark,
    Light: light,
    Navigation_Night: naviNight,
    Navigation_Day: naviDay
};


// 1.5 create map object
let map = L.map("mapid", {
    center: [44.0, -80.0],
    zoom: 2,
    layers: [naviNight]
});

// 1.6 Pass our map layers into our layers control and add the layers control to the map.
L.control.layers(baseMap).addTo(map);


function onEachPopup(feature, layer) {
    layer.bindPopup("<h2> Airline: " + feature.properties.airline + "</h2> <hr> <h2>Destination: " + feature.properties.dst + "</h2>")
    .addTo(map)
};


// new source data
// Accessing the Toronto airline routes.json .
var torontoData = "../torontoRoutes.json";

// 3.1 d3.json() to grabe GeoJson data
d3.json(torontoData).then(function(data) {
    console.log(data);
    L.geoJSON(data,{
        onEachFeature: function(feature, layer) {
            layer.bindPopup("<h2> Airline: " + feature.properties.airline + "</h2> <hr> <h2>Destination: " + feature.properties.dst + "</h2>")},
        color : "yellow",
        opacity : 0.5,
        weight : 2
    }).addTo(map);

});

// light yellow : '#ffffa1'

