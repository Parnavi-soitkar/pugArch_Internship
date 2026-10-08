import pandas as pd

# --------------------------------------------------
# 1. Create a Series
# --------------------------------------------------

marks = pd.Series([80, 75, 90, 85, 70])

print("Pandas Series:")
print(marks)

print("\n" + "=" * 50)


# --------------------------------------------------
# 2. Create a DataFrame
# --------------------------------------------------

data = {
    "Name": ["Amit", "Rahul", "Priya", "Sneha"],
    "Age": [21, 22, 20, 21],
    "Marks": [80, 75, 90, 85]
}

df = pd.DataFrame(data)

print("Pandas DataFrame:")
print(df)

print("\n" + "=" * 50)


# --------------------------------------------------
# 3. Read CSV file
# --------------------------------------------------

facility_df = pd.read_csv(
    "../dataset/cleaned_facility_data.csv"
)

print("Facility Dataset:")
print(facility_df.head())

print("\n" + "=" * 50)


# --------------------------------------------------
# 4. Display first records
# --------------------------------------------------

print("First 5 Records:")
print(facility_df.head())

print("\n" + "=" * 50)


# --------------------------------------------------
# 5. Display last records
# --------------------------------------------------

print("Last 5 Records:")
print(facility_df.tail())

print("\n" + "=" * 50)


# --------------------------------------------------
# 6. Filtering
# --------------------------------------------------

print("Facilities with Cleanliness Score >= 8:")

filtered_data = facility_df[
    facility_df["cleanliness_score"] >= 8
]

print(filtered_data)

print("\n" + "=" * 50)


# --------------------------------------------------
# 7. Sorting
# --------------------------------------------------

print("Facilities Sorted by Footfall:")

sorted_data = facility_df.sort_values(
    by="footfall",
    ascending=False
)

print(sorted_data.head())

print("\n" + "=" * 50)


# --------------------------------------------------
# 8. Grouping and Aggregation
# --------------------------------------------------

print("Average Cleanliness by Location:")

grouped_data = facility_df.groupby(
    "location"
)["cleanliness_score"].mean()

print(grouped_data)

print("\n" + "=" * 50)


# --------------------------------------------------
# 9. Missing Values
# --------------------------------------------------

print("Missing Values:")

print(facility_df.isnull().sum())

print("\n" + "=" * 50)


# --------------------------------------------------
# 10. Duplicate Values
# --------------------------------------------------

print("Duplicate Records:")

print(facility_df.duplicated().sum())

print("\n" + "=" * 50)


# --------------------------------------------------
# 11. Data Transformation
# --------------------------------------------------

facility_df["complaints_per_100_footfall"] = (
    facility_df["complaints"] /
    facility_df["footfall"]
) * 100

print("Data after Transformation:")

print(
    facility_df[
        [
            "location",
            "footfall",
            "complaints",
            "complaints_per_100_footfall"
        ]
    ].head()
)

print("\n" + "=" * 50)

print("Pandas Practice Completed Successfully")