// VARIABLES // 

const feedbackMessage = document.getElementById("feedbackMessage");
const employeeName = document.getElementById("employeeName");
const employeeCode = document.getElementById("employeeCode");
const departmemtOption = document.getElementById("departmentOption");
const questionsContainer = document.getElementById("questionsContainer");
const questions = document.getElementsByClassName('question')
// const yesBtn = document.getElementsByClassName('yesBtn');
// const noBtn = document.getElementsByClassName('noBtn');
const btnContainer = document.getElementById("buttonContainer");
const btn = document.getElementsByTagName('button');

console.log(questions);
console.log(questionsContainer);
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

    /* questionsContainer.addEventListener('click', (e) => {
        if(btn){
            btn.style.backgroundColor = "yellow";
        }
            else {
            btn.style.backgroundColor = "red";
        }
    
    }) */


    for (var i = 0; i < btn.length; i++) {
        btn[i].addEventListener("click", function() {
        var current = document.getElementsByClassName("active");
        current[0].className = current[0].className.replace(" active", "");
        this.className += " active";
        });
      }


