# Word Summary
# Write a word_histogram function that takes a paragraph of text as its input, and returns a dictionary containing the tally of how many times each word in the alphabet was used in the text. For example:
# >>> word_histogram('To be or not to
def word_histogram(paragraph):
    words = {}
    paragraphArray = paragraph.lower().split(" ")

    for word in paragraphArray:
        if words.get(word) == None:
            words[word] = 1
        else:
            words[word] += 1

    return words

def findLargest(keysArray, valuesArray, storageArray):

    histogramIndex = 0
    largestValue = valuesArray[0]
    largestWord = keysArray[0]

    for index, count in enumerate(valuesArray):

        if count > largestValue:
            largestValue = count
            largestWord = keysArray[index]
            histogramIndex = index

    storageArray.append({largestWord: largestValue})

    del keysArray[histogramIndex]
    del valuesArray[histogramIndex]

# Top 3 most appearing words and print them out
def sort_histogram(histogram):

    topThree = []

    histogramKeys = list(histogram.keys())
    histogramValues = list(histogram.values())

    # Looping 3 times to find top 3
    for x in range(3):
        findLargest(histogramKeys, histogramValues, topThree)

    print(topThree)



histogram = word_histogram('To be or not to be be be be be not not not')
sort_histogram(histogram)