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
    let tileElement = chessBoard.children[i];
    let tileTextElement = document.createElement("span");
    tileTextElement.id = "pc" + i;
    tileElement.appendChild(tileTextElement);
    tileTextElement.textContent =
        chessBoardString[i] === " " ? "\u00A0" : chessBoardString[i];
    tileTextElement.draggable = true;
    tileTextElement.ondragstart = dragStartHandler;
    tileElement.style.backgroundColor =
        (Math.floor(i / 8) + (i % 8)) % 2 === 0
            ? whiteSquareColor
            : blackSquareColor;
}
