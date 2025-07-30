//this -- keyword usage.

// global context -- window

var names = ["Adam","Ruth","Sophia"];  //these will become the members of window.

var ages = [25,23,20];    //these will become the members of window.



// console.log(this);    // window

// console.log(this.names);
// console.log(this.ages);










// object context  - "this":
// const persondetails = {
//     name: "Divya",
//     greet: function(){
//         console.log("this from the object: ", this);
//     }
// }
// // console.log(persondetails.name);
// persondetails.greet();


var empdetails = {
    Name: "Laural",
    Age: 32,
    books: ["Gitanjali", "The Home and the World", "Gora"],
    getbooksCount: function()
    {
        console.log("this from the object: ", this.Age);
        console.log("this from the object: ", this.books);

        console.log(this.names); //when you cal the global members in block or in the object, it give output: undefined.
        console.log(this.ages); //when you cal the global members in block or in the object, it give output: undefined.

    }
}
//empdetails.getbooksCount();




//-------------Constructor function ---this
// using new kwyword before calling the function, then that is constructor function.


function emp1details(){
    this.empname= "Laural",
    this.empage= 32,
    this.empbook = ["Gitanjali", "The Home and the World", "Gora"]
    console.log(this);
    // this.getbooksCount= function()
    // {
    //     console.log("this from the object: ", this.Age);
    //     console.log("this from the object: ", this.books);

    //     // console.log(this.names); //when you cal the global members in block or in the object, it give output: undefined.
    //     // console.log(this.ages); //when you cal the global members in block or in the object, it give output: undefined.

    // }
     
};

//new emp1details(); //adding new keyword before calling the function, is constructor func.
//emp1details();  //if we call without using new keyword, then these will become global context, will be the members of window.

let employeedetails = new emp1details();  //using new keyword, it will create the new object.
                        // assigning all to one variable
let employeebook = employeedetails.empbook;                            //through the above variable[employeedetails] calling the members of the constructor fucntion.
let getname = employeedetails.empname;                          //through the above variable[employeedetails] calling the members of the constructor fucntion.
let getAge = employeedetails.empage;                      //through the above variable[employeedetails] calling the members of the constructor fucntion.
//let getbookcount = employeedetails.getbooksCount();             //through the above variable[employeedetails] calling the members of the constructor fucntion.


console.log(employeebook); //printing getbooks to get books details.
console.log(getname); 
console.log(getAge);
//console.log(getbookcount);




// ---------------  Arrow Function -- this
// by default it return or gives undefined or inherit this from parent scope.
// prints parent scope(global or window object)

//  Arrow func syntax
// () =>{

// }

var empdetails = {
    Name: "Laural",
    age: 32,
    books: ["Gitanjali", "The Home and the World", "Gora"],
    getbooksCount: () =>
    {
        console.log("this from the arrow func: ", this);  //gives window object
        console.log("this from the arrow func: ", this.books);
    },
    getauthorsCount: function()
    {
        console.log("this from the func: ", this);  //gives object
        console.log("this from the func: ", this.books);
    }
}

empdetails.getbooksCount();
empdetails.getauthorsCount();

