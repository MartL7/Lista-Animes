// Pronto Habrá más Novedades. Gracias por esperar.
function Agregar() {
    Swal.fire({
        title: "Advertencia",
        html: '<span class="text-secondary"> Pronto Estará Disponible </span>',
        icon: "warning",
        confirmButtonText: "Volver",
        footer:
        '<span class="text-secondary"> Estoy trabajando en ello :( </span>',
        allowOutsideClick: false,
        buttonsStyling: false,
        customClass: {
            popup: "bg-dark",
            confirmButton: "Boton"
        },
    })
}

function CambiarTema() {
    const Pagina = document.querySelector("html");
    const Icono = document.querySelector("#icon");
    
    Pagina.setAttribute("data-bs-theme", Pagina.getAttribute("data-bs-theme") === "light" ? "dark" : "light");
    Icono.setAttribute("class", Pagina.getAttribute("data-bs-theme") === "light" ? "bi bi-moon-stars-fill" : "bi bi-sun-fill");
}
