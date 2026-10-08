import pandas as pd

from sklearn.model_selection import train_test_split
from sklearn.linear_model import LogisticRegression
from sklearn.tree import DecisionTreeClassifier

from sklearn.metrics import (
    accuracy_score,
    precision_score,
    recall_score,
    f1_score,
    confusion_matrix
)

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

# Step 4: Split dataset
X_train, X_test, y_train, y_test = train_test_split(
    X,
    y,
    test_size=0.2,
    random_state=42,
    stratify=y
)

# -------------------------------------------------
# Model 1: Logistic Regression
# -------------------------------------------------

logistic_model = LogisticRegression(max_iter=1000)

logistic_model.fit(X_train, y_train)

logistic_predictions = logistic_model.predict(X_test)

# Calculate Logistic Regression metrics
logistic_accuracy = accuracy_score(
    y_test,
    logistic_predictions
)

logistic_precision = precision_score(
    y_test,
    logistic_predictions
)

logistic_recall = recall_score(
    y_test,
    logistic_predictions
)

logistic_f1 = f1_score(
    y_test,
    logistic_predictions
)

# -------------------------------------------------
# Model 2: Decision Tree
# -------------------------------------------------

tree_model = DecisionTreeClassifier(
    random_state=42,
    max_depth=4
)

tree_model.fit(X_train, y_train)

tree_predictions = tree_model.predict(X_test)

# Calculate Decision Tree metrics
tree_accuracy = accuracy_score(
    y_test,
    tree_predictions
)

tree_precision = precision_score(
    y_test,
    tree_predictions
)

tree_recall = recall_score(
    y_test,
    tree_predictions
)

tree_f1 = f1_score(
    y_test,
    tree_predictions
)

# -------------------------------------------------
# Display Model Comparison
# -------------------------------------------------

print("\nMODEL COMPARISON")
print("================")

print("\nLogistic Regression")
print("-------------------")
print("Accuracy :", logistic_accuracy)
print("Precision:", logistic_precision)
print("Recall   :", logistic_recall)
print("F1 Score :", logistic_f1)

print("\nDecision Tree")
print("-------------")
print("Accuracy :", tree_accuracy)
print("Precision:", tree_precision)
print("Recall   :", tree_recall)
print("F1 Score :", tree_f1)

# -------------------------------------------------
# Confusion Matrix
# -------------------------------------------------

print("\nLogistic Regression Confusion Matrix")
print("------------------------------------")
print(confusion_matrix(y_test, logistic_predictions))

print("\nDecision Tree Confusion Matrix")
print("------------------------------")
print(confusion_matrix(y_test, tree_predictions))

# -------------------------------------------------
# Select Best Model
# -------------------------------------------------

if tree_f1 > logistic_f1:
    print("\nSelected Model: Decision Tree")
else:
    print("\nSelected Model: Logistic Regression")