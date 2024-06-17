import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getFirestore, collection, addDoc, getDocs, query, where, Timestamp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAs81-zOOKDdMKT9zl3jhwHciLohDEHX1Y",
    authDomain: "hackathon-project-b2b8f.firebaseapp.com",
    projectId: "hackathon-project-b2b8f",
    storageBucket: "hackathon-project-b2b8f.appspot.com",
    messagingSenderId: "806199533912",
    appId: "1:806199533912:web:bb0c022c9be3b981e8c52d",
    measurementId: "G-T0N9553JNB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

document.getElementById('event-form').addEventListener('submit', addEvent);

async function addEvent(e) {
    e.preventDefault();
    console.log("Form submitted");

    const title = document.getElementById('event-title').value;
    const date = document.getElementById('event-date').value;
    const time = document.getElementById('event-time').value;
    const location = document.getElementById('event-location').value;
    const description = document.getElementById('event-description').value;

    console.log({ title, date, time, location, description });

    try {
        const eventDate = new Date(date);
        const timestamp = Timestamp.fromDate(eventDate);
        const docRef = await addDoc(collection(db, "events"), {
            title,
            date: timestamp,
            time,
            location,
            description
        });
        console.log("Document written with ID: ", docRef.id);
        document.getElementById('event-form').reset();
        fetchEvents();
    } catch (error) {
        console.error("Error adding document: ", error);
        alert("Error: " + error.message);  // Display the error message
    }
}

async function fetchEvents() {
    console.log("Fetching events...");
    const today = new Date();
    today.setHours(0, 0, 0, 0);  // Set the time to the start of the day

    const eventsRef = collection(db, "events");
    const q = query(eventsRef, where('date', '>=', Timestamp.fromDate(today)));

    try {
        const querySnapshot = await getDocs(q);
        const eventList = document.getElementById('event-list');
        eventList.innerHTML = '';
        querySnapshot.forEach((doc) => {
            const data = doc.data();
            console.log("Fetched event: ", data);
            const li = document.createElement('li');
            li.className = 'list-group-item';
            li.textContent = `${data.title} - ${data.date.toDate().toDateString()} at ${data.time}`;
            eventList.appendChild(li);
        });
    } catch (error) {
        console.error("Error fetching documents: ", error);
        alert("Error: " + error.message);  // Display the error message
    }
}

// Fetch events on load
fetchEvents();