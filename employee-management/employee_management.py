# Employee Management CLI Application
employees = []
# Add Employee
def add_employee():
    employee_id = int(input("Enter Employee ID: "))
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

    print("Employee added successfully!")


# Update Employee
def update_employee():
    employee_id = int(input("Enter Employee ID to update: "))

    for employee in employees:
        if employee["id"] == employee_id:
            employee["name"] = input("Enter New Name: ")
            employee["department"] = input("Enter New Department: ")
            employee["salary"] = float(input("Enter New Salary: "))

            print("Employee updated successfully!")
            return

    print("Employee not found!")


# Delete Employee
def delete_employee():
    employee_id = int(input("Enter Employee ID to delete: "))

    for employee in employees:
        if employee["id"] == employee_id:
            employees.remove(employee)
            print("Employee deleted successfully!")
            return

    print("Employee not found!")


# Search Employee
def search_employee():
    employee_id = int(input("Enter Employee ID to search: "))

    for employee in employees:
        if employee["id"] == employee_id:
            print("\nEmployee Found")
            print("ID:", employee["id"])
            print("Name:", employee["name"])
            print("Department:", employee["department"])
            print("Salary:", employee["salary"])
            return

    print("Employee not found!")


# List Employees
def list_employees():
    if len(employees) == 0:
        print("No employees found!")
        return

    print("\n===== Employee List =====")

    for employee in employees:
        print("ID:", employee["id"])
        print("Name:", employee["name"])
        print("Department:", employee["department"])
        print("Salary:", employee["salary"])
        print("------------------------")


# Highest Salary
def highest_salary():
    if len(employees) == 0:
        print("No employees found!")
        return

    highest = employees[0]

    for employee in employees:
        if employee["salary"] > highest["salary"]:
            highest = employee

    print("\n===== Highest Salary =====")
    print("ID:", highest["id"])
    print("Name:", highest["name"])
    print("Department:", highest["department"])
    print("Salary:", highest["salary"])


# Average Salary
def average_salary():
    if len(employees) == 0:
        print("No employees found!")
        return

    total = 0

    for employee in employees:
        total = total + employee["salary"]

    average = total / len(employees)

    print("\nAverage Salary:", average)


# Department Filter
def department_filter():
    department = input("Enter Department: ")

    found = False

    print("\n===== Employees in", department, "Department =====")

    for employee in employees:
        if employee["department"].lower() == department.lower():
            print("ID:", employee["id"])
            print("Name:", employee["name"])
            print("Salary:", employee["salary"])
            print("------------------------")
            found = True

    if found == False:
        print("No employees found in this department!")


# Main Menu
while True:

    print("\n===== Employee Management System =====")
    print("1. Add Employee")
    print("2. Update Employee")
    print("3. Delete Employee")
    print("4. Search Employee")
    print("5. List Employees")
    print("6. Highest Salary")
    print("7. Average Salary")
    print("8. Department Filter")
    print("9. Exit")

    choice = input("Enter your choice: ")

    if choice == "1":
        add_employee()

    elif choice == "2":
        update_employee()

    elif choice == "3":
        delete_employee()

    elif choice == "4":
        search_employee()

    elif choice == "5":
        list_employees()

    elif choice == "6":
        highest_salary()

    elif choice == "7":
        average_salary()

    elif choice == "8":
        department_filter()

    elif choice == "9":
        print("Thank you for using Employee Management System!")
        break

    else:
        print("Invalid choice! Please try again.")


