let clubs = ["PSG", "Manchester United", "Manchester City", "Bayern", "Real Madrid", "Liverpool"];
let buttons = document.querySelectorAll(".player");
let input = document.querySelector(".search-bar-container");
let selectedButton = null;

function showInput() {
    buttons.forEach((button, index) => {
        button.addEventListener("click", () => {
            selectedButton = button;
            input.style.display = "flex";
        })
    })
};

input.addEventListener("keydown", (event) => {
    if (event.keyCode === 13) {
        selectedButton.textContent = input.value;
        selectedButton = null;
        console.log("Enter presionado");
    }
    input.value = "";
    input.style.display = "none";
});

showInput();