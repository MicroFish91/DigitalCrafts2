# Phone Book App
phonebook = {}
x = 0

while x == 0:

    print("Electronic Phone Book")
    print("=====================")
    print("1. Look up an entry. ")
    print("2. Set an entry. ")
    print("3. Delete an entry. ")
    print("4. List all entries. ")
    print("5. Quit \n")

    userInput = int(input("What do you want to do (1-5)? "))

    if userInput == 1:
        findName = input("Name: ")

        if findName in phonebook:
            print("Found entry for {}: {}".format(findName, phonebook[findName]))
        else:
            print("Found no entries for {}.".format(findName))

    elif userInput == 2:
        entryName = input("Name: ")
        entryNumber = input("Phone Number: ")
        print("Entry stored for {}. \n".format(entryName))

        phonebook[entryName] = entryNumber

    elif userInput == 3:
        deleteName = input("Name: ")

        if deleteName in phonebook:
            del(phonebook[deleteName])
            print("Deleted entry for {}".format(deleteName))
        else:
            print("You do not have any friends listed with the name: {}." .format(deleteName))

    elif userInput == 4:
        for names in phonebook:
            print("Found entry for {}: {}".format(names, phonebook[names]))

    elif userInput == 5:
        x = 1
        print("Bye.")

    else:
        print("Error: Invalid entry, please try again.")


