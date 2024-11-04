$(document).ready(function () {
    // Variables para la paginación
    let currentPage = 1; 
    const limit = 10; 

    const apiUrl = (page) => `http://localhost/apipaises/route.php?option=list_paises&limit=10&offset=&order=nombre&order_dir=desc`;

    // Función para cargar los países
    function loadCountries(page) {
        $.ajax({
            url: apiUrl(page),
            method: 'GET',
            dataType: 'json',
            success: function (response) {
                const countries = response.data;
                $('#countriesTable tbody').empty();
                countries.forEach(country => {
                    $('#countriesTable tbody').append(`
                        <tr>
                            <td>${country.nombre}</td>
                            <td><button class="view-map" data-name="${country.nombre}" data-x="${country.x}" data-y="${country.y}">Ver mapa</button></td>
                            <td><button class="view-provinces" data-id="${country.idPais}" data-name="${country.nombre}">Ver provincias</button></td>
                        </tr>
                    `);
                });

                // Asignar eventos a los botones
                $('.view-map').on('click', function () {
                    const countryName = $(this).data('name');
                    const x = $(this).data('x');
                    const y = $(this).data('y');
                    alert(`Mostrando mapa de ${countryName} en las coordenadas (${x}, ${y})`);
                });

                $('.view-provinces').on('click', function () {
                    const countryId = $(this).data('id');
                    const countryName = $(this).data('name');
                    $('#selectedCountry').text(`Pais: ${countryName}`);
                    $('#countriesTable').hide(); // Oculta la tabla de países
                    $('#provincesTable').show(); // Muestra la tabla de provincias
                    loadProvinces(countryId, countryName);
                });
            },
            error: function (error) {
                console.error('Error al cargar los países', error);
            }
        });
    }

    // Función para cargar las provincias
    function loadProvinces(idPais, countryName) {
        $.ajax({
            url: `http://localhost/apipaises/route.php?option=list_provincias&idPais=5&limit=10&order=nombre&order_dir=desc`,
            method: 'GET',
            dataType: 'json',
            success: function (response) {
                const provinces = response.data;
                $('#provincesTable tbody').empty();
                $('#countryName').text(`Provincias de ${countryName}`); // Título con el nombre del país
                provinces.forEach(province => {
                    $('#provincesTable tbody').append(`
                        <tr>
                            <td>${province.nombre}</td>
                            <td><button class="view-map" data-name="${province.nombre}">Ver mapa</button></td>
                            <td><button class="view-region" data-id="${province.idProvincia}" data-name="${province.nombre}">Ver región</button></td>
                        </tr>
                    `);
                });
                // $('#provincesContainer').show(); // Mostrar la tabla de provincias

                // Asignar eventos a los botones de provincias
                $('.view-map').on('click', function () {
                    const provinceName = $(this).data('name');
                    alert(`Mostrando mapa de la provincia ${provinceName}`);
                });

                $('.view-region').on('click', function () {
                    const regionId = $(this).data('id');
                    const regionName = $(this).data('name');
                    $('#provincesTable').hide(); // Oculta la tabla de países
                    $('#localitiesTable').show(); // Muestra la tabla de provincias
                    // alert(`Cargando información de la región ${regionName} con ID ${regionId}`);
                });
            },
            error: function (error) {
                console.error('Error al cargar las provincias', error);
            }
        });
    }

    
    function loadLocalities(idProvincia, countryName, provinceName, searchTerm = '') {
        // Mostrar el filtro solo para la vista de localidades
        $('#localityFilterContainer').show();
        $('#localityFilter').show();
    
        // Configurar el evento input solo una vez para evitar duplicación
        $('#localityFilter').off('input').on('input', function () {
            const searchTerm = $(this).val();
            loadLocalities(idProvincia, countryName, provinceName, searchTerm); // Recargar con el término de búsqueda
        });
    
        $.ajax({
            url: `http://localhost/apipaises/route.php?option=list_localidades&idProvincia=${idProvincia}&limit=${limit}&order=nombre&order_dir=desc&search=${searchTerm}`,
            method: 'GET',
            dataType: 'json',
            success: function (response) {
                const localities = response.data;
                $('#localitiesTable tbody').empty();
                $('#countryName').text("País origen: ${countryName}");
                $('#provincieName').text("Localidades de la provincia ${provinceName}");
    
                localities.forEach(locality => {
                    $('#localitiesTable tbody').append(`
                        <tr>
                            <td>${locality.nombre}</td>
                            <td><button class="view-map" data-name="${locality.nombre}">Ver mapa</button></td>
                            <td><button class="view-region" data-id="${locality.idProvincia}" data-name="${locality.nombre}">Ver región</button></td>
                        </tr>
                    `);
                });
                $('#localitiesContainer').show();
    
                $('.view-map').on('click', function () {
                    const localityName = $(this).data('name');
                    alert("Mostrando mapa de la localidad ${localityName}");
                });
            },
            error: function (error) {
                console.error('Error al cargar las localidades', error);
            }
        });
    }

    

    // Cargar la primera página al inicio
    loadCountries(currentPage);
});
