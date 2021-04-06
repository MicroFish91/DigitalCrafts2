# Strings
firstName = input("First name? ")
lastName = input("Last name? ")

# result = "Hello: {first} {last}".format(first=firstName, last=lastName)
# result = f'Hello {first_name} {last_name}'
result = "Hello: {1} {0}".format(firstName, lastName)

print(result)

# int(), str(), float()

# print(type(result))

print(isinstance(5, int))

print(isinstance('5', str))

print(isinstance(5, str))

print(isinstance({}, object))

print(isinstance(2, float))

print(isinstance(2.0, float))

print("hi", "there", "dude")