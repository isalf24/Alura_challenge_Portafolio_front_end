//La validación del formulário con javascript es considerada un desafío extra, no es obligatório realizar esta validación para realizar su entrega
// Selecciona todos los elementos de la formación
const formacionElementos = document.querySelectorAll('.formacion__elemento');

// Añade un evento 'mouseenter' para agrandar el elemento cuando el cursor esté sobre él
formacionElementos.forEach((elemento) => {
    elemento.addEventListener('mouseenter', () => {
        elemento.style.transform = 'scale(1.1)'; // Escala el elemento en un 10%
    });

    // Añade un evento 'mouseleave' para devolverlo a su tamaño normal cuando el cursor salga
    elemento.addEventListener('mouseleave', () => {
        elemento.style.transform = 'scale(1)'; // Devuelve el tamaño original
    });
});

// Selecciona todos los elementos de la sección de proyectos
const proyectosElementos = document.querySelectorAll('.proyectos__contenedor');

// Añade un evento 'mouseenter' para agrandar el elemento cuando el cursor esté sobre él
proyectosElementos.forEach((elemento) => {
    elemento.addEventListener('mouseenter', () => {
        elemento.style.transform = 'scale(1.05)'; // Escala el elemento en un 5%
        elemento.style.transition = 'transform 0.3s ease'; // Añade una transición suave
    });

    // Añade un evento 'mouseleave' para devolverlo a su tamaño normal cuando el cursor salga
    elemento.addEventListener('mouseleave', () => {
        elemento.style.transform = 'scale(1)'; // Devuelve el tamaño original
    });
});
