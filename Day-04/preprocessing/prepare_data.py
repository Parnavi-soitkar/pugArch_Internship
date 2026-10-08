import pandas as pd
from sklearn.model_selection import train_test_split

# Step 1: Load the dataset
df = pd.read_csv("dataset/hygiene_data.csv")

# Step 2: Select features
X = df[
    [
        "cleanliness_score",
        "odor_score",
        "waste_level",
        "complaints",
        "footfall",
        "hours_since_cleaning"
    ]
]

# Step 3: Select target
y = df["hygiene_risk"]

# Step 4: Split the data into training and testing data
X_train, X_test, y_train, y_test = train_test_split(
    X,
    y,
    test_size=0.2,
    random_state=42,
    stratify=y
)

# Step 5: Display the sizes
print("Total records:", len(df))

print("Training records:", len(X_train))
print("Testing records:", len(X_test))

print("\nFeatures used:")
print(X.columns.tolist())

print("\nTraining Features:")
print(X_train.head())

print("\nTraining Labels:")
print(y_train.head())

print("\nTesting Features:")
print(X_test.head())

print("\nTesting Labels:")
print(y_test.head())