let board = [
    [" ", " ", " "],
    [" ", " ", " "],
    [" ", " ", " "]
];
  
let player = "X";
let computer = "O";
  
function printBoard() {
    console.log(board[0].join("|"));
    console.log("-+-+-");
    console.log(board[1].join("|"));
    console.log("-+-+-");
    console.log(board[2].join("|"));
}
  
function checkWin(player) {
    for (let i = 0; i < 3; i++) {
      if (board[i][0] == player && board[i][1] == player && board[i][2] == player) {
        return true;
      }
      if (board[0][i] == player && board[1][i] == player && board[2][i] == player) {
        return true;
      }
    }
    if (board[0][0] == player && board[1][1] == player && board[2][2] == player) {
      return true;
    }
    if (board[0][2] == player && board[1][1] == player && board[2][0] == player) {
      return true;
    }
    return false;
}
  
function computerMove() {
// Look for a winning move
    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
        if (board[i][j] == " ") {
          board[i][j] = computer;
          if (checkWin(computer)) {
            return;
          }
          board[i][j] = " ";
        }
      }
    }
  
    // Block a winning move
    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
        if (board[i][j] == " ") {
          board[i][j] = player;
          if (checkWin(player)) {
            board[i][j] = computer;
            return;
          }
          board[i][j] = " ";
        }
      }
    }
  
    // Choose a random move
    let i, j;
    do {
      i = Math.floor(Math.random() * 3);
      j = Math.floor(Math.random() * 3);
    } while (board[i][j] != " ");
    board[i][j] = computer;
}
  
function play() {
    while (true) {
      console.clear();
      printBoard();
  
      // Player's turn
      let i, j;
      do {
        i = parseInt(prompt("Enter row (1-3)")) - 1;
        j = parseInt(prompt("Enter column (1-3)")) - 1;
      } while (board[i][j] != " ");
      board[i][j] = player;
  
      if (checkWin(player)) {
        console.clear();
        printBoard();
        console.log("You win!");
        return;
      }
  
      if (board.every(row => row.every(cell => cell != " "))) {
        console.clear();
        printBoard();
        console.log("It's a tie!");
        return;
      }
  
      // Computer's turn
      computerMove();
  
      if (checkWin(computer)) {
        console.clear();
        printBoard();
        console.log("You lose!");
        return;
      }
    }
}
  
play();