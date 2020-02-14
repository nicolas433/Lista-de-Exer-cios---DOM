const N = prompt("tamanho da matriz");
const father = document.getElementById("father");
const style = "display: inline-block; border: 1px solid black; height: 100px; width: 100px"

for (let i = 0; i < N; i++) {
    for (let j = 0; j < N; j++) {
        if (i + j == N - 1) {
            father.innerHTML += `<div style='${style}; background: blue'></div>`;
        } else {
            father.innerHTML += `<div style='${style}'></div>`;
        }
    }
    father.innerHTML += "<br>";
}