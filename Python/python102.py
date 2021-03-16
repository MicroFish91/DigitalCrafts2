# Create a List of Numbers, Print their sum
# numList = [1, 2, 3, 4, 5, 6, 7]
# sum = 0

# for x in numList:
#     sum += x

# print(sum)


# Multiply a List

# newList = []

# for x in numList:
#     newList.append(x * 4)

# print(newList)



# Reverse a String

# inputString = input("Give me a string: ")
# reversedString = ''

# for x in range(len(inputString) - 1, -1, -1):
#     reversedString += inputString[x]

# print(reversedString)


# Multiply Vectors

# matrixOne = [2, 4, 5]
# matrixTwo = [2, 3, 6]
# matrixThree = []

# for index in range(0, 3):
#     matrixThree.append(matrixOne[index] * matrixTwo[index])

# print(matrixThree)


# Matrix Addition

# matrixOne = [[1, 3], [2, 4]]
# matrixTwo = [[5, 2], [1, 0]]
# matrixThree = []

# for indexOne in range(0, 2):
#     matrixFour = []

#     for indexTwo in range(0, 2):
#         matrixFour.append(matrixOne[indexOne][indexTwo] + matrixTwo[indexOne][indexTwo])

#     matrixThree.append(matrixFour)

# print(matrixThree)


# De - dup

# matrixOne = ["hello", 1, 2, 1, "hello", "hello", "hi", 6]
# newMatrix = []

# newMatrix.append(matrixOne[0])

# for indexOne in range(0, len(matrixOne), 1):

#     pushCheck = True

#     for indexTwo in range(0, len(newMatrix), 1):
#         if (matrixOne[indexOne] == newMatrix[indexTwo]):
#             pushCheck = False

#     if pushCheck:
#         newMatrix.append(matrixOne[indexOne])

# print(newMatrix)



