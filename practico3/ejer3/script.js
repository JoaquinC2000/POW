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
                        <button onclick="editEntity(${entity.id})" class="btn btn-sm btn-warning">Edit</button>
                        <button onclick="deleteEntity(${entity.id})" class="btn btn-sm btn-danger">Delete</button>
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