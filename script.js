<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Form Validation</title>
  <style>
    #form-feedback {
      display: none; /* Hidden until validation occurs */
      margin-top: 10px;
      font-weight: bold;
    }
  </style>
</head>
<body>
  <form id="registration-form">
    <label for="username">Username:</label><br>
    <input type="text" id="username"><br><br>

    <label for="email">Email:</label><br>
    <input type="text" id="email"><br><br>

    <label for="password">Password:</label><br>
    <input type="password" id="password"><br><br>

    <button type="submit">Register</button>
  </form>

  <div id="form-feedback"></div>

  <script>
    document.addEventListener("DOMContentLoaded", function () {
      // Select form and feedback div
      const form = document.getElementById("registration-form");
      const feedbackDiv = document.getElementById("form-feedback");

      // Handle form submission
      form.addEventListener("submit", function (event) {
        event.preventDefault(); // Prevent form submission

        // Retrieve and trim input values
        const username = document.getElementById("username").value.trim();
        const email = document.getElementById("email").value.trim();
        const password = document.getElementById("password").value.trim();

        // Validation variables
        let isValid = true;
        let messages = [];

        // Username validation
        if (username.length < 3) {
          isValid = false;
          messages.push("Username must be at least 3 characters long.");
        }

        // Email validation
        if (!email.includes("@") || !email.includes(".")) {
          isValid = false;
          messages.push("Email must contain '@' and '.' characters.");
        }

        // Password validation
        if (password.length < 8) {
          isValid = false;
          messages.push("Password must be at least 8 characters long.");
        }

        // Display feedback
        feedbackDiv.style.display = "block";

        if (isValid) {
          feedbackDiv.textContent = "Registration successful!";
          feedbackDiv.style.color = "#28a745"; // Green
        } else {
          feedbackDiv.innerHTML = messages.join("<br>");
          feedbackDiv.style.color = "#dc3545"; // Red
        }
      });
    });
  </script>
</body>
</html>
