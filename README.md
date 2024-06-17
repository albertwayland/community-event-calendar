<<<<<<< Updated upstream >>>>>>>
# Community Event Calendar

## Overview
The Community Event Calendar is a web application that allows users to create, view, and manage community events. The application is built with HTML, CSS, and JavaScript and uses Firebase for data storage and real-time updates.

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

bash
Copy code
npm install
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
Start the local server:

bash
Copy code
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
