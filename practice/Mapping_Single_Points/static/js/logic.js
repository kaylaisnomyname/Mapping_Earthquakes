// Mapping_Single_Point
// Add console.log to check to see if our code is working.
console.log("Mapping_Single_Point is working");

// Create the map object with a center and zoom level(scale of 0-18). option 1; The [lat, lng] is somewhere in US
let map = L.map('mapid').setView([40.7, -94.5], 4);

// add tile layer- option 2 : use the Mapbox Styles APIs
// mapbox styles check (https://docs.mapbox.com/api/maps/styles/)
let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/{z}/{x}/{y}?access_token={accessToken}', {
attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    accessToken: API_KEY
});

// Then we add our 'graymap' tile layer to the map.
streets.addTo(map);
