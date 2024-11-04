const lists_pokemons = document.getElementById('lists_pokemons');
const buttons = document.getElementById('buttons');
const limit = 20;
let urlPokemon = 'https://pokeapi.co/api/v2/pokemon?offset=0&limit=${limit}';
let totalPokemon = 0;
let currentPage = 1;



const GetPokemons = async (url) => {
    try {
        const response = await fetch(url);
        const results = await response.json();
        // console.log(results);
        totalPokemon = results.count;
        
        DataPokemons(results.results);

        createPaginationButtons(currentPage, Math.ceil(totalPokemon / limit));

    } catch (error) {
        console.log(error);
    }
};

GetPokemons(urlPokemon);

const DataPokemons = async (data) => {
    lists_pokemons.innerHTML = '';
    try {
        for(let index of data){
            const resp = await fetch(index.url);
            const resul = await resp.json();
            // console.log(resul);
            lists_pokemons.innerHTML += `
                <div class="pokemon_img">
                    <img src=${resul.sprites.other.dream_world.front_default} alt=${resul.name}/>
                    <p>${resul.name}</p>
                </div>
            `
        }
    } catch (err) {
        console.log(error);
    }
}

function createPaginationButtons(currentPage, totalPages) {
    const range = 5;

    let paginationHtml = `<nav aria-label="Page navigation example"><ul class="pagination"> `;

    // Botón Previous
    paginationHtml += `<li class="page-item ${currentPage === 1 ? 'disabled' : ''}">
                           <a class="page-link" href="#" onclick="changePage(${currentPage - 1})">Previous</a>
                       </li>`;

    // Primer bloque (Página 1 y '...')
    if (currentPage > range + 1) {
        paginationHtml += `<li class="page-item"><a class="page-link" href="#" onclick="changePage(1)">1</a></li>`;

        paginationHtml += `<li class="page-item disabled"><span class="page-link">...</span></li>`;
    }

    // Segundo bloque (rango de páginas alrededor de la página actual)
    const startPage = currentPage >= 7 ? currentPage - range : Math.max(1, currentPage - range-1);
    const endPage = Math.min(totalPages, currentPage + range);

    for (let i = startPage; i <= endPage; i++) {
        paginationHtml += `<li class="page-item ${currentPage === i ? 'active' : ''}">
                               <a class="page-link" href="#" onclick="changePage(${i})">${i}</a>
                           </li>`;
    }

    // Tercer bloque ('...' y última página)
    if (currentPage + range < totalPages) {
        paginationHtml += `<li class="page-item disabled"><span class="page-link">...</span></li>`;
        paginationHtml += `<li class="page-item"><a class="page-link" href="#" onclick="changePage(${totalPages})">${totalPages}</a></li>`;
    }


    // Botón Next
    paginationHtml += `<li class="page-item ${currentPage === totalPages ? 'disabled' : ''}">
                           <a class="page-link" href="#" onclick="changePage(${currentPage + 1})">Next</a>
                       </li>`;


    paginationHtml += `</ul></nav>`;
    buttons.innerHTML = paginationHtml;

}

function changePage(page){
    const totalPages = Math.ceil(totalPokemon / limit);
    if(page < 1 || page > totalPages) return;
    currentPage = page;
    const offset = (page - 1) * limit;
    const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`;
    GetPokemons(url);
}

// buttons.innerHTML = `
//         <nav aria-label="Page navigation example">
//             <ul class="pagination">
//                 <li class="page-item ${!results.previous ? 'disabled' : ''}">
//                     <a class="page-link" href="#" onclick="GetPokemons('${results.previous}')">Previous</a>
//                 </li>
//                 <li class="page-item"><a class="page-link" href="#">1</a></li>
//                 <li class="page-item"><a class="page-link" href="#">2</a></li>
//                 <li class="page-item"><a class="page-link" href="#">3</a></li>
//                 <li class="page-item ${!results.next ? 'disabled' : ''}">
//                     <a class="page-link" href="#" onclick="GetPokemons('${results.next}')">Next</a>
//                 </li>
//             </ul>
//         </nav>
//     `;
