document.addEventListener('DOMContentLoaded', () => {
    fetch('http://localhost:3000/libros')
        .then(response => response.json())
        .then(data => {
            const libroLista = document.querySelector('.libro-lista');
            data.forEach(libro => {
                const libroItem = document.createElement('div');
                libroItem.classList.add('libro-item');
                libroItem.innerHTML = `
                    <h3>${libro.titulo}</h3>
                    <p><strong>Autor:</strong> ${libro.autor}</p>
                    <p><strong>Precio:</strong> $${libro.precio}</p>
                    <p><strong>Categoría:</strong> ${libro.categoria}</p>
                    <p><strong>Disponibilidad:</strong> ${libro.disponibilidad ? 'Disponible' : 'Agotado'}</p>
                `;
                libroLista.appendChild(libroItem);
            });
        })
        .catch(error => console.error('Error:', error));
});
