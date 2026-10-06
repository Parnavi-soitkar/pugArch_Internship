import json
import os


FILE_NAME = "data.json"


# Load employee data from JSON file
def load_data():
    try:
        if not os.path.exists(FILE_NAME):
            return []

        with open(FILE_NAME, "r") as file:
            return json.load(file)

    except json.JSONDecodeError:
        print("Error: data.json contains invalid data.")
        return []

    except Exception as e:
        print("Error while loading data:", e)
        return []


# Save employee data to JSON file
def save_data(employees):
    try:
        with open(FILE_NAME, "w") as file:
            json.dump(employees, file, indent=4)

    except Exception as e:
        print("Error while saving data:", e)


# Add a new employee
def add_employee():
    employees = load_data()

    try:
        employee_id = int(input("Enter Employee ID: "))

        # Check duplicate ID
        for employee in employees:
            if employee["id"] == employee_id:
                print("Employee ID already exists.")
                return

        name = input("Enter Employee Name: ")
        department = input("Enter Department: ")
        salary = float(input("Enter Salary: "))

        employee = {
            "id": employee_id,
            "name": name,
            "department": department,
            "salary": salary
        }

        employees.append(employee)

        save_data(employees)

        print("Employee added successfully.")

    except ValueError:
        print("Invalid input. ID must be an integer and salary must be a number.")

    except Exception as e:
        print("Error:", e)


# Display all employees
def list_employees():
    employees = load_data()

    if not employees:
        print("No employees found.")
        return

    print("\n========== Employee List ==========")

    for employee in employees:
        print(
            f"ID: {employee['id']} | "
            f"Name: {employee['name']} | "
            f"Department: {employee['department']} | "
            f"Salary: {employee['salary']}"
        )


# Search employee by ID or name
def search_employee():
    employees = load_data()

    if not employees:
        print("No employees found.")
        return

    search = input("Enter Employee ID or Name to search: ").strip()

    found = False

    for employee in employees:

        if str(employee["id"]) == search or employee["name"].lower() == search.lower():

            print("\nEmployee Found:")
            print("ID:", employee["id"])
            print("Name:", employee["name"])
            print("Department:", employee["department"])
            print("Salary:", employee["salary"])

            found = True

    if not found:
        print("Employee not found.")


# Update employee
def update_employee():
    employees = load_data()

    try:
        employee_id = int(input("Enter Employee ID to update: "))

        for employee in employees:

            if employee["id"] == employee_id:

                print("\nEmployee found.")
                print("Press Enter if you don't want to change a value.")

                name = input(f"Enter Name [{employee['name']}]: ")
                department = input(
                    f"Enter Department [{employee['department']}]: "
                )
                salary = input(f"Enter Salary [{employee['salary']}]: ")

                if name:
                    employee["name"] = name

                if department:
                    employee["department"] = department

                if salary:
                    employee["salary"] = float(salary)

                save_data(employees)

                print("Employee updated successfully.")
                return

        print("Employee not found.")

    except ValueError:
        print("Invalid input. Please enter a valid number.")

    except Exception as e:
        print("Error:", e)


# Delete employee
def delete_employee():
    employees = load_data()

    try:
        employee_id = int(input("Enter Employee ID to delete: "))

        for employee in employees:

            if employee["id"] == employee_id:

                employees.remove(employee)

                save_data(employees)

                print("Employee deleted successfully.")
                return

        print("Employee not found.")

    except ValueError:
        print("Employee ID must be a number.")

    except Exception as e:
        print("Error:", e)


# Filter employees by department
def filter_employees():
    employees = load_data()

    if not employees:
        print("No employees found.")
        return

    department = input("Enter Department to filter: ").strip()

    filtered_employees = []

    for employee in employees:

        if employee["department"].lower() == department.lower():
            filtered_employees.append(employee)

    if not filtered_employees:
        print("No employees found in this department.")
        return

    print(f"\nEmployees in {department}:")

    for employee in filtered_employees:
        print(
            f"ID: {employee['id']} | "
            f"Name: {employee['name']} | "
            f"Salary: {employee['salary']}"
        )


# Sort employees
def sort_employees():
    employees = load_data()

    if not employees:
        print("No employees found.")
        return

    print("\nSort Employees By:")
    print("1. Name")
    print("2. Salary")

    choice = input("Enter your choice: ")

    if choice == "1":

        sorted_employees = sorted(
            employees,
            key=lambda employee: employee["name"].lower()
        )

    elif choice == "2":

        sorted_employees = sorted(
            employees,
            key=lambda employee: employee["salary"]
        )

    else:
        print("Invalid choice.")
        return

    print("\n========== Sorted Employees ==========")

    for employee in sorted_employees:
        print(
            f"ID: {employee['id']} | "
            f"Name: {employee['name']} | "
            f"Department: {employee['department']} | "
            f"Salary: {employee['salary']}"
        )


# Display statistics
def statistics():
    employees = load_data()

    if not employees:
        print("No employees found.")
        return

    total_employees = len(employees)

    salaries = []

    for employee in employees:
        salaries.append(employee["salary"])

    average_salary = sum(salaries) / total_employees
    minimum_salary = min(salaries)
    maximum_salary = max(salaries)

    print("\n========== Employee Statistics ==========")

    print("Total Employees:", total_employees)
    print("Average Salary:", average_salary)
    print("Minimum Salary:", minimum_salary)
    print("Maximum Salary:", maximum_salary)

    # Department-wise statistics
    departments = {}

    for employee in employees:

        department = employee["department"]

        if department in departments:
            departments[department] += 1
        else:
            departments[department] = 1

    print("\nDepartment-wise Statistics:")

    for department, count in departments.items():
        print(f"{department}: {count} employee(s)")