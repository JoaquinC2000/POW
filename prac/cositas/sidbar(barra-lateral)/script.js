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