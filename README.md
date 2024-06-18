# Community Event Calendar

## Overview
The Community Event Calendar is a web application that allows users to create, view, and manage community events. The application is built with HTML, CSS, and JavaScript and uses Firebase for data storage and real-time updates.

<<<<<<< HEAD
# Community Event Calendar

A simple event calendar application using Firebase for backend services and GitHub Pages for hosting.

## Features

- Add events with title, date, time, location, and description.
- Display upcoming events.
- Events automatically remove from display after the event date has passed.

## Setup Instructions

### Prerequisites

- Node.js and npm installed on your machine.
- A Firebase project set up with Firestore.

### Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/albertwayland/community-event-calendar.git
   cd community-event-calendar
Install the dependencies:
=======
## Features
- Add new events with a title, date, time, location, and description.
- View a list of all upcoming events.
- Firebase integration for real-time data synchronization.

## Setup
To set up and run this project locally, follow these steps:

### Prerequisites
1. **Ensure you have Node.js and npm installed:**
   - Download and install from [Node.js official site](https://nodejs.org/).

2. **Install `http-server`:**
   ```bash
   npm install -g http-server
Steps
Clone the repository:

bash
Copy code
git clone https://github.com/your-username/community-event-calendar.git
cd community-event-calendar
Initialize the Git repository:

bash
Copy code
git init
git remote add origin https://github.com/your-username/community-event-calendar.git
Install dependencies:
If you are using npm, run the following command to install the necessary dependencies:
>>>>>>> dc708a0 (Initial commit with public directory files)

bash
Copy code
npm install
<<<<<<< HEAD
Firebase Setup
Create a Firebase project:

Go to Firebase Console.
Click on "Add Project" and follow the steps to create a new project.
Set up Firestore:

In the Firebase Console, navigate to Firestore Database and create a new Firestore database in test mode.
Update Firebase configuration:

Replace the Firebase configuration in public/app.js with your Firebase project details.
javascript
Copy code
const firebaseConfig = {
    apiKey: "YOUR_API_KEY",
    authDomain: "YOUR_PROJECT_ID.firebaseapp.com",
    projectId: "YOUR_PROJECT_ID",
    storageBucket: "YOUR_PROJECT_ID.appspot.com",
    messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
    appId: "YOUR_APP_ID",
    measurementId: "YOUR_MEASUREMENT_ID"
};
Running the Application Locally
=======
Generate SSH key and add to GitHub:

bash
Copy code
ssh-keygen -t ed25519 -C "your-email@example.com"
cat ~/.ssh/id_ed25519.pub
Copy the SSH key and add it to GitHub: Adding a new SSH key to your GitHub account
Configure Git to use your SSH key:

bash
Copy code
git remote set-url origin git@github.com:your-username/community-event-calendar.git
Pull latest changes and resolve conflicts:

bash
Copy code
git pull origin main --allow-unrelated-histories
Rebase if necessary:

bash
Copy code
git pull --rebase origin main
Push your changes to GitHub:

bash
Copy code
git push -u origin main
Firebase Configuration
Ensure you have a Firebase project set up. Replace the Firebase configuration in index.html with your Firebase project credentials.

html
Copy code
<script type="module">
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-analytics.js";

  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "YOUR_API_KEY",
    authDomain: "YOUR_AUTH_DOMAIN",
    projectId: "YOUR_PROJECT_ID",
    storageBucket: "YOUR_STORAGE_BUCKET",
    messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
    appId: "YOUR_APP_ID",
    measurementId: "YOUR_MEASUREMENT_ID"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
</script>
Running the Project Locally
>>>>>>> dc708a0 (Initial commit with public directory files)
Start the local server:

bash
Copy code
<<<<<<< HEAD
npm run start
Open your browser and go to:

bash
Copy code
http://127.0.0.1:8080
Verify that the application is running and you can add and view events.
Deployment
Commit and push your changes to the main branch:

bash
Copy code
git add .
git commit -m "Your commit message"
git push origin main
Deploy to GitHub Pages:

bash
Copy code
git subtree split --prefix public -b gh-pages
git push -f origin gh-pages:gh-pages
Verify that the site is live at:

bash
Copy code
https://albertwayland.github.io/community-event-calendar/
Additional Resources
Firebase Documentation: Firebase Docs
GitHub Pages Documentation: GitHub Pages Docs
Troubleshooting
Events not displaying or saving: Verify Firestore rules and ensure that the Firestore database is properly set up in test mode.
Issues with GitHub Pages: Ensure the gh-pages branch is correctly set and the files are correctly pushed to GitHub.
Contributing
Feel free to fork this repository and submit pull requests. For major changes, please open an issue first to discuss what you would like to change.

License
This project is licensed under the MIT License - see the LICENSE file for details.

markdown
Copy code

### Steps to Follow

1. **Update `README.md` file:**
   - Open your `README.md` file in VS Code.
   - Copy the above content and replace the existing content.
   - Save the file.

2. **Commit and push changes:**
   ```bash
   git add README.md
   git commit -m "Update README with comprehensive instructions"
   git push origin main
Verify the changes on GitHub:
Navigate to your repository on GitHub.
Ensure the README.md displays correctly and contains all necessary information.
By following these steps, you will ensure that the README.md file is complete and provides all necessary information for anyone to set up, run, and deploy the application.
=======
http-server public
Open your browser and navigate to:

arduino
Copy code
http://localhost:8080
You should see the Community Event Calendar application running locally.

Usage
Open the application in your web browser:
Once the server is running, navigate to http://localhost:8080 in your web browser.

Fill in the event details in the form:

Event Title: The title of the event.
Date: The date of the event (format: mm/dd/yyyy).
Time: The time of the event (format: --:-- --).
Location: The location of the event.
Description: A brief description of the event.
Submit the event:

Click on the 'Submit' button to add the event to the calendar.
View events:

The list of events will be displayed on the page with their details.
Troubleshooting
If you encounter any issues, follow these steps:

Check your Firebase configuration:

Ensure that your Firebase configuration in index.html is correct and corresponds to your Firebase project.
Check your internet connection:

Make sure you have a stable internet connection.
Check for any error messages in the browser console:

Open the browser console (F12 or right-click > Inspect > Console) and look for any error messages. Address any issues as needed.
Re-run the local server:

Stop the server (CTRL+C) and start it again with http-server public.
Ensure you have the latest changes from the repository:

Run git pull origin main to fetch the latest updates.
=======
# community-event-calendar
>>>>>>> Stashed changes
>>>>>>> dc708a0 (Initial commit with public directory files)
