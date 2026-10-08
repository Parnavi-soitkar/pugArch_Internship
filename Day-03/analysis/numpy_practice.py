import numpy as np

# --------------------------------------------------
# 1. Creating a NumPy array
# --------------------------------------------------

numbers = np.array([10, 20, 30, 40, 50])

print("NumPy Array:")
print(numbers)

print("\n" + "=" * 50)


# --------------------------------------------------
# 2. Dimensions
# --------------------------------------------------

print("Number of Dimensions:")
print(numbers.ndim)

print("\n" + "=" * 50)


# --------------------------------------------------
# 3. Shape
# --------------------------------------------------

print("Shape of Array:")
print(numbers.shape)

print("\n" + "=" * 50)


# --------------------------------------------------
# 4. Indexing
# --------------------------------------------------

print("First Element:")
print(numbers[0])

print("Third Element:")
print(numbers[2])

print("\n" + "=" * 50)


# --------------------------------------------------
# 5. Slicing
# --------------------------------------------------

print("First Three Elements:")
print(numbers[0:3])

print("Last Three Elements:")
print(numbers[2:5])

print("\n" + "=" * 50)


# --------------------------------------------------
# 6. Mathematical Operations
# --------------------------------------------------

print("Addition:")
print(numbers + 10)

print("\nMultiplication:")
print(numbers * 2)

print("\nSquare:")
print(numbers ** 2)

print("\n" + "=" * 50)


# --------------------------------------------------
# 7. Aggregation Operations
# --------------------------------------------------

print("Sum:")
print(np.sum(numbers))

print("\nMean:")
print(np.mean(numbers))

print("\nMaximum:")
print(np.max(numbers))

print("\nMinimum:")
print(np.min(numbers))

print("\nStandard Deviation:")
print(np.std(numbers))

print("\n" + "=" * 50)


# --------------------------------------------------
# 8. Two-Dimensional Array
# --------------------------------------------------

matrix = np.array([
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
])

print("Two-Dimensional Array:")
print(matrix)

print("\nDimensions:")
print(matrix.ndim)

print("\nShape:")
print(matrix.shape)

print("\n" + "=" * 50)

print("NumPy Practice Completed Successfully")
