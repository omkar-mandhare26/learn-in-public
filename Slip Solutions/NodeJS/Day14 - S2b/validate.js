function validateDOB(dob) {
    let today = new Date();
    let DOB = new Date(dob);
    let age = today.getFullYear() - DOB.getFullYear();
    if (today.getMonth() == DOB.getMonth() && DOB.getDate() < today.getDate())
        age--;
    return age < 18;
}


function isDateValid(dateStr) {
    return isNaN(new Date(dateStr));
}

function validateSalary(salary) {
    return salary <= 0;
}

function validate() {
    const dob = document.querySelector("#dob").value;
    const joiningDate = document.querySelector("#joiningDate").value;
    const salary = document.querySelector("#salary").value;

    if (validateDOB(dob))
        alert("Age Should be at least 18 years");

    if (isDateValid(joiningDate))
        alert("Enter Valid Joining Date");

    if (validateSalary(salary))
        alert("Salary Should be greater than 0");
}