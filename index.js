// VARIABLES // 
const feedbackMessage = document.getElementById("feedbackMessage");
const employeeName = document.getElementById("employeeName");
const employeeCode = document.getElementById("employeeCode");
const departmemtOption = document.getElementById("departmentOption");
const questionsContainer = document.getElementById("questionsContainer");
const questions = document.getElementsByClassName('question')
const btnContainer = document.getElementById("buttonContainer");
//const btn = document.querySelectorAll('button');

var questObj = {
    question1 : false,
    question2 : false,
    question3 : false,
    question4 : false 
};

let buttonContainer1 = document.getElementById("buttonContainer1");
let buttonContainer2 = document.getElementById("buttonContainer2");
let buttonContainer3 = document.getElementById("buttonContainer3");
let buttonContainer4 = document.getElementById("buttonContainer4");

const yesBtn1 = document.getElementById("yesBtn1");
const noBtn1 = document.getElementById("noBtn1");

const yesBtn2 = document.getElementById("yesBtn2");
const noBtn2 = document.getElementById("noBtn2");

const yesBtn3 = document.getElementById("yesBtn3");
const noBtn3 = document.getElementById("noBtn3");

const yesBtn4 = document.getElementById("yesBtn4");
const noBtn4 = document.getElementById("noBtn4");



console.log(questions);
console.log(questionsContainer);   

// FULL NAME FUNCTION //

    const employeeNameFunction = (e) => {
        if(e.target){
            console.log(e.target.value);
        }
    }
    
    const employeeNameCodeFunction = (e) => {
        if(e.target){
            console.log(e.target.value);
        }
    }
    
    const departmemtOptionFunction = (e) => {
        if(e.target){
            console.log(e.target.value);
        }
    }



    // EMPLOYEE SECTION EVENT LISTENERS //

    employeeName.addEventListener('input', employeeNameFunction);
    employeeCode.addEventListener('input', employeeNameCodeFunction);
    departmemtOption.addEventListener('change', departmemtOptionFunction);


    // EMPLOYEE QUESTIONS EVENT LISTENERS //
var buttonContainterArr = [buttonContainer1,buttonContainer2,buttonContainer3,buttonContainer4];
var btnYesArray = [yesBtn1,yesBtn2,yesBtn3,yesBtn4];
var btnNoArray = [noBtn1,noBtn2,noBtn3,noBtn4];
var buttonContainterArr = [buttonContainer1,buttonContainer2,buttonContainer3,buttonContainer4];
var questObjArray = [questObj.question1,questObj.question2,questObj.question3,questObj.question4];


 for(var i = 0;i < buttonContainterArr.length;i++){
    // anonymous function
    (function(i){
        buttonContainterArr[i].addEventListener('click', (e) => { 
            // clean up and clear values before click
           if(e.target.value === "YES" ){
                // value isn't changing, figure out why ???
                btnYesArray[i].style.backgroundColor = "yellow"; 
                btnNoArray[i].disabled = true;
                questObjArray[i] = true;
           }else{ 
               btnNoArray[i].style.backgroundColor = "red";  
               btnYesArray[i].disabled = true;  
               questObjArray[i] = false;     
           } 

       console.log(questObj);
       }); 

    }(i));// holds the increment value so it is inscync with browser
       
    } 


