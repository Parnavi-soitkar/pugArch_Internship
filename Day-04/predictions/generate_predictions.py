import pandas as pd

from sklearn.model_selection import train_test_split
from sklearn.tree import DecisionTreeClassifier

# Step 1: Load dataset
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

# Step 5: Create the selected model
model = DecisionTreeClassifier(
    random_state=42,
    max_depth=4
)

# Step 6: Train the model
model.fit(X_train, y_train)

# Step 7: Make predictions
predictions = model.predict(X_test)

# Step 8: Create prediction results
results = X_test.copy()

results["Actual_Hygiene_Risk"] = y_test.values
results["Predicted_Hygiene_Risk"] = predictions

# Step 9: Convert numbers into readable labels
results["Actual_Risk_Label"] = results["Actual_Hygiene_Risk"].map({
    0: "Low Risk",
    1: "High Risk"
})

results["Predicted_Risk_Label"] = results["Predicted_Hygiene_Risk"].map({
    0: "Low Risk",
    1: "High Risk"
})

# Step 10: Save predictions
results.to_csv(
    "predictions/predictions.csv",
    index=False
)

print("Predictions saved successfully!")
print("\nPrediction Results:")
print(results)