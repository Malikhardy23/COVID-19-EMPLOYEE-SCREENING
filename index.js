// VARIABLES // 

const feedbackMessage = document.getElementById("feedbackMessage");
const employeeName = document.getElementById("employeeName");
const employeeCode = document.getElementById("employeeCode");
const departmemtOption = document.getElementById("departmentOption");
const questionsContainer = document.getElementById("questionsContainer");
const questions = document.getElementsByClassName('question')
const buttons = document.getElementsByTagName('button');
const yesBtn = document.getElementsByClassName('yesBtn');
const noBtn = document.getElementsByClassName('noBtn');

console.log(questions);
console.log(buttons);
console.log(questionsContainer);
console.log(yesBtn);
console.log(noBtn);


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
        if(e.target){
            if(e.target.textContent === 'NO'){
                e.target.style.color = "red";
                e.target.style.backgroundColor = "blue";
            }
            else if(e.target.textContent === "YES"){
                e.target.style.color = "red";
                e.target.style.backgroundColor = "tan";
            }
        }
    }) 



