import pandas as pd
import numpy as np

# --------------------------------------------------
# 1. Load the dataset
# --------------------------------------------------

file_path = "dataset/facility_data.csv"
df = pd.read_csv(file_path)

print("Original Dataset:")
print(df)

print("\n" + "=" * 60)


# --------------------------------------------------
# 2. Basic information
# --------------------------------------------------

print("Dataset Shape:")
print(df.shape)

print("\nColumn Names:")
print(df.columns.tolist())

print("\nDataset Information:")
print(df.info())

print("\nBasic Statistics:")
print(df.describe())

print("\n" + "=" * 60)


# --------------------------------------------------
# 3. Check missing values
# --------------------------------------------------

print("Missing Values Before Cleaning:")

missing_values = df.isnull().sum()

print(missing_values)

print("\n" + "=" * 60)


# --------------------------------------------------
# 4. Check duplicate records
# --------------------------------------------------

print("Number of Duplicate Records:")

duplicates = df.duplicated().sum()

print(duplicates)

print("\nDuplicate Records:")

print(df[df.duplicated()])

print("\n" + "=" * 60)


# --------------------------------------------------
# 5. Remove duplicate records
# --------------------------------------------------

df = df.drop_duplicates()

print("Duplicate records removed.")

print("New Dataset Shape:")

print(df.shape)

print("\n" + "=" * 60)


# --------------------------------------------------
# 6. Convert inspection_date into date format
# --------------------------------------------------

df["inspection_date"] = pd.to_datetime(
    df["inspection_date"],
    errors="coerce"
)

print("Inspection date converted successfully.")

print("\n" + "=" * 60)


# --------------------------------------------------
# 7. Check invalid cleanliness scores
#    Valid score should be between 1 and 10
# --------------------------------------------------

invalid_cleanliness = (
    (df["cleanliness_score"] < 1) |
    (df["cleanliness_score"] > 10)
)

print("Invalid Cleanliness Scores:")

print(df[invalid_cleanliness])

# Replace invalid values with NaN

df.loc[invalid_cleanliness, "cleanliness_score"] = np.nan


# --------------------------------------------------
# 8. Check invalid odor scores
#    Valid score should be between 1 and 10
# --------------------------------------------------

invalid_odor = (
    (df["odor_score"] < 1) |
    (df["odor_score"] > 10)
)

print("\nInvalid Odor Scores:")

print(df[invalid_odor])

# Replace invalid values with NaN

df.loc[invalid_odor, "odor_score"] = np.nan


# --------------------------------------------------
# 9. Check invalid water availability
# --------------------------------------------------

invalid_water = ~df["water_availability"].isin(["Yes", "No"])

print("\nInvalid Water Availability Values:")

print(df[invalid_water])

# Replace invalid values with NaN

df.loc[invalid_water, "water_availability"] = np.nan


# --------------------------------------------------
# 10. Check invalid footfall
#     Footfall cannot be negative
# --------------------------------------------------

invalid_footfall = df["footfall"] < 0

print("\nInvalid Footfall Values:")

print(df[invalid_footfall])

# Replace invalid values with NaN

df.loc[invalid_footfall, "footfall"] = np.nan


# --------------------------------------------------
# 11. Check invalid complaints
#     Complaints cannot be negative
# --------------------------------------------------

invalid_complaints = df["complaints"] < 0

print("\nInvalid Complaint Values:")

print(df[invalid_complaints])

# Replace invalid values with NaN

df.loc[invalid_complaints, "complaints"] = np.nan

print("\n" + "=" * 60)


# --------------------------------------------------
# 12. Handle missing numeric values
#     Using median
# --------------------------------------------------

numeric_columns = [
    "cleanliness_score",
    "odor_score",
    "footfall",
    "complaints"
]

for column in numeric_columns:
    df[column] = df[column].fillna(df[column].median())


# --------------------------------------------------
# 13. Handle missing water availability
#     Using mode
# --------------------------------------------------

df["water_availability"] = df["water_availability"].fillna(
    df["water_availability"].mode()[0]
)


# --------------------------------------------------
# 14. Detect outliers using IQR
# --------------------------------------------------

def find_outliers(column_name):

    Q1 = df[column_name].quantile(0.25)

    Q3 = df[column_name].quantile(0.75)

    IQR = Q3 - Q1

    lower_limit = Q1 - 1.5 * IQR

    upper_limit = Q3 + 1.5 * IQR

    outliers = df[
        (df[column_name] < lower_limit) |
        (df[column_name] > upper_limit)
    ]

    print("\nOutliers in", column_name)

    print(outliers[[column_name]])

    print("Lower Limit:", lower_limit)

    print("Upper Limit:", upper_limit)

    return outliers


print("OUTLIER DETECTION")

footfall_outliers = find_outliers("footfall")

complaints_outliers = find_outliers("complaints")


# --------------------------------------------------
# 15. Final missing value check
# --------------------------------------------------

print("\n" + "=" * 60)

print("Missing Values After Cleaning:")

print(df.isnull().sum())


# --------------------------------------------------
# 16. Final duplicate check
# --------------------------------------------------

print("\nDuplicate Records After Cleaning:")

print(df.duplicated().sum())


# --------------------------------------------------
# 17. Save cleaned dataset
# --------------------------------------------------

output_file = "dataset/cleaned_facility_data.csv"
df.to_csv(output_file, index=False)

print("\n" + "=" * 60)

print("Data cleaning completed successfully.")

print("Cleaned dataset saved at:")

print(output_file)