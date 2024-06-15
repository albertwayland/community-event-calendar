// Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyAs81-zOOKDdMKT9zl3jhwHciLohDEHX1Y",
    authDomain: "hackathon-project-b2b8f.firebaseapp.com",
    projectId: "hackathon-project-b2b8f",
    storageBucket: "hackathon-project-b2b8f.appspot.com",
    messagingSenderId: "806199533912",
    appId: "1:806199533912:web:bb0c022c9be3b981e8c52d",
    measurementId: "G-T0N9553JNB"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
var db = firebase.firestore();

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
        const docRef = await db.collection("events").add({
            title,
            date,
            time,
            location,
            description
        });
        console.log("Document written with ID: ", docRef.id);
        document.getElementById('event-form').reset();
        fetchEvents();
    } catch (error) {
        console.error("Error adding document: ", error);
    }
}

async function fetchEvents() {
    const querySnapshot = await db.collection("events").get();
    const eventList = document.getElementById('event-list');
    eventList.innerHTML = '';
    querySnapshot.forEach((doc) => {
        const li = document.createElement('li');
        li.className = 'list-group-item';
        li.textContent = `${doc.data().title} - ${doc.data().date} at ${doc.data().time}`;
        eventList.appendChild(li);
    });
}

// Fetch events on load
fetchEvents();
