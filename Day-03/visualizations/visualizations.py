import pandas as pd
import matplotlib.pyplot as plt

# --------------------------------------------------
# 1. Load cleaned dataset
# --------------------------------------------------

file_path = "dataset/cleaned_facility_data.csv"

df = pd.read_csv(file_path)

print("Cleaned dataset loaded successfully.")

# --------------------------------------------------
# 2. Bar Chart 1 - Average Cleanliness by Location
# --------------------------------------------------

cleanliness_by_location = df.groupby("location")["cleanliness_score"].mean()

plt.figure(figsize=(8, 5))

cleanliness_by_location.plot(kind="bar")

plt.title("Average Cleanliness Score by Location")
plt.xlabel("Location")
plt.ylabel("Average Cleanliness Score")

plt.xticks(rotation=0)

plt.tight_layout()

plt.savefig("bar_chart_1.png")

plt.show()


# --------------------------------------------------
# 3. Bar Chart 2 - Average Complaints by Location
# --------------------------------------------------

complaints_by_location = df.groupby("location")["complaints"].mean()

plt.figure(figsize=(8, 5))

complaints_by_location.plot(kind="bar")

plt.title("Average Complaints by Location")
plt.xlabel("Location")
plt.ylabel("Average Complaints")

plt.xticks(rotation=0)

plt.tight_layout()

plt.savefig("bar_chart_2.png")

plt.show()


# --------------------------------------------------
# 4. Histogram - Footfall Distribution
# --------------------------------------------------

plt.figure(figsize=(8, 5))

plt.hist(df["footfall"], bins=10)

plt.title("Distribution of Facility Footfall")
plt.xlabel("Footfall")
plt.ylabel("Number of Facilities")

plt.tight_layout()

plt.savefig("histogram.png")

plt.show()


# --------------------------------------------------
# 5. Scatter Plot - Footfall vs Complaints
# --------------------------------------------------

plt.figure(figsize=(8, 5))

plt.scatter(
    df["footfall"],
    df["complaints"]
)

plt.title("Footfall vs Complaints")
plt.xlabel("Footfall")
plt.ylabel("Complaints")

plt.tight_layout()

plt.savefig("scatter_plot.png")

plt.show()


# --------------------------------------------------
# 6. Additional Visualization - Line Chart
# --------------------------------------------------

df["inspection_date"] = pd.to_datetime(
    df["inspection_date"]
)

daily_footfall = df.groupby(
    "inspection_date"
)["footfall"].mean()

plt.figure(figsize=(10, 5))

plt.plot(
    daily_footfall.index,
    daily_footfall.values
)

plt.title("Average Footfall Over Time")
plt.xlabel("Inspection Date")
plt.ylabel("Average Footfall")

plt.xticks(rotation=45)

plt.tight_layout()

plt.savefig("line_chart.png")

plt.show()


# --------------------------------------------------
# 7. Completion Message
# --------------------------------------------------

print("\n" + "=" * 60)

print("ALL VISUALIZATIONS CREATED SUCCESSFULLY")

print("=" * 60)

print("Created files:")

print("1. bar_chart_1.png")
print("2. bar_chart_2.png")
print("3. histogram.png")
print("4. scatter_plot.png")
print("5. line_chart.png")