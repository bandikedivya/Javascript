//var and let  , const keywords - variables

// For Global Block - use var keyword
// For Local Block  -  use let keyword

var globalVar = "green";
console.log("Global Block: ", globalVar);

console.log("%c      ", "background-color: green");


//Local Block - 1

{
   
    console.log("Local Block - 1: " +globalVar);
    let blueVar = "lightblue";
    console.log("Local Block - 1:", blueVar);
    //console.log("Local Block - 2", pinkVar);   //Gives Reference Error [run-time]


    console.log("%c      ", "background-color: green");
    console.log("%c      ", "background-color: lightblue");


}

//Local Block - 2

{
    console.log("Local Block - 2: " +globalVar);
    let pinkVar = "pink";
    console.log("Local Block - 2:", pinkVar);
    //console.log("Local Block - 2", blueVar);   //Gives Reference Error [run-time]

    console.log("%c      ", "background-color: green");
    console.log("%c      ", "background-color: pink");


}


console.log("Global Block: ", globalVar);
//console.log("Local Block - 1", blueVar);   //Gives Reference Error [run-time]
//console.log("Local Block - 2", pinkVar);   //Gives Reference Error [run-time]

//Example 2

var signalName = "Wi-fi";

{
    //Lets say Room1
    console.log("Signal :" , signalName); // Wi-fi

    let room1FanSpeed = "high";
    console.log("FanSpeed :" , room1FanSpeed); // high
    //console.log("FanSpeed :" , room2FanSpeed); // ReferenceError: room2FanSpeed is not defined
}

{
    //Lets say Room2
    console.log("Signal :" , signalName); // Wi-fi

    let room2FanSpeed = "slow";
    console.log("FanSpeed :" , room2FanSpeed); // slow

    //console.log("FanSpeed :" , room1FanSpeed); // ReferenceError: room1FanSpeed is not defined
}


console.log("Signal :" , signalName); // Wi-fi
//console.log("FanSpeed :" , room1FanSpeed); // ReferenceError: room1FanSpeed is not defined
//console.log("FanSpeed :" , room2FanSpeed); // ReferenceError: room2FanSpeed is not defined