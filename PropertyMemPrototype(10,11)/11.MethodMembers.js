// methods members: 

//call method


// Without Parameter
// let Customer1 = {
//     name: "Noah",
//     OrderItem : "Biriyani",
//     getCust1Order : function(){
//         console.log(`${this.name} Ordered ${this.OrderItem}`);
//     }
// }

// let Customer2 = {
//     name: "Olivia",
//     OrderItem: "Naan with Curry",
// }

// let Customer3 = {
//     name: "Adam",
//     OrderItem: "Veg Biriyani",
// }

// Customer1.getCust1Order.call(Customer2);  //using the Customer1's function to Customer2 function by using call method.
// Customer1.getCust1Order.call(Customer3);


//With Parameter
let Customer1 = {
    name: "Noah",
    OrderItem : "Biriyani",
    getCust1Order : function(ContNo, Address){
       console.log(`${this.name} Ordered ${this.OrderItem}`);
        console.log(ContNo);
        console.log(Address);
    }
}
// Customer1.getCust1Order(9189465400, "AP");

let Customer2 = {
    name: "Olivia",
    OrderItem: "Naan with Curry",
}

let Customer3 = {
    name: "Adam",
    OrderItem: "Veg Biriyani",
}

// Customer1.getCust1Order.call(Customer2, 9187545640, "India");  //using the Customer1's function to Customer2 function by using call method.
// Customer1.getCust1Order.call(Customer3);


// Apply method
//Customer1.getCust1Order.call(Customer2, [9808410280, "Pune"]);  // we will pass the arguments in array format

// Bind method
// Bind method will return the new object, we should assign it to a variable.
let details = Customer1.getCust1Order.bind(Customer2, 9187545640, "India"); // we will assign this to a variable, then print through that variable.
details(); //it returns the method so, we should mention method signature.

// or we can call this way as well[using method signature]

//Customer1.getCust1Order.bind(Customer2, 9187545640, "India")();