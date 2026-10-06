string = input("Enter a string: ")

for char in string:
    if string.count(char) == 1:
        print("First non-repeating character:", char)
        break