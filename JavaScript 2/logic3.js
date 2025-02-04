// logic3.js

document.addEventListener('DOMContentLoaded', function() {
    const stateCoordinates = {
        'AL': [32.806671, -86.791130], 'AK': [61.370716, -149.493686], 'AZ': [33.729759, -111.431221], 'AR': [36.831091, -92.142385],
        'CA': [36.116203, -119.681564], 'CO': [38.726997, -104.831919], 'CT': [39.849426, -75.749115], 'DE': [38.869737, -75.668359],
        'FL': [27.766279, -81.686783], 'GA': [33.040619, -83.643074], 'HI': [21.094318, -157.498337], 'ID': [44.299782, -114.742040],
        'IL': [40.298904, -88.539091], 'IN': [36.141791, -86.802101], 'IA': [63.806093, -91.539436], 'KS': [37.526209, -96.726486],
        'KY': [61.665423, -91.154541], 'LA': [33.834199, -91.867805], 'ME': [44.693947, -69.381927], 'MD': [39.063946, -76.802101],
        'MA': [42.230171, -71.530106], 'MI': [42.374653, -85.002362], 'MN': [45.694454, -93.900192], 'MS': [32.741646, -89.668268],
        'MO': [38.456085, -92.288368], 'MT': [46.921925, -110.454353], 'NE': [40.299468, -98.399248], 'NV': [38.313515, -117.055374],
        'NH': [43.452492, -71.563896], 'NJ': [40.298904, -74.521011], 'NM': [34.840515, -106.248482], 'NY': [40.712776, -74.005974],
        'NC': [35.630066, -79.806419], 'ND': [47.528912, -99.784012], 'OH': [40.388783, -82.764915], 'OK': [35.565342, -96.928917],
        'OR': [43.826051, -118.454315], 'PA': [40.551217, -77.191490], 'RI': [41.680893, -71.511780], 'SC': [33.856892, -80.945007],
        'SD': [44.299782, -99.438828], 'TN': [35.747845, -86.692345], 'TX': [31.054487, -97.563461], 'UT': [40.150032, -111.862434],
        'VT': [44.045876, -72.710686], 'VA': [38.003385, -78.450259], 'WA': [47.731307, -120.540099], 'WV': [38.491226, -80.954827],
        'WI': [43.631383, -91.516008], 'WY': [42.165726, -107.302490]
    };

    // Initialize the map centered around the US
    const map = L.map('map').setView([37.0902, -95.7129], 4);

    // Add OpenStreetMap tiles
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    // Create a marker cluster group
    const markers = L.markerClusterGroup();

    // Iterate over the data to add the markers with the appropriate colors
    data.forEach(row => {
        const stateAbbr = row['State'];
        const stateName = row['State Name'];
        const stateValue = row['Data Value'];

        if (stateCoordinates[stateAbbr]) {
            const [latitude, longitude] = stateCoordinates[stateAbbr];
            
            // Determine the pin color based on the percentage value
            let color = 'blue'; // Default color for values below 25
            if (stateValue > 75) {
                color = 'red';
            } else if (stateValue > 50) {
                color = 'lightred';
            } else if (stateValue > 25) {
                color = 'green';
            }
            
            // Create the marker
            const marker = L.marker([latitude, longitude], {
                icon: L.AwesomeMarkers.icon({ icon: 'info-sign', markerColor: color })
            }).bindPopup(`${stateName}: ${stateValue}%`);
            
            markers.addLayer(marker);
        }
    });

    // Add the markers to the map
    map.addLayer(markers);
});
