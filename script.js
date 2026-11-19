const container = document.getElementById("container");
const button = document.getElementById("resize-btn");

button.addEventListener("click", () => {
    let size = prompt("Número de cuadrados por lado (máximo 100)");
    size = Number(size);
    if (size > 0 && size <= 100) {
        createGrid(size);
    }
});

createGrid(16);


function createGrid(size) {
    container.innerHTML = "";

    for (let i = 0; i < size * size; i++) {
        const square = document.createElement("div");
        square.classList.add("square");
        square.style.width = `${100 / size}%`;
        square.dataset.darkness = "0";
        square.addEventListener("mouseover", paintSquare);
        container.appendChild(square);
    }
}


function paintSquare(event) {
    const square = event.target;

    if (!square.dataset.colored) {
        const r = Math.floor(Math.random() * 256);
        const g = Math.floor(Math.random() * 256);
        const b = Math.floor(Math.random() * 256);
        square.dataset.r = r;
        square.dataset.g = g;
        square.dataset.b = b;
        square.dataset.colored = "true";
    }

    let darkness = Number(square.dataset.darkness);

    if (darkness < 10) {
        darkness++;
        square.dataset.darkness = darkness;
        const opacity = darkness / 10;
        square.style.backgroundColor =
            `rgba(${square.dataset.r},
                  ${square.dataset.g},
                  ${square.dataset.b},
                  ${opacity})`;
    }
}




