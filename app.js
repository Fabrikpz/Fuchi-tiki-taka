let clubs = ["PSG", "Manchester United", "Manchester City", "Bayern", "Real Madrid", "Liverpool"];
let buttons = document.querySelectorAll(".player");
let input = document.querySelector(".search-bar-container");
let selectedButton = null;

function showInput() {
    buttons.forEach((button, index) => {
        button.addEventListener("click", () => {
            selectedButton = button;
            input.style.display = "flex";
            input.value = selectedButton.textContent; // Coloca el texto actual del botón en el input
        })
    })
};

input.addEventListener("keydown", (event) => {
    if (event.keyCode === 13 && selectedButton) {
        input.value = ""; // Limpiar el input después de asignar el texto al botón
        input.style.display = "none"; // Ocultar el input después de asignar el texto al botón
    }
});


document.addEventListener("click", (event) => {
    if (!input.contains(event.target) && !selectedButton.contains(event.target)) {
        input.value = ""; // Limpiamos el input al hacer clic fuera
        input.style.display = "none"; // Ocultamos el input al hacer clic fuera
    }
});

showInput();