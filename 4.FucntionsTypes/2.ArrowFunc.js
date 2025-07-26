//Arrow Function

let ArrowFunc = ()=>{
    console.log("Arrow Function");
}

// ArrowFunc();


//Passing Parameters

let ShowDetails = (Name, Age, MobileNum, EmailId) =>{
    console.log(Name);
    console.log(Age);
    console.log(MobileNum);
    console.log(EmailId);
}
//ShowDetails("Divya",25,"+918309456975","divya@gmail.com" );


//Func with return

let GetDetails = (Name, Age, Gender, Loc) =>{
    return `Details - ${Name}, ${Age}, ${Gender}, ${Loc}`;
}

let details = GetDetails("Divya",25, "Female", "AP");

console.log(details);


//Anonymous func to arror func
function sayHello(callback) {
    callback();
}

var sayHello = (a, b) => {
    console.log("Say Hello");
    console.log(a);
    console.log(b);
}

sayHello(10,20);


//Predefined Func
//SetTimeOut

setTimeout(()=>{
    console.log("Pass this mgs after 3 secs");
}, 3000);