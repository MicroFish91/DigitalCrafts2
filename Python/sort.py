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



# Top 3 most appearing words and print them out
def sort_histogram(histogram):

    topThree = []

    histogramKeys = list(histogram.keys())
    histogramValues = list(histogram.values())
    histogramIndex = 0

    largestValue = histogramValues[0]
    largestWord = histogramKeys[0]

    # First Pass
    for index, count in enumerate(histogramValues):

        if count > largestValue:
            largestValue = count
            largestWord = histogramKeys[index]
            histogramIndex = index

    topThree.append({largestWord: largestValue})

    del histogramKeys[histogramIndex]
    del histogramValues[histogramIndex]


    # Second pass
    largestValue = histogramValues[0]
    largestWord = histogramKeys[0]
    histogramIndex = 0

    for index, count in enumerate(histogramValues):

        if count > largestValue:
            largestValue = count
            largestWord = histogramKeys[index]
            histogramIndex = index

    topThree.append({largestWord: largestValue})

    del histogramKeys[histogramIndex]
    del histogramValues[histogramIndex]

    # Third pass
    largestValue = histogramValues[0]
    largestWord = histogramKeys[0]
    histogramIndex = 0

    for index, count in enumerate(histogramValues):

        if count > largestValue:
            largestValue = count
            largestWord = histogramKeys[index]
            histogramIndex = index

    topThree.append({largestWord: largestValue})

    del histogramKeys[histogramIndex]
    del histogramValues[histogramIndex]

    print(topThree)




histogram = word_histogram('To be or not to be be be be be not not not')
sort_histogram(histogram)