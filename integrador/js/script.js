const boton_alternar = document.getElementById('toggle-btn');
const sidebar = document.getElementById('sidebar');

function toggleSidebar() {
    sidebar.classList.toggle('close');
    boton_alternar.classList.toggle('rotar')

    closeAllSubMenus()
}

function toggleSubMenu(button){
    //button: contiene la info del boton que se hizo clic.
    //verifica si el subMenu actual, está abierto
    if(!button.nextElementSibling.classList.contains('show')){
        closeAllSubMenus()
    }

    button.nextElementSibling.classList.toggle('show');
    button.classList.toggle('rotar');

    if(sidebar.classList.contains('close')){
        sidebar.classList.toggle('close');
        boton_alternar.classList.toggle('rotar');
    }
}

function closeAllSubMenus(){
    //Se obtiene una matriz con todos los menus desplegables
    Array.from(sidebar.getElementsByClassName('show')).forEach(ul => {

        ul.classList.remove('show');
        ul.previousElementSibling.classList.remove('rotar');
    })
}



const cloud = document.getElementById('cloud');
const barralateral = document.querySelector(".barra-lateral")
const spans = document.querySelectorAll("span");

cloud.addEventListener('click', () => {
    barralateral.classList.toggle("mini-barra-lateral");
    
    spans.forEach(span => {
        span.classList.toggle("oculto");
    })
});





const lists_paises = document.getElementById('countriesTable');
const buttons = document.getElementById('buttons');
const limit = 10;
let urlPaises = 'http://localhost/apipaises/route.php?option=list_paises&limit=${limit}&offset=0&order=nombre&order_dir=desc';
let totalPaises = 0;
let currentPage = 1;

const getPaises = async (url) => {
    try{
        const response = await fetch(url);
        const results = await response.json();
        totalPaises = results.total;

        createPaginationButtons(currentPage, Math.ceil(totalPaises / limit));
    } catch(error){
        console.log(error);
    }
};


