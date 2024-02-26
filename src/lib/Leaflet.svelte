<!-- Map.svelte -->
<script>
    import { onMount } from "svelte";
    import L from "leaflet";
    import "leaflet/dist/leaflet.css";
    import axios from "axios";

    let map;
    let data = [];

     onMount(async () => {
        // Fetch data from the API using Axios
        try {
            // const response = await axios.get("https://api.example.com/data");
            // data = response.data;

            // Initialize Leaflet map
            map = L.map("map").setView([0.2, 36.8], 7);

            // Add Tile layer (you can replace this with your preferred map provider)
            L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
                attribution: "© OpenStreetMap contributors",
            }).addTo(map);

            // Add markers based on fetched data
            // data.forEach((item) => {
                L.marker([0.2, 36.8]).addTo(map).bindPopup('hey!').openPopup();
            // });
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    });
</script>

<div id="map"></div>

<style>
    #map {
        height: 98vh;
    }
</style>


