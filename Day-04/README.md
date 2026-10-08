# Day-04: Machine Learning - Facility Hygiene Risk Prediction

## Project Overview
The main objective of this project is to understand basic Machine Learning concepts and build a classification model that predicts the hygiene risk level of a facility.

The project uses facility-related information such as cleanliness score, odor score, waste level, complaints, footfall, and hours since cleaning to predict whether a facility has **Low Risk** or **High Risk**.

The project follows a complete Machine Learning workflow, starting from dataset loading and preprocessing to model training, prediction, evaluation, and model comparison.

## Objective

The objectives of this project are:

* To understand the basic concepts of Artificial Intelligence and Machine Learning.
* To understand supervised and unsupervised learning.
* To understand classification and regression.
* To identify features and labels in a dataset.
* To split the dataset into training and testing data.
* To perform basic data preprocessing and analysis.
* To train Machine Learning classification models.
* To compare two different Machine Learning algorithms.
* To evaluate the models using Accuracy, Precision, Recall, F1 Score, and Confusion Matrix.
* To generate predictions for facility hygiene risk.

---

## Machine Learning Concepts

### Artificial Intelligence

Artificial Intelligence is a technology that enables computers to perform tasks that normally require human intelligence.

### Machine Learning

Machine Learning is a branch of Artificial Intelligence where computers learn patterns from data and make predictions without being explicitly programmed for every situation.

### Deep Learning

Deep Learning is a subset of Machine Learning that uses neural networks with multiple layers to learn complex patterns from large amounts of data.

### Supervised Learning

Supervised Learning uses labeled data to train a model. In this project, the `hygiene_risk` column is the target label.

### Classification

Classification is used when the output belongs to a category. This project is a classification problem because the output is either:

* `0 = Low Risk`
* `1 = High Risk`

### Features

Features are the input values used by the Machine Learning model to make predictions.

The features used in this project are:

* `cleanliness_score`
* `odor_score`
* `waste_level`
* `complaints`
* `footfall`
* `hours_since_cleaning`

## Dataset

The dataset used in this project is:
dataset/hygiene_data.csv
The dataset contains **97 records**.

### Dataset Features

| Feature              | Description                                 |
| -------------------- | ------------------------------------------- |
| cleanliness_score    | Score representing the cleanliness level    |
| odor_score           | Score representing the odor level           |
| waste_level          | Amount/level of waste                       |
| complaints           | Number of complaints                        |
| footfall             | Number of people using the facility         |
| hours_since_cleaning | Hours passed since the facility was cleaned |
| hygiene_risk         | Target value: 0 = Low Risk, 1 = High Risk   |

---

## Project Workflow

The project follows these steps:

Dataset
   ↓
Data Cleaning and Analysis
   ↓
Feature Selection
   ↓
Train/Test Split
   ↓
Model Training
   ↓
Prediction
   ↓
Model Evaluation
   ↓
Model Comparison
   ↓
Final Predictions

## Data Preprocessing

The dataset was loaded using Pandas.

The preprocessing stage included:

* Loading the CSV dataset.
* Checking the first few records.
* Checking dataset information.
* Checking missing values.
* Checking duplicate records.
* Checking statistical information.
* Checking the distribution of hygiene risk.
* Selecting the required features.
* Separating features and target.
* Splitting the dataset into training and testing data.

The dataset was divided into:
Total Records: 97
Training Records: 77
Testing Records: 20
The dataset was split using an 80:20 ratio.

## Machine Learning Models Used

Two classification algorithms were implemented and compared.

### 1. Logistic Regression

Logistic Regression is a classification algorithm used to predict categorical outcomes.

In this project, Logistic Regression was used to predict whether the facility has Low Hygiene Risk or High Hygiene Risk.

The implementation is available in:
models/logistic_regression.py

### 2. Decision Tree

Decision Tree is a supervised Machine Learning algorithm that makes decisions using a tree-like structure.

It was also used to classify facilities into Low Risk and High Risk.

The implementation is available in:
models/decision_tree.py

## Model Evaluation

The models were evaluated using:

* Accuracy
* Precision
* Recall
* F1 Score
* Confusion Matrix

### Model Comparison

| Model               | Accuracy | Precision | Recall | F1 Score |
| ------------------- | -------: | --------: | -----: | -------: |
| Logistic Regression |     100% |      100% |   100% |     100% |
| Decision Tree       |     100% |      100% |   100% |     100% |

Both models produced the same performance on the test dataset.

### Logistic Regression
[[6, 0],
 [0, 14]]
This means:

* 6 Low Risk facilities were correctly predicted as Low Risk.
* 14 High Risk facilities were correctly predicted as High Risk.
* 0 Low Risk facilities were incorrectly predicted as High Risk.
* 0 High Risk facilities were incorrectly predicted as Low Risk.

### Decision Tree

[[6, 0],
 [0, 14]]

The Decision Tree also correctly classified all 20 test records.

## Selected Model

The selected model for generating the final predictions is:

**Logistic Regression**

Both models achieved the same performance, but the evaluation program selected Logistic Regression.

The final prediction script uses Logistic Regression to generate the prediction file.

## Predictions

The final predictions are generated using:

predictions/generate_predictions.py

The generated prediction file is:

predictions/predictions.csv

The prediction file contains:

* Input feature values
* Actual hygiene risk
* Predicted hygiene risk
* Actual risk label
* Predicted risk label

The model generated predictions for **20 test records**.

## Problems Encountered

During the project, some issues were encountered and resolved.

### 1. Dataset File Path

Initially, there was an incorrect dataset path while loading the CSV file. The path was corrected to:

pd.read_csv("dataset/hygiene_data.csv")

## Project Folder Structure

```text
Day-04/
│
├── dataset/
│   └── hygiene_data.csv
│
├── preprocessing/
│   ├── data_preprocessing.py
│   └── prepare_data.py
│
├── models/
│   ├── logistic_regression.py
│   └── decision_tree.py
│
├── evaluation/
│   └── model_evaluation.py
│
├── predictions/
│   ├── generate_predictions.py
│   └── predictions.csv
│
└── README.md

## Technologies Used

* Python
* Pandas
* Matplotlib
* Scikit-learn
* CSV Dataset
* Git and GitHub

### 4. Install Required Libraries

Install the required Python libraries using:
pip install pandas matplotlib scikit-learn

## Conclusion

This project helped in understanding the basic Machine Learning workflow from dataset preparation to model evaluation and prediction.

Two classification models, Logistic Regression and Decision Tree, were trained and compared. Both models achieved **100% Accuracy, Precision, Recall, and F1 Score** on the test dataset.

Based on the evaluation script, **Logistic Regression was selected as the final model** for generating facility hygiene risk predictions.

The project provides a basic foundation for developing more advanced Machine Learning applications in the future.
