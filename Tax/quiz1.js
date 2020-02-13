function CalculateTax()
 {  
     let tax;

    let inputValue = document.getElementById("Salary-Input-Box").value;  //getting the input 
    let errormessage;
    errormessage = document.getElementById("error-message");  // getting of the error message base on the  input 
    errormessage.innerHTML = "";
    let taxowed;
    taxowed=document.getElementById("tax");
    let earnings;
    earnings = document.getElementById("earnings");
    let rate;
    rate = document.getElementById("rate");
    
  
    
     
    
      if(inputValue < 48535 ){
        
           tax=inputValue * .15
           taxowed.innerHTML =tax;
           earnings.innerHTML =inputValue - tax;
           rate.innerHTML ="15%"
          

      }
      else if(iputValue > 48535 && inputValue < 97069){
      
              tax = inputValue * .15 + (inputValue - 48535) * .205
              taxowed.innerHTML =tax;
              earnings.innerHTML =inputValue - tax;
              rate.innerHTML ="35.5%"

      }   
      else if(InputValue > 97069 && InputValue < 150473){
   
               tax = InputValue * .15 + (InputValue - 48535)* .26
               taxowed.innerHTML =tax;
               earnings.innerHTML =InputValue - tax;
               rate.innerHTML ="41%"
      }
      else if(InputValue > 150473 && InputValue < 214368){
       
               tax=InputValue * .15 + (InputValue - 48535) * .29
               taxowed.innerHTML =tax;
               earnings.innerHTML =InputValue - tax;
               rate.innerHTML ="44%"
      }
     else {
   
            tax=InputValue * .15 + (InputValue - 48535)* .33
            taxowed.innerHTML =tax;
           earnings.innerHTML =InputValue - tax;
           rate.innerHTML ="48%"
     }
  
    
    
  }
  
 const button = document.getElementById("Submit")
 button.addEventListener("click",function(){
     CalculateTax();
 })

 const button1 = document.getElementById("Clear")
 button1.addEventListener("click",function(){
     document.getElementById("tax").innerHTML= "";
     document.getElementById("earnings").innerHTML="";
     document.getElementById("rate").innerHTML="";
     document.getElementById("Salary-Input-Box").value="";

 })
