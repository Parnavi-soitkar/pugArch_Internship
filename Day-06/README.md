
# Day 06 - TypeScript and React Employee Management Dashboard

## Overview

This project was developed as part of Python and software development internship training. It contains TypeScript practice exercises and a React Employee Management Dashboard built with TypeScript.

## Project Structure

- `typescript/` - TypeScript practice exercises covering basic types, interfaces, functions, classes, enums, generics, and type guards.
- `react-app/` - React and TypeScript employee management application.
- `react-app/src/components/` - Reusable dashboard cards, employee table, employee form, and employee details components.
- `react-app/src/hooks/` - Custom React hook for employee data management.
- `react-app/src/services/` - REST API functions for employee operations.
- `react-app/src/types/` - Employee TypeScript interface.
- `react-app/db.json` - Local JSON Server database.

## Features

- Dashboard cards showing total employees, average salary, and departments.
- View employee records and individual employee details.
- Search employees by name or email.
- Filter employees by department.
- Sort employees by name or salary.
- Add, edit, and delete employee records.
- Form validation for required fields, email, and salary.
- REST API integration using GET, POST, PUT, and DELETE.
- Loading and error handling.
- Responsive user interface.

## Technologies Used

- TypeScript
- React
- Vite
- JSON Server
- HTML and CSS
- JavaScript ES6+

## Setup Instructions

### 1. Open the React application folder
cd Day-06/react-app
### 2. Install dependencies
npm install
### 3. Start the REST API
Open the first terminal and run:
npm run server

The API is available at:

`http://localhost:3001/employees`

### 4. Start the React application

Open a second terminal in the same `react-app` folder and run:
npm run dev
Open the local URL printed in the terminal.

### 5. Build the application
npm run build

## API Operations

- GET `/employees` - Retrieve employees.
- POST `/employees` - Add an employee.
- PUT `/employees/:id` - Update an employee.
- DELETE `/employees/:id` - Delete an employee.

## Learning Outcomes

- Practiced TypeScript types, interfaces, functions, classes, generics, enums, and type guards.
- Built reusable React components.
- Used props, state, events, and hooks.
- Implemented forms, validation, searching, filtering, and sorting.
- Connected a frontend application to a REST API.
- Practiced asynchronous requests and error handling.
