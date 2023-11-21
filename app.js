import { initializeApp } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-app.js";
import {
    getDatabase,
    ref,
    onChildAdded,
}
    from "https://www.gstatic.com/firebasejs/9.14.0/firebase-database.js";

const firebaseConfig = {
    apiKey: "AIzaSyA6Jtfmtgu-D9_6OGrcy3vFZ0S2ZEAfHDU",
    authDomain: "bingo-799a2.firebaseapp.com",
    projectId: "bingo-799a2",
    storageBucket: "bingo-799a2.appspot.com",
    messagingSenderId: "807357581274",
    appId: "1:807357581274:web:21dc90ef11ac25b42c62e3",
    databaseURL: "https://bingo-799a2-default-rtdb.europe-west1.firebasedatabase.app"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Database
const db = getDatabase(app)

//Set ref where in database we are working
const chatRef = ref(db, "/")

// Subscribe to changes on ref (database)
onChildAdded(chatRef, function (data) {
    const numbers = document.querySelector("#numbers")
    const number = document.createElement("div")
    number.classList.add("number")
    number.innerText = data.val()
    numbers.appendChild(number)

    // Check if number exists 
    const hit = document.getElementById(number.innerText)
    if (hit) {
        hit.classList.add("hit")
    }
})

const numbers = []; // Array

function generateNumber() {
    const number = Math.floor(Math.random() * 75) + 1;

    if (numbers.includes(number)) {
        return generateNumber();
    } else {
        numbers.push(number);
        return number;
    }
}


function init() {
    const Box = document.querySelector("#box");
    //Create 25 buttons
    for (let i = 1; i < 26; i++) {
        const Button = document.createElement("button"); // <button></button>

        //Check if number 12 and create diffrent button
        if (i == 13) {
            Button.innerText = "🌳" //CTRL + .
            Button.classList.add("hit");
        } else {
            Button.innerText = generateNumber();
            Button.id = Button.innerText
        }
        Box.appendChild(Button);
    }
}
init();
