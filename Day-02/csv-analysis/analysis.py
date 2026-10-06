import csv


FILE_NAME = "employees.csv"


# Read CSV file
def read_data():
    employees = []

    try:
        with open(FILE_NAME, "r") as file:
            reader = csv.DictReader(file)

            for row in reader:
                employees.append(row)

        return employees

    except FileNotFoundError:
        print("Error: employees.csv file not found.")
        return []

    except Exception as e:
        print("Error while reading file:", e)
        return []


# Count total records
def record_count(employees):
    print("\nTotal Records:", len(employees))


# Find missing values
def missing_values(employees):
    print("\n========== Missing Values ==========")

    columns = ["id", "name", "department", "salary"]

    for column in columns:

        count = 0

        for employee in employees:

            if employee[column] == "":
                count += 1

        print(column, ":", count)


# Find duplicate records
def find_duplicates(employees):
    print("\n========== Duplicate Records ==========")

    duplicates = []

    for employee in employees:

        if employee in duplicates:
            continue

        count = employees.count(employee)

        if count > 1:
            duplicates.append(employee)

    if len(duplicates) == 0:
        print("No duplicate records found.")

    else:
        print("Duplicate Records:", len(duplicates))

        for employee in duplicates:
            print(employee)


# Calculate salary statistics
def salary_statistics(employees):
    print("\n========== Salary Statistics ==========")

    salaries = []

    for employee in employees:
        salaries.append(float(employee["salary"]))

    if len(salaries) == 0:
        print("No salary data found.")
        return

    average_salary = sum(salaries) / len(salaries)
    minimum_salary = min(salaries)
    maximum_salary = max(salaries)

    print("Average Salary:", average_salary)
    print("Minimum Salary:", minimum_salary)
    print("Maximum Salary:", maximum_salary)


# Department-wise statistics
def category_statistics(employees):
    print("\n========== Department-wise Statistics ==========")

    departments = {}

    for employee in employees:

        department = employee["department"]

        if department in departments:
            departments[department] += 1

        else:
            departments[department] = 1

    for department, count in departments.items():

        print(department, ":", count, "employee(s)")


# Main program
def main():

    employees = read_data()

    if not employees:
        return

    print("\n========================================")
    print("          CSV DATA ANALYSIS")
    print("========================================")

    record_count(employees)

    missing_values(employees)

    find_duplicates(employees)

    salary_statistics(employees)

    category_statistics(employees)


if __name__ == "__main__":
    main()