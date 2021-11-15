# Mapping_Earthquakes

## process
0. folder structure:
    - main folder:
        - index.html
        - static:
            - css : style.css
            - js : 
                - config.js
                - logic.js 
            - 
1. create index.html
    - adding Leaflet.css, including integrity value
    - adding Leaflet.js in <head> or map <div> element, including the integrity value
    - create a map div to hold the map, specify map div id
2. create style.css file
    - specify the map height and extra
    - adding style.css access inside index.html, below the Leaflet.css /link>, inside <head> element
3. create config.js to hold Mapbox API token
4. create logic.js : codes to create map and add data to map
5. add config.js and logic.js to index.html
