// Errors
// 1. Compile time errors
// 2. Run time errors


//cons name = "Adam"; //compile time error. const is the correct keyword to declare a variable.
// const name = "Adam";
//       name = "Laural"; //run time error, as u can declare const variable once;


// let studname;
// let nameUppercase = studname.toUpperCase();  //runtime error - cannot read properties if undefined.

// const Restname = "Empire Restuarant";
//     try
//     {
//       Restname = Restname.toUpperCase();
//     }
//     catch(ex)
//     {
//         console.log(ex.message);
//     }
//     finally 
//     {
//         console.log("Server Down");
//     }
    
 
// let Restname1;
//     try
//     {
//       Restname1 = Restname1.toUpperCase();
//     }
//     catch(ex)
//     {
//         console.log(ex.message);
//     }
//     finally 
//     {
//         console.log("Server Down");
//     }
    




    // custom error message using "throw"


    // try
    // {
    //   let Restname1 = "Empire Restuarant";
    //   Restname1 = Restname1.toUpperCase();
    //   throw new Error("Server is Down, Please try after some time.")
    //   console.log(`Welcome to the ${Restname1}`); // shows undefined.
    // }
    // catch(ex)
    // {
    //     console.log(ex.message);
    // }
    // finally 
    // {
    //     console.log("Server Down");
    // }



    
    // Here value is not assigned , so it goes to else block and prints throw message.
    // If we assign a value, it prints the if block code, and continues to the catch block. 
    try
    {
      let Restname1;
      if(Restname1){
          Restname1 = Restname1.toUpperCase();
          console.log(`Welcome to the ${Restname1}`); // shows undefined.
      }
      else {
          throw new Error("Server is Down, Please try after some time.")
      }
    }
    catch(ex)
    {
        console.log(ex.message);
    }
    finally 
    {
        console.log("Server Down");
    }
    

    
let transactions = ["CreditCard", "DebitCard", "Savings"];
console.log(`Number of transactions: ${transactions.length}`);