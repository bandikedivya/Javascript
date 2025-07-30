// Conditional Statements
// if...else..if....else
// true or false  -- boolean type --> primitive datatypes

// if(condtion){

// }
// elseif(condition){

// }
// else{

// }

if(true)
{
    console.log("If condition is true");
}

if(true)
{
    console.log("I have gmail account");
}

let stud1 = false;
let stud2 = false;
let stud3 = false; 
if(stud1)
{
    console.log("%c  Stud1 has completed task succcessfully.", "color: green");
}
else if(stud2)
{
    console.log("%c  Stud2 has completed task succcessfully.", "color: green");
}
else if(stud3)
{
    console.log("%c  Stud3 has completed task succcessfully.", "color: green");
}
else
{
    console.log("%c  No students completed task!!!", "color: red");
}


let StudentList = {
    stud1: ["Adam", 25, "adam@gmail.com"],
    stud2: ["Laural", 22, "laural@gmail.com"]
}
// Ages 
if(StudentList.stud1[1] == StudentList.stud2[1])
{
    console.log("Both ages are not same");
}
else
{
    console.log("❌ Both ages are not same");
}
//Name lenght
if(StudentList.stud1[0].length == StudentList.stud2[0].length)
{
    console.log("Name length are same");
}
else
{
    console.log("❌ Name length are not same");
}
//mail
if(StudentList.stud1[2].length == StudentList.stud2[2].length)
{
    console.log("Emails are same");
}
else
{
    console.log("%c ❌ Emails are not same", "color: red");
}