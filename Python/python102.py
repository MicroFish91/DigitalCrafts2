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



# Leetspeak
# userInputTwo = input("Please enter text to be converted into Leetspeak: ")
# leetSpeak = ""

# for character in userInputTwo:

#     if character == "A":
#         character = "4"
#     elif character == "E":
#         character = "3"
#     elif character == "G":
#         character = "6"
#     elif (character == "I") or (character == "L"):
#         character = "1"
#     elif character == "O":
#         character = "0"
#     elif character == "S":
#         character = "5"
#     elif character == "T":
#         character = "7"

#     leetSpeak += character

# print(leetSpeak)



#Long-long vowels
userInput = input("What phrase would you like to have long vowels? ")

vowels = ("A", "a", "E", "e", "I", "i", "O", "o", "U", "u")
vowelNumber = 0
lastVowel = ""
output = ""
    
for character in userInput:

    vowelCheck = False

    for vowel in vowels:

        # Check if character is a vowel
        if character == vowel:
            vowelCheck = True

    # Next Sort the Logic....
    # If we're not seeing a repea`t vowel
    if character != lastVowel:

        # If last vowel wasn't repeating, we still need to log it
        if vowelNumber == 1:
            output += lastVowel
            lastVowel = ""
            vowelNumber = 0

        # If just ending repeat vowel, need to log into output
        if vowelNumber >= 2:
            output += lastVowel * 5
            lastVowel = ""
            vowelNumber = 0

        # Check to see if new character is a vowel
        if vowelCheck:
            vowelNumber += 1
            lastVowel = character
        # If not, it must be a consonant
        else:
            lastVowel = ""
            vowelNumber = 0
            output += character

    # Else, it must be a repeat of the last vowel
    else: 
        vowelNumber += 1
        lastVowel = character
               
    
print(output)


# Multiplying Matrices 2x2