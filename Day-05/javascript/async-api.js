
const API_URL = "https://jsonplaceholder.typicode.com/users";

// Reusable function for HTTP requests
async function apiRequest(url, method = "GET", body = null) {
    const options = {
        method,
        headers: {
            "Content-Type": "application/json"
        }
    };

    if (body !== null) {
        options.body = JSON.stringify(body);
    }

    try {
        const response = await fetch(url, options);

        if (!response.ok) {
            throw new Error(`HTTP error: ${response.status}`);
        }

        // DELETE may return no content
        if (response.status === 204) {
            return null;
        }

        return await response.json();
    } catch (error) {
        console.error(`${method} request failed:`, error.message);
        throw error;
    }
}

async function runExamples() {
    try {
        // 1. GET - Read employees/users
        console.log("GET: Read users");

        const users = await apiRequest(API_URL);
        console.log(users.slice(0, 3));

        // 2. POST - Create a user
        console.log("POST: Create user");

        const newUser = await apiRequest(API_URL, "POST", {
            name: "Rahul Sharma",
            email: "rahul@example.com"
        });

        console.log(newUser);

        // 3. PUT - Replace/update a user
        console.log("PUT: Update user");

        const updatedUser = await apiRequest(
            `${API_URL}/1`,
            "PUT",
            {
                id: 1,
                name: "Rahul Updated",
                email: "rahul.updated@example.com"
            }
        );

        console.log(updatedUser);

        // 4. DELETE - Delete a user
        console.log("DELETE: Delete user");

        const deletedUser = await apiRequest(
            `${API_URL}/1`,
            "DELETE"
        );

        console.log("Delete request completed:", deletedUser);
    } catch (error) {
        console.error("API examples could not complete:", error.message);
    }
}

runExamples();
