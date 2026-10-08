import pandas as pd
import matplotlib.pyplot as plt

# Step 1: Load the dataset
df = pd.read_csv("dataset/hygiene_data.csv")

# Step 2: Display first 5 rows
print("First 5 rows of the dataset:")
print(df.head())

# Step 3: Display dataset information
print("\nDataset Information:")
print(df.info())

# Step 4: Check for missing values
print("\nMissing Values:")
print(df.isnull().sum())

# Step 5: Check for duplicate rows
print("\nDuplicate Rows:")
print(df.duplicated().sum())

# Step 6: Display basic statistical information
print("\nStatistical Information:")
print(df.describe())

# Step 7: Display the number of Low Risk and High Risk records
print("\nHygiene Risk Distribution:")
print(df["hygiene_risk"].value_counts())

# Step 8: Check unique values
print("\nUnique Values:")
print(df.nunique())

# Step 9: Create a graph for hygiene risk
df["hygiene_risk"].value_counts().plot(kind="bar")

plt.title("Hygiene Risk Distribution")
plt.xlabel("Hygiene Risk (0 = Low, 1 = High)")
plt.ylabel("Number of Facilities")

plt.show()