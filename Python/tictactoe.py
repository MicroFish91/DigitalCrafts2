SIZE = 3
board = [] # Start with an empty List
for y in range(SIZE):
    # Each element in the board will also be a List
    board.append([])        
    for x in range(SIZE):
        # Fill our inner Lists with the coordinates
        board[y].append("[%d][%d]" % (y, x))

# Print the board as a grid
for row in board:
    for column in row:
        print("%s  " % column, end="")
    print("\n")

for moves in range(9):

    row = input("What row would you like to make your move? [row] [col] ")
    col = input("What col would you like to make your move? [row] [col] ")

    print("Making move at [%s][%s]" % (row, col))

    if moves % 2 == 0:
        board[int(row)][int(col)] = "X"
    
    if moves % 2 == 1:
        board[int(row)][int(col)] = "O"

    # Print the board as a grid
    for row in board:
        for column in row:
            print("%s  " % column, end="")
        print("\n")
