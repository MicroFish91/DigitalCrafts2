# 1. Phonebook Dictionary

# phonebook_dict = {
#   'Alice': '703-493-1834',
#   'Bob': '857-384-1234',
#   'Elizabeth': '484-584-2923'
# }

# print(phonebook_dict['Elizabeth'])

# phonebook_dict['Kareem'] = '938-489-1234'
# del(phonebook_dict['Alice'])
# phonebook_dict['Bob'] = '968-345-2345'

# print(phonebook_dict)


# 2. Nested Dictionaries

# ramit = {
#   'name': 'Ramit',
#   'email': 'ramit@gmail.com',
#   'interests': ['movies', 'tennis'],
#   'friends': [
#     {
#       'name': 'Jasmine',
#       'email': 'jasmine@yahoo.com',
#       'interests': ['photography', 'tennis']
#     },
#     {
#       'name': 'Jan',
#       'email': 'jan@hotmail.com',
#       'interests': ['movies', 'tv']
#     }
#   ]
# }

# print(ramit['email'])
# print(ramit['interests'][0])
# print(ramit['friends'][0]['email'])
# print(ramit['friends'][1]['interests'][1])

# 3.  Friend Counter


# ramit = {
#   'name': 'Ramit',
#   'email': 'ramit@gmail.com',
#   'interests': ['movies', 'tennis'],
#   'friends': [
#     {
#       'name': 'Jasmine',
#       'email': 'jasmine@yahoo.com',
#       'interests': ['photography', 'tennis']
#     },
#     {
#       'name': 'Jan',
#       'email': 'jan@hotmail.com',
#       'interests': ['movies', 'tv']
#     }
#   ]
# }

# def countFriends(nestedDictionary):

#     nestedDictionary['friends_count'] = len(nestedDictionary['friends'])
    
#     return nestedDictionary

# print(countFriends(ramit))


# 4. Letter Summary

# def letterHistogram(word):

#     histogram = {}

#     for letter in word:
#         if letter in histogram:
#             histogram[letter] += 1
#         else:
#             histogram[letter] = 1

#     return histogram

# userInput = input("Please enter a word: ")

# print(letterHistogram(userInput))


# 5. Word Histogram

def wordHistogram(sentence):

    sentence = sentence.lower()
    newArray = sentence.split()
    histogram = {}

    for word in newArray:
        if word in histogram:
            histogram[word] += 1
        else:
            histogram[word] = 1

    return histogram

userInput = input("Please enter a sentence: ")

# print(wordHistogram(userInput))


# 6. Sorting a histogram

def histogramSort(sentence):

    histogram = wordHistogram(sentence)
    largestWord = ''
    largestCount = 0
    newHistogram = {}

    for counter in range(3):
        for word in histogram:
            if histogram[word] > largestCount:
                largestWord = word
                largestCount = histogram[word]
        
        newHistogram[largestWord] = largestCount
        
        del histogram[largestWord]
        largestWord = ''
        largestCount = 0


    return newHistogram;




print(histogramSort(userInput))