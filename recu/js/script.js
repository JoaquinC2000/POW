const map = L.map('map').setView([0, 0], 3);

// Agregar capas de OpenStreetMap
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '© OpenStreetMap contributors',
    maxZoom: 19
}).addTo(map);

// Intentar obtener la ubicación del usuario
if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition((position) => {
            const userLocation = [position.coords.latitude, position.coords.longitude];
            map.setView(userLocation, 13); // Centrar el mapa en la ubicación del usuario
            L.marker(userLocation).addTo(map)
                .bindPopup("Estás aquí")
                .openPopup();
        },
        () => {
            alert("No se pudo obtener tu ubicación");
        }
    );
} else {
    alert("Tu navegador no soporta geolocalización");
}