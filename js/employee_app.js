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

//UC-3
//Defining save() method ..
   const save = () =>{
   try{
      // Values got from createEmployeePayroll() method will be stored in 
      //employeePayrollData
       let employeePayrollData = createEmployeePayroll();
   }
   catch(e){
       console.error("Something Wrong !!! Please check provided input Values ");
   }
}
   //Declaring method
   const createEmployeePayroll = () => {
   let employeePayrollData = new EmployeePayrollData();
   try {
       employeePayrollData.name = getInputValueById('#name');
   } catch (e) {
       setTextValue('.text-error', e);
       throw e;
   }
   // getSelectedValues('[name=profile]') here as there are multiple inputs 
   // provided for profile picture so it will take all as an array
   // and then getSelectedValues() method will get the selected profile pic 
   // then .pop will pop the selected value ..
   employeePayrollData.profilePic = getSelectedValues('[name=profile]').pop();
   employeePayrollData.gender = getSelectedValues('[name=gender]').pop();
   employeePayrollData.department = getSelectedValues('[name=department]');

   //getInputValueById('#salary') here using getInputValueById() method
   // as here no multiple thigs present
   //one perticular salary value will be selected .
   employeePayrollData.salary = getInputValueById('#salary');
   employeePayrollData._note = getInputValueById('#notes');
   let date = getInputValueById('#day')+" "+getInputValueById('#month')+" "+ getInputValueById('#year');
   employeePayrollData.date = Date.parse(date);
   alert(employeePayrollData.toString());
   return employeePayrollData;
}

   const getSelectedValues = (propertyValue => {
   let allItems = document.querySelectorAll(propertyValue);
   let selItems = [];
   allItems.forEach(item => {
       if(item.checked) selItems.push(item.value);
   });
   return selItems;
});

   const getInputValueById = (id) => {
      let value = document.querySelector(id).value;
      return value;
}

   const getInputElementValue = (id) => {
      let value = document.getElementById(id).value;
      return value;
}
//UC-4
function createAndUpdateStorage(employeePayrollData){
   let employeePayrollList = JSON.parse(localStorage.getItem("EmployeePayrollList"));
   if(employeePayrollList != undefined){
       employeePayrollList.push(employeePayrollData);
   }else{
       employeePayrollList = [employeePayrollData];
   }
   alert(employeePayrollList.toString());
   localStorage.setItem("EmployeePayrollList"), JSON.stringify(employeePayrollList)
}