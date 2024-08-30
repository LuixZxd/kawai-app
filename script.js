document.addEventListener('DOMContentLoaded', () => {
    const appItems = document.querySelectorAll('.app-item');
    const appDetails = document.getElementById('app-details');
    const detailsContent = document.getElementById('details-content');
    const closeDetailsBtn = document.getElementById('close-details');

    // Función para mostrar los detalles de la aplicación
    function showDetails(app) {
        detailsContent.innerHTML = `
            <h2>${app.name}</h2>
            <img src="${app.image}" alt="${app.name}" class="detail-img">
            <p>${app.description}</p>
            <a href="${app.link}" class="download-btn" target="_blank">Descargar</a>
        `;
        appDetails.classList.add('show');
    }

    // Función para cerrar la vista de detalles
    function closeDetails() {
        appDetails.classList.remove('show');
    }

    // Mostrar detalles al hacer clic en un elemento de la aplicación
    appItems.forEach(item => {
        item.addEventListener('click', () => {
            const appData = item.getAttribute('data-app');
            const app = apps.find(app => app.data === appData);
            if (app) {
                showDetails(app);
            }
        });
    });

    // Cerrar detalles al hacer clic en el botón de cerrar
    closeDetailsBtn.addEventListener('click', closeDetails);

    // Mostrar animaciones para los elementos de la lista de aplicaciones
    setTimeout(() => {
        appItems.forEach((item, index) => {
            setTimeout(() => {
                item.classList.add('visible');
            }, index * 100); // Animar cada elemento con un retraso
        });
    }, 500); // Retraso inicial para animar la entrada de la lista
});

