//Create a sudoku game in the language of your preference.
//Migrate that game to a different language 

function is_valid(board, row, col, num) {
    for (let x = 0; x < 9; x++) {
        if (board[row][x] == num) {
            return false;
        }
    }

    for (let x = 0; x < 9; x++) {
        if (board[x][col] == num) {
            return false;
        }
    }

    let startRow = row - row % 3;
    let startCol = col - col % 3;
    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
            if (board[i + startRow][j + startCol] == num) {
                return false;
            }
        }
    }
    return true;
}

function solve_sudoku(board) {
    for (let i = 0; i < 9; i++) {
        for (let j = 0; j < 9; j++) {
            if (board[i][j] == 0) {
                for (let num = 1; num <= 9; num++) {
                    if (is_valid(board, i, j, num)) {
                        board[i][j] = num;
                        if (solve_sudoku(board)) {
                            return true;
                        }
                        board[i][j] = 0;
                    }
                }
                return false;
            }
        }
    }
    return true;
}

let board = [
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0]
];

console.log("Sudoku Grid to be solved");
console.log(board);

if (solve_sudoku(board)) {
    console.log("Sudoku Grid solved");
    console.log(board);
} else {
    console.log("No solution exists");
}