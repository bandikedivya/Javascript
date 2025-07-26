//Funtions

//Block1

function StuNameRoll(){
let RollNo = 187810512;
console.log(RollNo);

let StudName = "Adam";
console.log(StudName);
}

StuNameRoll();  //calling the function

//Block2


function StuDetails(){
    let StudNames = ["Adam","Susanah","Jermiah","Conrad"];  //Array  -String DataType
    console.log(StudNames);

    let YearofBorn = [1980,1985,1999,1997];   //Array - Number DataType
    console.log(YearofBorn);
}

StuDetails();        //calling the function



//Adding Styles to a message

console.log("Javascript");

console.log("%cJavascript",  "color:Orange");   // "%c" is a directive used to add style for the text
console.log("%cJavascript", "background-color:Orange");  //Accepts only one style.


//console.log("%c      ", "background-color:Red");


function redcolor()
{
   console.log("%c        ", "background-color:Red");
}
redcolor();


//Function within function

function blackredcolor()
{
    console.log("%c        ", "background-color:black")
    redcolor();  //reusing redcolor() function
}
blackredcolor();


function multicolor()
{
    console.log("%c        ", "background-color: yellow");
    blackredcolor();  //reusing blackcolor() function
}
multicolor();
