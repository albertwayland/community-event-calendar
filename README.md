<<<<<<< Updated upstream
# Community Event Calendar

## Overview
The Community Event Calendar is a web application that allows users to create, view, and manage community events. The application is built with HTML, CSS, and JavaScript and uses Firebase for data storage and real-time updates.

## Features
- Add new events with a title, date, time, location, and description.
- View a list of all upcoming events.
- Firebase integration for real-time data synchronization.

markdown
Copy code
# Community Event Calendar

A simple event calendar application using Firebase for backend services and GitHub Pages for hosting.

## Setup Instructions

### Prerequisites

- Node.js and npm installed on your machine.

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/albertwayland/community-event-calendar.git
   cd community-event-calendar
Install the dependencies:

bash
Copy code
npm install
Running the Application Locally
Start the local server:

bash
Copy code
npm run start
Open your browser and go to http://127.0.0.1:8080 to see the application running locally.

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
Verify that the site is live at https://albertwayland.github.io/community-event-calendar/.

Contributing
Feel free to fork this repository and submit pull requests. For major changes, please open an issue first to discuss what you would like to change.

License
This project is licensed under the MIT License - see the LICENSE file for details.

sql
Copy code

### Step 3: Verify Everything

- **Check the live site:** Ensure all functionalities work, including adding and displaying events.
- **Check Firestore:** Ensure that events are being correctly saved and retrieved from Firestore.
