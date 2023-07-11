let currMoleTitle;
let currPlantTitle;
let score = 0;
let gameOver = false;

window.onload = function () {
    Setgame();
}

function Setgame() {
    for (let i = 0; i < 9; i++) {
        let title = document.createElement("div");
        title.id = i.toString();
        title.addEventListener("click", selectTitle);
        document.getElementById("board").appendChild(title);
    }
    setInterval(setMole, 2000);
    setInterval(setPlant, 3000);
}
function getRandomTitle() {
    let num = Math.floor(Math.random() * 9);
    return num.toString();

}

function setMole() {
    if (gameOver) {
        return;
    }
    if (currMoleTitle) {
        currMoleTitle.innerHTML = "";
    }
    let mole = document.createElement("img");
    mole.src = "/images/monty_mole-removebg-preview.png";

    let num = getRandomTitle();
    if (currPlantTitle && currPlantTitle.id == num) {
        return;
    }
    currMoleTitle = document.getElementById(num);
    currMoleTitle.appendChild(mole);
}

function setPlant() {
    if (gameOver) {
        return;
    }
    if (currPlantTitle) {
        currPlantTitle.innerHTML = "";
    }

    let plant = document.createElement("img");
    plant.src = "/images/plant-removebg-preview.png";

    let num = getRandomTitle();
    if (currMoleTitle && currMoleTitle.id == num) {
        return;
    }
    currPlantTitle = document.getElementById(num);
    currPlantTitle.appendChild(plant);
}
// function selectTitle(){
//     console.log("Hello");
//     if (gameOver) {
//         return;
//     }
//     if(this == currMoleTitle){
//         score += 10;
//         document.getElementById("score").innerText = score.toString();

//     }
//     else if(this == currPlantTitle){
//         document.getElementById("score").innerText = "GAME OVER " + score.toString();
//        gameOver=true;
//     }
// }
function selectTitle() {
    if (gameOver) {
        return;
    }
    if (this == currMoleTitle) {
        score += 10;
        document.getElementById("score").innerText = score.toString();
        document.getElementById("touchSound").play();
    } else if (this == currPlantTitle) {
        document.getElementById("score").innerText = "GAME OVER " + score.toString();
        gameOver = true;
        document.getElementById("gameOverSound").play();
    }
}
