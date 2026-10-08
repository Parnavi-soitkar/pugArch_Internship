import pandas as pd
from sklearn.model_selection import train_test_split
from sklearn.linear_model import LogisticRegression
from sklearn.metrics import accuracy_score, precision_score, recall_score, f1_score

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

# Step 4: Split the data
X_train, X_test, y_train, y_test = train_test_split(
    X,
    y,
    test_size=0.2,
    random_state=42,
    stratify=y
)

# Step 5: Create the Logistic Regression model
model = LogisticRegression(max_iter=1000)

# Step 6: Train the model
model.fit(X_train, y_train)

# Step 7: Make predictions
y_pred = model.predict(X_test)

# Step 8: Evaluate the model
accuracy = accuracy_score(y_test, y_pred)
precision = precision_score(y_test, y_pred)
recall = recall_score(y_test, y_pred)
f1 = f1_score(y_test, y_pred)

# Step 9: Display results
print("Logistic Regression Results")
print("----------------------------")

print("Accuracy:", accuracy)
print("Precision:", precision)
print("Recall:", recall)
print("F1 Score:", f1)

# Step 10: Display actual and predicted values
print("\nActual vs Predicted:")

results = pd.DataFrame({
    "Actual": y_test.values,
    "Predicted": y_pred
})

print(results)