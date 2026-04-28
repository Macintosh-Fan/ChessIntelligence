let chessBoardTable = document.getElementById("chessBoard");
let chessBoardString =
    "♜♞♝♛♚♝♞♜♟♟♟♟♟♟♟♟                                ♙♙♙♙♙♙♙♙♖♘♗♕♔♗♘♖";

let chessBoardTableBody = document.createElement("tbody");
chessBoardTable.append(chessBoardTableBody);
let counter = 0;
for (let i = 0; i < 8; i++) {
    let chessBoardTableRow = document.createElement("tr");
    for (let j = 0; j < 8; j++) {
        let chessBoardTableData = document.createElement("td");
        chessBoardTableData.textContent =
            chessBoardString[counter] === " "
                ? "\u00A0"
                : chessBoardString[counter];
        chessBoardTableData.style.backgroundColor =
            (Math.floor(counter / 8) + (counter % 8)) % 2 === 0
                ? "#f0d9b5"
                : "#946f51";
        chessBoardTableRow.append(chessBoardTableData);

        counter++;
    }
    chessBoardTableBody.append(chessBoardTableRow);
}
