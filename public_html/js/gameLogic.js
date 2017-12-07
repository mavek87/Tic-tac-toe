var MATRIX_DIMENSION = 3;

var gameMatrix = get2DArray(MATRIX_DIMENSION);
var gameCells = document.querySelectorAll("#gameGrid tr td");

init();

function init() {
    handleClicksOnCell();
    initGameMatrix();
}

function handleClicksOnCell() {
    for (var i = 0; i < gameCells.length; i++) {
        gameCells[i].addEventListener("click", function () {
            if (this.textContent === "") {
                this.textContent = "X";
            }
        });
    }
}

function initGameMatrix() {
    var i = 0;
    for (var x = 0; x < MATRIX_DIMENSION; x++) {
        for (var y = 0; y < MATRIX_DIMENSION; y++) {
            gameMatrix[x][y] = gameCells[i];
            i++;
        }
    }
}

function getNearbyCells(x, y) {
    var nearbyCells = [];
    if (areCoordinatesValid(x - 1, y - 1)) {
        nearbyCells.push(gameMatrix[x - 1][y - 1]);
    }

    if (areCoordinatesValid(x - 1, y)) {
        nearbyCells.push(gameMatrix[x - 1][y]);
    }

    if (areCoordinatesValid(x - 1, y + 1)) {
        nearbyCells.push(gameMatrix[x - 1][y + 1]);
    }

    if (areCoordinatesValid(x, y - 1)) {
        nearbyCells.push(gameMatrix[x][y - 1]);
    }

    if (areCoordinatesValid(x, y + 1)) {
        nearbyCells.push(gameMatrix[x][y + 1]);
    }

    if (areCoordinatesValid(x + 1, y - 1)) {
        nearbyCells.push(gameMatrix[x + 1][y - 1]);
    }

    if (areCoordinatesValid(x + 1, y)) {
        nearbyCells.push(gameMatrix[x + 1][y]);
    }

    if (areCoordinatesValid(x + 1, y + 1)) {
        nearbyCells.push(gameMatrix[x + 1][y + 1]);
    }
    
    return nearbyCells;
}

function isCoordinateValid(coordinate) {
    return ((coordinate >= 0) && (coordinate < MATRIX_DIMENSION));
}

function areCoordinatesValid(x, y) {
    return ((x >= 0) && (y >= 0) && (x < MATRIX_DIMENSION) && (y < MATRIX_DIMENSION));
}

function get2DArray(size) {
    size = size > 0 ? size : 0;
    var arr = [];

    while (size--) {
        arr.push([]);
    }

    return arr;
}