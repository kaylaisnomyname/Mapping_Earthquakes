/* module 13, mapping earthquakes, online materials practice */

// keep in mind to write reusable code

// Add console.log to check to see if our code is working.
console.log("working");

// Create the map object with a center and zoom level(scale of 0-18). option 1; The [lat, lng] is somewhere in US
let map = L.map('mapid').setView([40.7, -94.5], 4);


// // Create the map object with a center and zoom level. option 2. this option can add multiple tile layers or background image.
// let map = L.map("mapid", {
//     center: [
//       40.7, -94.5
//     ],
//     zoom: 4
//   });

// // add tile layer- option 1 : use the Leaflet doc
// // create the tile layer that will be the background of our map. Other mapbox styles, check s13.2.4;
// let streets = L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
//     attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
//     maxZoom: 18,
//     id: 'mapbox/streets-v11',
//     tileSize: 512,
//     zoomOffset: -1,
//     accessToken: API_KEY
// });
// // Then we add our 'graymap' tile layer to the map.
// streets.addTo(map);

// add tile layer- option 2 : use the Mapbox Styles APIs
// check (https://docs.mapbox.com/help/glossary/static-tiles-api/) for tile APIs
// mapbox styles check (https://docs.mapbox.com/api/maps/styles/)
let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/{z}/{x}/{y}?access_token={accessToken}', {
attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    accessToken: API_KEY
});

// Then we add our 'graymap' tile layer to the map.
streets.addTo(map);




