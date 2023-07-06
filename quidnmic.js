// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-analytics.js";
import { getDatabase, ref, onChildAdded, push } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-database.js";
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











var Mainquestions = [

]
// console.log(Mainquestions[0].anser);


console.log(Mainquestions);
let currentQuestionIndex = 0;

window.onload = function () {
    let para = document.getElementById("para")
    // para.children[0].innertext = "asdasd"

    var Mainquestionsobj = Mainquestions;
    console.log(Mainquestionsobj.parentElement);

    let questionReplace = document.getElementsByClassName("h2")
    console.log(questionReplace);
    console.log(p.innerText);
    let q = Mainquestions[0]
    console.log(q);
    // console.log(questionReplace[0]);
    var gh = questionReplace;
    console.log(gh);
    var gl = Mainquestions;
    console.log(gl);
    var add = gh[1].innerHTML = gl[1].innerHTML;
    console.log(add);





}
// ================




window.checkAnswer = function () {
    let selectedOption = event.target.innerHTML;
    let d = Mainquestions[0];
    console.log(d);
    console.log(selectedOption);
    let currentQuestion = Mainquestions;
    console.log(currentQuestion.length);
    // i have to ask form expert :HERE I WANNA IF THE DLBCLICK NOT SCOR ++


    for (var i = 0; i <= currentQuestion.length; i++) {
        if (selectedOption == currentQuestion[i].anser) {
            // document.write("Correct answer! Score:", score)
            console.log("Correct answer! Score:", score);
            score++;
            gettingScroe.innerHTML = `<button><span style="font-size: small; font-weight="bolder"">Correct</span> <br>${score}</button><br>`

        }
    }
}
window.getDataFromBase = function () {
    const reference = ref(db, 'questions/')
    onChildAdded(reference, function (data) {
        console.log(data.val());
        Mainquestions.push(data.val())
        renderQuestion()
    })

}
getDataFromBase()





window.showQuestion = function (e) {
    //show question
    let questionReplace = document.getElementById("question_element");
    questionReplace.innerHTML = Mainquestions[e].question;
    console.log(questionReplace);
    var Optns = document.getElementById("q1_p2");
    console.log(Optns.parentElement.children);
    for (var i = 0; i < Optns.parentElement.children.length; i++) {
        var d = Optns.parentElement.children[i].innerHTML = Mainquestions[e].options[i];
        console.log(d);


    }

}




var count = 0
var score = 0
window.nextQuestion = function () {

    let nextBtn = document.getElementById("nextBTn")
    showQuestion(count)
    count++;
    renderQuestion()


    removeActiveClass()
    // renderQuestion();
    indexNum++;
    // console.log(indexNum);

}


window.putActiveClass = function (e) {
    removeActiveClass()
    e.classList.add("active")
}

window.removeActiveClass = function () {
    var active = document.getElementsByClassName("active")
    for (var i = 0; i < active.length; i++) {
        active[i].classList.remove("active")
    }
}





// ---------scrore counting--------------



var totalQuestion = document.getElementById("totalQuestions");
var currentQuestion = document.getElementById("currentQuestion");
var indexNum = 0;



window.renderQuestion = function () {

    totalQuestion.innerText = Mainquestions.length;
    currentQuestion.innerHTML = indexNum + 1;


}

renderQuestion();


// ---------scrore counting--------------
