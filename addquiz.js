// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-analytics.js";
import {
    getDatabase,
    set,
    ref,
    push,
} from "https://www.gstatic.com/firebasejs/9.23.0/firebase-database.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAD6vIwIVTDNOWRUSpiuzS4tTWFQcLJOpM",
    authDomain: "quiz-app-with-firbase-init.firebaseapp.com",
    projectId: "quiz-app-with-firbase-init",
    storageBucket: "quiz-app-with-firbase-init.appspot.com",
    messagingSenderId: "896247006609",
    appId: "1:896247006609:web:ca84549c6cabe258758630",
    measurementId: "G-WT37SBKGBG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getDatabase()
var question = document.getElementById("question")
var optionParent = document.getElementById("optionParent")
var option = document.getElementById("option")
var CORRECTANSERelm = document.getElementById("CORRECTANSER")
console.log(CORRECTANSERelm.innerHTML);

console.log(optionParent);
var Options = [];
console.log(Options);
var CORRECTANSER;
console.log(CORRECTANSER);

function renderQuestion() {
    optionParent.innerHTML = ''
    for (var i = 0; i < Options.length; i++) {
        optionParent.innerHTML += `<li onclick="setCorrectAnser('${Options[i]}' )" >${Options[i]}</li> `
        console.log(optionParent);
    }
}

window.addOption = function () {
    Options.push(option.value)
    console.log(Options);
    renderQuestion()
}
window.setCorrectAnser = function (a) {
    CORRECTANSER = a
    CORRECTANSERelm.innerHTML = CORRECTANSER
    console.log(CORRECTANSER);
}

window.sumbitQuestion = function () {
    var obj = {
        question: question.value,
        options: Options,
        anser: CORRECTANSER

    }
    console.log(obj);
    obj.id = push(ref(db, 'questions/')).key

    // console.log(obj.id);
    const reference = ref(db, `questions/${obj.id}`)
    set(reference, obj)
}