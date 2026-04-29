let chessBoard = document.getElementById("chessBoard");
let chessBoardString =
    "♜♞♝♛♚♝♞♜♟♟♟♟♟♟♟♟                                ♙♙♙♙♙♙♙♙♖♘♗♕♔♗♘♖";

for (let i = 0; i < 64; i++) {
    chessBoard.children[i].textContent =
        chessBoardString[i] === " " ? "\u00A0" : chessBoardString[i];
    chessBoard.children[i].style.backgroundColor =
        (Math.floor(i / 8) + (i % 8)) % 2 === 0 ? "#f0d9b5" : "#946f51";
}
