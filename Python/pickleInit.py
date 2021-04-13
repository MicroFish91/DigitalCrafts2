# This file's purpose is to create the initial .pickle data file
import pickle

phonebook = {}

# wb => Write Binary
with open('phonebook.pickle', 'wb') as fh:
    pickle.dump(phonebook, fh)