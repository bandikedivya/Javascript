//Function Types

//Anonymous Function [single use or temporary use]
//size of this function is less than the other[named] func, so it is easy to understand.

//Defining the Anonymous function  [this is variable function or function expression.]
var getName = function(){
    let MyName = "Divya Bandike";
    console.log(MyName);
}

// //calling the function
 getName();



// //Adding Parameters

var StudNames = function(StudName1, StudName2,StudName3)
{
    console.log(StudName1);
    console.log(StudName2);
    console.log(StudName3);
}

StudNames("Divya", "Sreeparna", "Shalini");


//IIFE Func

// (
//     function(){
//     console.log("Hello");
//     }
// )()


//IIFE Func with parameter

(
    function(Name){
    console.log(Name);
    }
)("Divya")


//Callback Func


//function alreadydefined functionname(parameter){
//parameter(); }  //passed parameter with method signature must
function sayHello(callbackfn){
    callbackfn();
}



//functionname(Anonymous function)  //It is defined in this way.
sayHello(function(){
    console.log("Hello");
});


//Passing parameters

//function alreadydefined functionname(parameter){
//parameter(); }  //passed parameter with method signature must
function sayHello(callbackfn){
    callbackfn(10,20); //adding agruments here

}



//functionname(Anonymous function)  //It is defined in this way.
sayHello(function(a,b){
    console.log("Hello");
    console.log(a);
    console.log(b);
});


//Predefined functions
//1.Settimeout()
//setTimeOut accepts two parameter - 1.function and 2. time in milliseconds.

setTimeout(function(){
    console.log("Print this message after 3 secs")
}, 3000);


//setInterval - prints for every mentioned time
setInterval(function(){

    console.log("Divya")
},2000);

