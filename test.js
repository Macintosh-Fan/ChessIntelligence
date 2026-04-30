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
    squareElement.innerHTML = "";
    squareElement.appendChild(elementToMove);
}

let chessBoard = document.getElementById("chessBoard");
for (let i = 0; i < 64; i++) {
    let squareElement = chessBoard.children[i];
    let squareTextElement = document.createElement("span");
    squareTextElement.id = "pc" + i;
    if (chessBoardString[i] === " ") {
        squareTextElement.textContent = "\u00A0";
    } else {
        squareTextElement.textContent = chessBoardString[i];
        squareTextElement.draggable = true;
        squareTextElement.ondragstart = dragStartHandler;
    }
    squareElement.appendChild(squareTextElement);
    squareElement.style.backgroundColor =
        (Math.floor(i / 8) + (i % 8)) % 2 === 0
            ? whiteSquareColor
            : blackSquareColor;
}
