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

    for key, value in histogram.items():

        # If empty must be largest

        pair = {"word": key, "count": value}

        index = 0

        for i in range(len(topThree)):
            if (value > topThree[i]['count']):
                index = i
                break
            index = i + 1

        topThree.insert(index, pair)

    print(topThree)
        




histogram = word_histogram('To be or not to be be be be be not not not')
sort_histogram(histogram)