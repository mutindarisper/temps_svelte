<!-- Map.svelte -->
<script>
    import { onMount } from "svelte";
    import L from "leaflet";
    import "leaflet/dist/leaflet.css";
    import axios from "axios";
    import "leaflet-draw/dist/leaflet.draw.css";

    let map;
    let data = [];

    onMount(async () => {
        // Fetch data from the API using Axios
        try {
            // const response = await axios.get("https://api.example.com/data");
            // data = response.data;

            // Initialize Leaflet map
            map = L.map("map", { zoomControl: false }).setView([0.2, 36.8], 6);

            // Add Tile layer (you can replace this with your preferred map provider)
            L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
                attribution: "© OpenStreetMap contributors",
            }).addTo(map);
            L.control.scale({ position: "bottomright" }).addTo(map);
            L.control.zoom({ position: "topright" }).addTo(map);

            L.Control.Draw({ position: "topleft" }).addTo(map);


            // Initialize the Leaflet.draw plugin
            const drawnItems = new L.FeatureGroup();
            map.addLayer(drawnItems);

            const drawControl = new L.Control.Draw({
                edit: {
                    featureGroup: drawnItems,
                    poly: {
                        allowIntersection: false,
                    },
                },
                draw: {
                    polygon: {
                        allowIntersection: false,
                        showArea: true,
                    },
                    polyline: false,
                    marker: false,
                    circlemarker: false,
                    rectangle: false,
                    circle: false,
                },
            });
            map.addControl(drawControl);

            map.on("draw:created", function (e) {
                const type = e.layerType;
                const layer = e.layer;

                if (type === "polygon") {
                    // Do something with the drawn polygon, e.g., add it to the map
                    drawnItems.addLayer(layer);
                }
            });

            // Add markers based on fetched data
            // data.forEach((item) => {
            L.marker([0.2, 36.8]).addTo(map).bindPopup("hey!"); //.openPopup();
            // });
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    });
</script>

<div id="map"></div>

<style>
    #map {
        width: 57vw;
        height: 50vh;
    }
</style>
