import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getFirestore, collection, addDoc, getDocs, query, where, Timestamp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

const firebaseConfig = {
    apiKey: "AIzaSyAs81-zOOKDdMKT9zl3jhwHciLohDEHX1Y",
    authDomain: "hackathon-project-b2b8f.firebaseapp.com",
    projectId: "hackathon-project-b2b8f",
    storageBucket: "hackathon-project-b2b8f.appspot.com",
    messagingSenderId: "806199533912",
    appId: "1:806199533912:web:bb0c022c9be3b981e8c52d",
    measurementId: "G-T0N9553JNB"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

document.getElementById('event-form').addEventListener('submit', addEvent);

async function addEvent(e) {
    e.preventDefault();
    const title = document.getElementById('event-title').value;
    const date = document.getElementById('event-date').value;
    const time = document.getElementById('event-time').value;
    const location = document.getElementById('event-location').value;
    const description = document.getElementById('event-description').value;

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
        document.getElementById('event-form').reset();
        fetchEvents();
    } catch (error) {
        console.error("Error adding document: ", error);
        alert("Error: " + error.message);
    }
}

async function fetchEvents() {
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    const eventsRef = collection(db, "events");
    const q = query(eventsRef, where('date', '>=', Timestamp.fromDate(today)));

    const querySnapshot = await getDocs(q);
    const eventList = document.getElementById('event-list');
    eventList.innerHTML = '';
    querySnapshot.forEach((doc) => {
        const data = doc.data();
        const li = document.createElement('li');
        li.className = 'list-group-item';
        li.textContent = `${data.title} - ${data.date.toDate().toDateString()} at ${data.time}`;
        eventList.appendChild(li);
    });
}

fetchEvents();
