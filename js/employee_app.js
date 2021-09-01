window.addEventListener('DOMContentLoaded', (event) => {
   const name = document.querySelector('#name');
   const textError = document.querySelector('.text-error');
   // if name input firld is empty then no issue put it empty
   name.addEventListener('input', function () {
       if (name.value.length == 0) {
           texterror.textContent = "";
           return;
       }
       // if name is not empty then 
       // we instantiated EmployeePayrollData class from employee_app.js file
       // .name will check the Regex pattern 
       // if name is not correct then the name object of EmployeePayrollData will 
       // throw the error 'Name is Incorrect !'
       try {
           (new EmployeePayrollData()).name = name.value;;
           textError.textContent = "";
       } catch (e) {
           textError.textContent = "1st Letter should be Capital and Name must contail at least 3 letters";

       }
   });

   const salary = document.querySelector('#salary');
   const output = document.querySelector('.salary-output');
   output.textContent = salary.value;
   salary.addEventListener('input', function() {
   output.textContent = salary.value;
   })
});
