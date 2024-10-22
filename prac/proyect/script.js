document.addEventListener("DOMContentLoaded", () => {
    const apiUrl = 'https://jsonplaceholder.typicode.com/users';
    let entities = [];
    let currentPage = 1;
    const itemsPerPage = 5;

    const fetchEntities = async () => {
        const response = await fetch(apiUrl);
        entities = await response.json();
        displayEntities();
        setupPagination();
    };

    const displayEntities = () => {
        const tableBody = document.getElementById('entitiesTableBody');
        tableBody.innerHTML = '';
        const start = (currentPage - 1) * itemsPerPage;
        const end = start + itemsPerPage;
        const paginatedEntities = entities.slice(start, end);

        paginatedEntities.forEach(entity => {
            tableBody.innerHTML += `
                <tr>
                    <td>${entity.id}</td>
                    <td>${entity.name}</td>
                    <td>${entity.email}</td>
                    <td>
                        
                        <select id="sortField" class="form-select">
                    <option value="">Productos</option>
                    <option value="id">ID</option>
                    <option value="name">Name</option>
                </select>
                    </td>
                </tr>
            `;
        });
    };

    const setupPagination = () => {
        const pagination = document.getElementById('pagination');
        const pageCount = Math.ceil(entities.length / itemsPerPage);
        pagination.innerHTML = '';
        for (let i = 1; i <= pageCount; i++) {
            pagination.innerHTML += `<li class="page-item ${i === currentPage ? 'active' : ''}">
                <a class="page-link" href="#" onclick="changePage(${i})">${i}</a>
            </li>`;
        }
    };

    const changePage = (page) => {
        currentPage = page;
        displayEntities();
    };

    // CRUD actions can be added here

    fetchEntities();
})

const textarea = document.getElementById('autoExpand');

textarea.addEventListener('input', function () {
    this.style.height = 'auto';  // Resetear altura
    this.style.height = `${this.scrollHeight}px`;  // Ajustar a la altura del contenido
    
});