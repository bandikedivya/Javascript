
// Function with inputs
//Function with return and non-return

function showDetails(Name, Age, Dob) {
 console.log("Name:"  +Name);
 console.log("Age:"  +Age);
 console.log("DOB:"  +Dob);
}

//showDetails("Divya", 25, "30-01-2000");


//Optional Parameter

function showDetails(Name, Age, Dob) {
 console.log("Name:"  +Name);
 console.log("Age:"  +Age);
 Dob = Dob || "No Data Available";  //This is the way to handle the optional parameter.
 console.log("DOB:"  +Dob);
 

}

//showDetails("Divya", 25); //not passing DOb as argument.


//Default Parameter
function showDetails(Name, Age, Dob = "Dob is Not Available") { 
 console.log("Name:"  +Name);
 console.log("Age:"  +Age);
 console.log("DOB:"  +Dob);
 

}

//showDetails("Divya", 25); //not passing DOb as argument.



//Rest Parameters


// All arguments are added in array format and will pass that array as parameter. 
//Syntax:  ... (three dots)with parameter name
function showDetails(...aditionalParams) {
     console.log(aditionalParams);
     console.log("Name:"  +aditionalParams[0]);
     console.log("Age:"  +aditionalParams[1]);
     console.log("DOB:"  +aditionalParams[2]);
}
//showDetails("Divya", 25, "30-01-2000");


function showDetails(Name, Age, ...addtionalParams) {
     console.log(addtionalParams);
     console.log("Name:"  +Name);
     console.log("Age:"  +Age);
     console.log("Gender:"  +addtionalParams[0])
     console.log("DOB:"  +addtionalParams[1]);
}
//showDetails("Divya", 25, "Female", "30-01-2000");



//Function with return

function StudFullName(firstName, secondName)
{
  let FullName = "";
  FullName = "FirstName: " + firstName + "  " +"SecondName: " +secondName;
  return FullName;
}
//console.log(StudFullName("Divya", "Bandike"));
let getFullName = StudFullName("Divya", "Bandike");
console.log(getFullName);


//Function with non-return 

function ShowFullName(firstName, secondName)
{
  let FullName = "";
  FullName = "FirstName: " + firstName + "  " +"SecondName: " +secondName;
}
//console.log(ShowFullName("Divya", "Bandike"));  //prints undefined as we r not returning anything
let getFullName1 = ShowFullName("Divya", "Bandike");  //prints undefined as we r not returning anything
console.log(getFullName1);