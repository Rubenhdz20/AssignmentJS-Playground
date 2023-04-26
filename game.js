// This code defines a 3x3 Tic Tac Toe board as an array of arrays, and uses console prompts to get user input for each turn. The printBoard() function prints the current state of the board to the console, and the checkWin(player) function checks if a player has won the game. The playTurn(player) function plays a single turn for a given player, and the playGame() function loops through turns until a win or tie occurs. The game is started by calling playGame().

// // Note that this is a very basic implementation and does not include error checking or input validation beyond checking for valid moves on the board. You can customize

// Define the board as an array of arrays representing each row
let board = [
    ['_', '_', '_'],
    ['_', '_', '_'],
    ['_', '_', '_']
];

// Define a function to print the board to the console
function printBoard() {
    for (let i = 0; i < board.length; i++) {
      console.log(board[i].join('|'));
    }
}
  
// Define a function to check if a player has won
function checkWin(player) {
    // Check rows
    for (let i = 0; i < board.length; i++) {
      if (board[i][0] === player && board[i][1] === player && board[i][2] === player) {
        return true;
      }
    }
    // Check columns
    for (let j = 0; j < board.length; j++) {
      if (board[0][j] === player && board[1][j] === player && board[2][j] === player) {
        return true;
      }
    }
    // Check diagonals
    if (board[0][0] === player && board[1][1] === player && board[2][2] === player) {
      return true;
    }
    if (board[0][2] === player && board[1][1] === player && board[2][0] === player) {
      return true;
    }
    // No win
    return false;
}
  
// Define a function to play a turn
function playTurn(player) {
    // Ask for input until a valid move is made
    while (true) {
      let row = prompt(`Player ${player}, enter row (1-3): `) - 1;
      let col = prompt(`Player ${player}, enter column (1-3): `) - 1;
      if (row >= 0 && row <= 2 && col >= 0 && col <= 2 && board[row][col] === '_') {
        board[row][col] = player;
        break;
      }
      console.log('Invalid move. Try again.');
    }
    // Print the updated board
    printBoard();
    // Check for win
    if (checkWin(player)) {
      console.log(`Player ${player} wins!`);
      return true;
    }
    // No win
    return false;
}
  
// Define the main game loop
function playGame() {
    // Print the initial board
    printBoard();
    // Play turns until a win or tie
    for (let i = 0; i < 9; i++) {
      let player = i % 2 === 0 ? 'X' : 'O';
      if (playTurn(player)) {
        return;
      }
    }
    // Tie game
    console.log('Tie game!');
}
  
// Start the game

playGame();


// 