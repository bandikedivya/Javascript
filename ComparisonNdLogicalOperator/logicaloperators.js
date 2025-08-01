// Logical operator


// Logical AND (&&)
let stud_name = "Divya"; 
let stud_age = 25;
console.log(stud_name == "Divya" && stud_age == 25); //true  && true  - true
console.log(stud_name == "Divya" && stud_age == 21); //true  && false - false
console.log(stud_name == "Kavya" && stud_age == 25); //false && true  - false
console.log(stud_name == "Kavya" && stud_age == 21); //false && false - false

if(stud_name == "divya" && stud_age == 25)
{
    console.log(" %c ✅🎉 Student exists in the List", "color:green");
}
else
{
    console.log("%c  ❌  Student does not exists in the List", "color:red");
}



// Logical OR (||)
console.log("-------------------Logical OR----------------------------")
let stud_name1 = "Divya"; 
let stud_age1 = 25;
console.log(stud_name == "Divya" || stud_age == 25); //true  || true  - true
console.log(stud_name == "Divya" || stud_age == 21); //true  || false - true
console.log(stud_name == "Kavya" || stud_age == 25); //false || true  - true
console.log(stud_name == "Kavya" || stud_age == 21); //false || false - false

//if(stud_name == "Divya" || stud_age == 25) // true -- prints if block.
//if(stud_name == "Divya" || stud_age == 21) // true -- prints if block.
//if(stud_name == "Kavya" || stud_age == 25) //true -- prints if block.
if(stud_name == "Kavya" || stud_age == 21) // false -- prints else block.
{
    console.log(" %c ✅ Student exists in the List", "color:green");
}
else
{
    console.log("%c  ❌ Student does not exists in the List", "color:red");
}
