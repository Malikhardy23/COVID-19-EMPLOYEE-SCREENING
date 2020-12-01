// VARIABLES // 

const feedbackMessage = document.getElementById("feedbackMessage");
const employeeName = document.getElementById("employeeName");
const employeeCode = document.getElementById("employeeCode");
const departmemtOption = document.getElementById("departmentOption");
const questionsContainer = document.getElementById("questionsContainer");
const questions = document.getElementsByClassName('question')
let yesBtn = document.getElementById("yesBtn");
let noBtn = document.getElementById("noBtn");
const btnContainer = document.getElementById("buttonContainer");
const btn = document.querySelectorAll('button');

console.log(questions);
console.log(questionsContainer);
console.log(yesBtn.value);
console.log(noBtn.value);
console.log(btn);




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



    questionsContainer.addEventListener('click', (e) => {
        for(let i = 0; i < btn.length; i++){

            if(e.target === yesBtn){
                yesBtn.style.backgroundColor = "yellow";
            } else {
                noBtn.style.backgroundColor = "red";
            } 
        }
    }) 

    /* for (var i = 0; i < btn.length; i++) {
        btn[i].addEventListener("click", function() {
        var current = document.getElementsByClassName("active");
        current[0].className = current[0].className.replace(" active", "");
        this.className += " active";
        });
      } */


