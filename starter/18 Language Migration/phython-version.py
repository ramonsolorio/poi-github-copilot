import numpy as np

def is_valid(board, row, col, num):
    for x in range(9):
        if board[row][x] == num:
            return False
             
    for x in range(9):
        if board[x][col] == num:
            return False 

    start_row = row - row % 3
    start_col = col - col % 3
    for i in range(3):
        for j in range(3):
            if board[i + start_row][j + start_col] == num:
                return False
    return True

def solve_sudoku(board):
    for i in range(9):
        for j in range(9):
            if board[i][j] == 0:
                for num in range(1, 10):
                    if is_valid(board, i, j, num):
                        board[i][j] = num
                        if solve_sudoku(board):
                            return True
                        board[i][j] = 0
                return False
    return True

board = np.zeros((9,9))
print("Sudoku Grid to be solved")
print(board)

if (solve_sudoku(board)):
    print("Sudoku Grid solved")
    print(board)
else:
    print("No solution exists")