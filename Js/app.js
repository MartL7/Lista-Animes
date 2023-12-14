// Pronto Habrá más Novedades. Gracias por esperar.
function Agregar() {
    Swal.fire({
        title: "Advertencia",
        text: "Pronto Estará Disponible",
        icon: "warning",
        confirmButtonText: "Volver",
        footer:
        '<span class="Texto-Rojo"> Estoy trabajando en ello :( </span>',
        background: "#000",
        allowOutsideClick: false,
        buttonsStyling: false,
        customClass: {
            popup: "Contenedor-Alerta",
            confirmButton: "Boton"
        },
    })
}

function TemaOscuro() {
    document.querySelector("html").setAttribute("data-bs-theme", "dark");
    document.querySelector("#icon").setAttribute("class", "bi bi-sun-fill");
}

function TemaClaro() {
    document.querySelector("html").setAttribute("data-bs-theme", "light");
    document.querySelector("#icon").setAttribute("class", "bi bi-moon-fill");
}

function CambiarTema() {
    document.querySelector("html").getAttribute("data-bs-theme") === "light" ?
        TemaOscuro() : TemaClaro();
}