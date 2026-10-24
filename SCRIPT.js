// Lumen Digital
// Navegación a las páginas de producto.

document.querySelectorAll(".boton-producto").forEach((boton) => {
    boton.addEventListener("click", () => {
        const producto = boton.dataset.producto;

        if (producto === "habitos") {
            window.location.href = "HABITOS.html";
        }
    });
});

/* FILTROS DE PRODUCTOS */

const botonesFiltro = document.querySelectorAll("[data-filtro]");
const productos = document.querySelectorAll(".producto[data-categoria]");

botonesFiltro.forEach((boton) => {
boton.addEventListener("click", () => {
const categoriaSeleccionada = boton.dataset.filtro;


    productos.forEach((producto) => {
        const coincide =
            categoriaSeleccionada === "todos" ||
            producto.dataset.categoria === categoriaSeleccionada;

        producto.hidden = !coincide;
    });

    botonesFiltro.forEach((otroBoton) => {
        otroBoton.classList.remove("filtro-activo");
    });

    boton.classList.add("filtro-activo");
});


});


console.log("Lumen Digital está preparado.");