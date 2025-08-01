// Comparison operator

//Executes the block based on the condition 


//in condition how to use operators
/*  comparison operator
     (== , != ,  > , >=, < , <= , ===) 
     Prints  weather true or false.
*/


console.log(5 == 5);  //true
console.log( 1  == 5);  //false
console.log(2 > 5); //false
console.log(2 >= 5) ; //false
console.log(5 < 10) ; //true
console.log(8 <=  10); //true
// ===2


// Type coercison 
//conversion of one type to another type 

console.log( 1 == "1");  //js will convert the string 1 ["1"] to number and then compare the value. // returns true.
console.log(2 =="2"); //returns true.

// === --> it will check the value and the datatype as well.
console.log( 1 === "1"); // returns false.
console.log("Adam" === "Adam");  //returns true.
console.log("Adam" === 12); //returns false


// using comparison operator, will creat if condition [conditional statement]
let student_marks = 55;
if(student_marks>65)
{
     console.log("%c ✅ 🎉  Student passed the exam", "color: green");
}
else (student_marks<65)
{
     console.log("%c ❌ 😡 Student has not failed the exam", "color: red");
}

