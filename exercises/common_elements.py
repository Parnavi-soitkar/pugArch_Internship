array1 = [1, 2, 3, 4, 5]
array2 = [3, 4, 5, 6, 7]

common = []

for num in array1:
    if num in array2:
        common.append(num)

print("Common elements:", common)