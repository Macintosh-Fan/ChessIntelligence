let whiteSquareColor = "#f0d9b5";
let blackSquareColor = "#946f51";
let chessBoardString =
    "♜♞♝♛♚♝♞♜" +
    "♟♟♟♟♟♟♟♟" +
    "        " +
    "        " +
    "        " +
    "        " +
    "♙♙♙♙♙♙♙♙" +
    "♖♘♗♕♔♗♘♖";

const DRAG_PIECE_LABEL = "dragPiece";

function dragStartHandler(event) {
    event.dataTransfer.setData(DRAG_PIECE_LABEL, event.target.id);

    event.dataTransfer.effectAllowed = "move";
}

function dragoverHandler(event) {
    event.preventDefault();
}

function dropHandler(event) {
    event.preventDefault();
    let data = event.dataTransfer.getData(DRAG_PIECE_LABEL);
    let elementToMove = document.getElementById(data);
    let squareElement = event.currentTarget;

    // Prevent chess piece deletion from its original spot if placed there
    if (elementToMove.parentNode === squareElement) {
        return;
    }
    let elementToDelete = squareElement.querySelector("span");
    if (elementToDelete) {
        squareElement.removeChild(elementToDelete);
    }
    squareElement.appendChild(elementToMove);
}

let chessBoard = document.getElementById("chessBoard");
for (let i = 0; i < 64; i++) {
    let squareElement = chessBoard.children[i];

    let backgroundDiv = document.createElement("div");
    backgroundDiv.className = "chessBoardSquareBackground";
    backgroundDiv.style.backgroundColor =
        (Math.floor(i / 8) + (i % 8)) % 2 === 0
            ? whiteSquareColor
            : blackSquareColor;
    squareElement.appendChild(backgroundDiv);

    let squareTextElement = document.createElement("span");
    squareTextElement.id = "pc" + i;
    squareTextElement.style.zIndex = 2;
    if (chessBoardString[i] === " ") {
        squareTextElement.textContent = "\u00A0";
    } else {
        squareTextElement.textContent = chessBoardString[i];
        squareTextElement.draggable = true;
        squareTextElement.ondragstart = dragStartHandler;
    }
    squareElement.appendChild(squareTextElement);
}
