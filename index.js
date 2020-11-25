// VARIABLES // 

const feedbackMessage = document.getElementById("feedbackMessage");
const employeeName = document.getElementById("employeeName");
const employeeCode = document.getElementById("employeeCode");
const departmemtOption = document.getElementById("departmentOption");

// FULL NAME FUNCTION //

// departmemtOption.disabled = true;


    const employeeNameFunction = (e) => {
        if(e.target){
            console.log(e.target.value);
        }
    }
    
    const employeeNameCodeFunction = (e) => {
        if(e.target){
            console.log(e.target.value);
            departmemtOption.disasbled = false;
        }
    }
    
    const departmemtOptionFunction = (e) => {
        if(e.target){
            console.log(e.target.value);
        }
    }

    employeeName.addEventListener('input', employeeNameFunction);
    employeeCode.addEventListener('input', employeeNameCodeFunction);
    departmemtOption.addEventListener('change', departmemtOptionFunction);


