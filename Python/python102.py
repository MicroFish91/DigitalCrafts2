# Create a List of Numbers, Print their sum
numList = [1, 2, 3, 4, 5, 6, 7]
sum = 0

for x in numList:
    sum += x

print(sum)


# Multiply a List

newList = []

for x in numList:
    newList.append(x * 4)

print(newList)



# Reverse a String

inputString = input("Give me a string: ")
reversedString = ''

for x in range(len(inputString) - 1, -1, -1):
    reversedString += inputString[x]

print(reversedString)


# Multiply Vectors

matrixOne = [2, 4, 5]
matrixTwo = [2, 3, 6]
matrixThree = []

for index in range(0, 3):
    matrixThree.append(matrixOne[index] * matrixTwo[index])

print(matrixThree)


# Matrix Addition

matrixOne = [[1, 3], [2, 4]]
matrixTwo = [[5, 2], [1, 0]]
matrixThree = []

for indexOne in range(0, 2):
    matrixFour = []

    for indexTwo in range(0, 2):
        matrixFour.append(matrixOne[indexOne][indexTwo] + matrixTwo[indexOne][indexTwo])

    matrixThree.append(matrixFour)

print(matrixThree)


# De - dup

matrixOne = ["hello", 1, 2, 1, "hello", "hello", "hi", 6]
newMatrix = []

newMatrix.append(matrixOne[0])

for indexOne in range(0, len(matrixOne), 1):

    pushCheck = True

    for indexTwo in range(0, len(newMatrix), 1):
        if (matrixOne[indexOne] == newMatrix[indexTwo]):
            pushCheck = False

    if pushCheck:
        newMatrix.append(matrixOne[indexOne])

print(newMatrix)



# Leetspeak
userInputTwo = input("Please enter text to be converted into Leetspeak: ")
leetSpeak = ""

for character in userInputTwo:

    if character == "A":
        character = "4"
    elif character == "E":
        character = "3"
    elif character == "G":
        character = "6"
    elif (character == "I") or (character == "L"):
        character = "1"
    elif character == "O":
        character = "0"
    elif character == "S":
        character = "5"
    elif character == "T":
        character = "7"

    leetSpeak += character

print(leetSpeak)

# Long-long vowels: easy
userInput = input("What phrase would you like to have long vowels? ")

shortE = "ee"
longE = "e" * 5
shortO = "oo"
longO = "o" * 5

indexE = userInput.find(shortE)
indexO = userInput.find(shortO)

if indexE > -1:
    userInput = userInput.replace(shortE, longE)

if indexO > -1:
    userInput = userInput.replace(shortO, longO)

print(userInput)

#Long-long vowels: hard
userInput = input("What phrase would you like to have long vowels? ")

vowels = ["E", "e", "O", "o"]
vowelNumber = 0
lastVowel = ""
output = ""
    
for index, character in enumerate(userInput):

    vowelCheck = False

    for vowel in vowels:

        # Check if character is a vowel
        if character == vowel:
            vowelCheck = True

    # Next Sort the Logic....
    # If we're not seeing a repeat vowel
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

        # If last char is a vowel
        if (vowelCheck and index == (len(userInput) - 1)):
            output += character

    # Else, it must be a repeat of the last vowel
    else: 
        vowelNumber += 1
        lastVowel = character

        # If last char is a vowel
        if(vowelCheck and index == (len(userInput) - 1)):
            if(vowelNumber < 5):
                output += character * 5
            else:
                output += character * vowelNumber
    
print(output)


# Multiplying Matrices 2x2
matrixOne = [[2, -2], [5, 3]]
matrixTwo = [[-1, 4], [7, -6]]

matrixSubOne = [matrixOne[0][0] * matrixTwo[0][0] + matrixOne[0][1] * matrixTwo[1][0], matrixOne[0][0] * matrixTwo[0][1] + matrixOne[0][1] * matrixTwo[1][1]]

matrixSubTwo = [matrixOne[1][0] * matrixTwo[0][0] + matrixOne[1][1] * matrixTwo[1][0], matrixOne[1][0] * matrixTwo[0][1] + matrixOne[1][1] * matrixTwo[1][1]]

outputMatrix = [matrixSubOne, matrixSubTwo]

print(outputMatrix)



# ROT13
alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
cipherOffset = 13
finalString = ""

userString = input('Please type your string for ROT13 conversion: ').lower()

for character in userString:
    for index, alphachar in enumerate(alphabet):
        if character == alphachar:
            rot13 = index + cipherOffset
            if rot13 >= 26:
                rot13 -= 26
            finalString += alphabet[rot13]
            break
        elif character == ' ':
            finalString += ' '
            break

print(finalString)