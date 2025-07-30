// Property members
// Predefined or built-in members

// Property returns or gives a value and doesnot require a method signature.
// Method returns or performs a task or action and requires a method signature.

// normal function
function simplefunction(name)
{
    console.log(name);
}

simplefunction.name; // gives the name of the function -- simplefunction which is the name of the function.
simplefunction.length; // gives the parameter length, which is 1 [name]


//Prototype
// It added a new member(function) to a function
// to call this new member, through object we call. [using new keyword]



// 1. getCarInfo is the method of the Car object.
// 2. this inside the getCarInfo method refers to the Car object itself.
function Car(brandName, color) {
    // this.brand = "Toyota";
    // this.Color = "Blue";
    this.brand = brandName;
    this.Color = color;
    //console.log("Car has started");
    console.log("Car this refers to:",this);
}

//Adding new member(function) to a function

Car.prototype.getCarInfo = function(){  //Anonymous func
    // this.brand = "BMW";
    // this.color = "White";
    console.log("getCarInfo this refers to:",this);  // can access Car members here
    console.log(`Car name is ${this.brand } and color is ${this.Color}`);
}

//calling the prototype by using object(new) or directly also.

//Car()  //normal calling

//new Car().getCarInfo(); //direct calling the protype.

// or
 

//constructor function
let Toyoto = new Car("Toyota", "White");   //car is local variable, and Car is the function
Toyoto.getCarInfo(); // car is local variable

let Honda = new Car("Honda", "Red");
Honda.getCarInfo();

// adding new prototype


Car.prototype.getCustInfo = function(custName, phnno){
    this.name = custName;
    this.numb = phnno;
    console.log(`Customer name: ${this.name} and Number is: ${this.numb}`);
}

let custdetails = new Car();
custdetails.getCustInfo("Finn", 9876543210);
console.log(custdetails);





