class Employee:

    def __init__(self, name, salary):
        self.name = name
        self.salary = salary

    def display(self):
        print(self.name)
        print(self.salary)


employee1 = Employee("Rahul", 35000)

employee1.display()