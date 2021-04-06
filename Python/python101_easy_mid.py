# 1. Hello You!

# name = input('What is your name? ')

# print('Hello ' + name)

# # 2. HELLO YOU!

# print(('Hello ' + name).upper())
# print(('Your name has ' + str(len(name)) + ' letters in it, awesome!').upper())

# 4. Day of the Week

# dayOfTheWeek = int(input("What day of the week is it? (0 - 6)? "))

# if dayOfTheWeek == 0:
#     print("It is Sunday.")
# elif dayOfTheWeek == 1:
#     print("It is Monday.")
# elif dayOfTheWeek == 2:
#     print("It is Tuesday.")
# elif dayOfTheWeek == 3:
#     print("It is Wednesday.")
# elif dayOfTheWeek == 4:
#     print("It is Thursday.")
# elif dayOfTheWeek == 5:
#     print("It is Friday.")
# elif dayOfTheWeek == 6:
#     print("It is Saturday.")
# else:
#     print("Invalid Entry.")    

# 5. Work or Sleep In

# if (dayOfTheWeek >= 2) & (dayOfTheWeek <= 5):
#     print("Go to work.")
# elif (dayOfTheWeek == 6) | (dayOfTheWeek == 1):
#     print("Sleep in.");

# 7. Looping from 1 to 10
# i = 1
# while i <= 10:
#     print(i)
#     i += 1

# for x in range(1, 11):
#     print(x)

# NxN Square
# oneRow = ''
# numOfStars = int(input("How many rows in your square? "))

# for x in range(0, numOfStars):
#     oneRow += '*'

# for x in range(0, numOfStars):
#     print(oneRow)


# Print a Box
# fullStar = ''
# twoStar = ''
# width = int(input("Width? "))
# height = int(input("Height? "))

# for x in range(0, width, 1):
#     fullStar += '*'

# for x in range(0, width - 2, 1):
#     twoStar += ' '

# twoStar = '*' + twoStar + '*'

# for x in range(0, height, 1):
#     if (x == 0) or (x == height - 1):
#         print(fullStar)
#     else:
#         print(twoStar)


