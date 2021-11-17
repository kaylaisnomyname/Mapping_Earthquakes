  /* Mapping Lines */

// Add console.log to check to see if our code is working.
console.log("Mapping_Lines is working");

// Create the map object with a center among the airports
let map = L.map('mapid').setView([38.7604, -90.3698], 4);
// Coordinats for each point to be used in the line.
let line = [
    [37.6213, -122.3790],
    [40.6413,-73.7781],
    [30.1974, -97.6663],
    [43.6777, -79.6248]
  ];

// create a line with polyline()
L.polyline(line, {
    color: "blue",
    opacity: 0.5,
    weight: 4,
    dashArray: [10,10]
    
}).addTo(map);


// iterate through cities and add a circle marker to the location, bindPopup with city name, state, and population with thousand separator
line.forEach(city => 
    L.marker(city)
    .bindPopup("Hello city")
    .addTo(map));


let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/{z}/{x}/{y}?access_token={accessToken}', {
attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    accessToken: API_KEY
});

// Then we add our 'graymap' tile layer to the map.
streets.addTo(map);


// s13.4.4 skill drill, blue dash line, lineweight 4, opacity 0.5, light map
// SFO [37.6213, -122.3790]
// JFK [40.6413,-73.7781]
// AUS [30.1974, -97.6663]
// YYZ [43.6777, -79.6248]