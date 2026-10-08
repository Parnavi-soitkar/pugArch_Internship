import pandas as pd
import numpy as np

# --------------------------------------------------
# 1. Load cleaned dataset
# --------------------------------------------------

file_path = "dataset/cleaned_facility_data.csv"
df = pd.read_csv(file_path)

print("CLEANED FACILITY DATA")
print(df)

print("\n" + "=" * 60)


# --------------------------------------------------
# 2. Basic information
# --------------------------------------------------

print("Dataset Shape:")
print(df.shape)

print("\nColumns:")
print(df.columns.tolist())

print("\n" + "=" * 60)


# --------------------------------------------------
# 3. Basic statistics
# --------------------------------------------------

print("BASIC STATISTICS")

print("\nAverage Cleanliness Score:")
print(df["cleanliness_score"].mean())

print("\nAverage Odor Score:")
print(df["odor_score"].mean())

print("\nAverage Footfall:")
print(df["footfall"].mean())

print("\nAverage Complaints:")
print(df["complaints"].mean())

print("\n" + "=" * 60)


# --------------------------------------------------
# 4. Minimum and maximum values
# --------------------------------------------------

print("MINIMUM AND MAXIMUM VALUES")

print("\nMinimum Cleanliness Score:")
print(df["cleanliness_score"].min())

print("\nMaximum Cleanliness Score:")
print(df["cleanliness_score"].max())

print("\nMinimum Footfall:")
print(df["footfall"].min())

print("\nMaximum Footfall:")
print(df["footfall"].max())

print("\nMinimum Complaints:")
print(df["complaints"].min())

print("\nMaximum Complaints:")
print(df["complaints"].max())

print("\n" + "=" * 60)


# --------------------------------------------------
# 5. Location-wise analysis
# --------------------------------------------------

print("LOCATION-WISE ANALYSIS")

location_analysis = df.groupby("location").agg({
    "cleanliness_score": "mean",
    "odor_score": "mean",
    "footfall": "mean",
    "complaints": "mean"
})

print(location_analysis)

print("\n" + "=" * 60)


# --------------------------------------------------
# 6. Location-wise average footfall
# --------------------------------------------------

print("AVERAGE FOOTFALL BY LOCATION")

average_footfall = df.groupby("location")["footfall"].mean()

print(average_footfall)

print("\n" + "=" * 60)


# --------------------------------------------------
# 7. Location-wise average complaints
# --------------------------------------------------

print("AVERAGE COMPLAINTS BY LOCATION")

average_complaints = df.groupby("location")["complaints"].mean()

print(average_complaints)

print("\n" + "=" * 60)


# --------------------------------------------------
# 8. Highest cleanliness location
# --------------------------------------------------

highest_cleanliness_location = (
    location_analysis["cleanliness_score"].idxmax()
)

highest_cleanliness_score = (
    location_analysis["cleanliness_score"].max()
)

print("Highest Average Cleanliness Location:")

print(highest_cleanliness_location)

print("Average Score:")

print(highest_cleanliness_score)

print("\n" + "=" * 60)


# --------------------------------------------------
# 9. Highest complaint location
# --------------------------------------------------

highest_complaint_location = (
    location_analysis["complaints"].idxmax()
)

highest_complaint_value = (
    location_analysis["complaints"].max()
)

print("Highest Average Complaint Location:")

print(highest_complaint_location)

print("Average Complaints:")

print(highest_complaint_value)

print("\n" + "=" * 60)


# --------------------------------------------------
# 10. Highest footfall location
# --------------------------------------------------

highest_footfall_location = (
    location_analysis["footfall"].idxmax()
)

highest_footfall_value = (
    location_analysis["footfall"].max()
)

print("Highest Average Footfall Location:")

print(highest_footfall_location)

print("Average Footfall:")

print(highest_footfall_value)

print("\n" + "=" * 60)


# --------------------------------------------------
# 11. Waste level analysis
# --------------------------------------------------

print("WASTE LEVEL ANALYSIS")

waste_analysis = df.groupby("waste_level").agg({
    "cleanliness_score": "mean",
    "odor_score": "mean",
    "footfall": "mean",
    "complaints": "mean"
})

print(waste_analysis)

print("\n" + "=" * 60)


# --------------------------------------------------
# 12. Water availability analysis
# --------------------------------------------------

print("WATER AVAILABILITY ANALYSIS")

water_analysis = df.groupby("water_availability").agg({
    "cleanliness_score": "mean",
    "complaints": "mean",
    "footfall": "mean"
})

print(water_analysis)

print("\n" + "=" * 60)


# --------------------------------------------------
# 13. NumPy analysis
# --------------------------------------------------

print("NUMPY ANALYSIS")

cleanliness_array = np.array(df["cleanliness_score"])

print("\nCleanliness Scores:")
print(cleanliness_array)

print("\nNumPy Mean:")
print(np.mean(cleanliness_array))

print("\nNumPy Maximum:")
print(np.max(cleanliness_array))

print("\nNumPy Minimum:")
print(np.min(cleanliness_array))

print("\nNumPy Standard Deviation:")
print(np.std(cleanliness_array))

print("\n" + "=" * 60)


# --------------------------------------------------
# 14. Correlation analysis
# --------------------------------------------------

print("CORRELATION ANALYSIS")

correlation = df[
    ["cleanliness_score", "odor_score", "footfall", "complaints"]
].corr()

print(correlation)

print("\n" + "=" * 60)


# --------------------------------------------------
# 15. Important insights
# --------------------------------------------------

print("KEY INSIGHTS")

print(
    "1. The location with the highest average cleanliness "
    "score is",
    highest_cleanliness_location
)

print(
    "2. The location with the highest average number of "
    "complaints is",
    highest_complaint_location
)

print(
    "3. The location with the highest average footfall is",
    highest_footfall_location
)

print(
    "4. The overall average cleanliness score is",
    round(df["cleanliness_score"].mean(), 2)
)

print(
    "5. The overall average number of complaints is",
    round(df["complaints"].mean(), 2)
)

print("\n" + "=" * 60)

print("ANALYSIS COMPLETED SUCCESSFULLY")