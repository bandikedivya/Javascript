//Non-Primitive Datatypes

//1. Array DataType  [print - Through index]

let Name = ["Isabel","Conrad", "Jermiah"]
console.log(Name)

console.log(Name[0])  //Through index
console.log(Name[1])
console.log(Name[2])


let age = [20, 21, 25]
console.log(age);

console.log(age[0])
console.log(age[1])
console.log(age[2])


let PersonDetails = ["Isabel", 25, 2000, true]
console.log(PersonDetails)

console.log(PersonDetails[0])
console.log(PersonDetails[1])
console.log(PersonDetails[2])
console.log(PersonDetails[3])
console.log(PersonDetails[10])  // will show undefined as the index 10 is not avaliable in array.


//2. Object Datatype
// Key-Pair -- key should be unique [print - Through property & index]
let CustomerDetails = {
    "Name" : "Divya",
    "Age" : 25,
    "AadharNo" : 556220254562554
}
console.log(CustomerDetails);
console.log(CustomerDetails.Age);  //Through property
console.log(CustomerDetails.AadharNo);



let StudDetails = {
    "Name": "Marcus",
    "Age" : 25,
    "IsActive" : true
}

console.log(StudDetails.IsActive); //Through property
console.log(StudDetails["Name"]);  //Through index


let StudDetails1 = {
    Name: "Marcus",
    Age : 25,
    IsActive : true,
    Subjects : ["Javascript", "C#", "Angular"],
    Marks : {
        Javascrpit : 75,
        Csharp : 100 , 
        Angular : 90 
    }
}
console.log(StudDetails1);

console.log(StudDetails1.Marks.Csharp);

console.log(StudDetails1.Subjects[1]);



//Array of Objects


// [] {}

let car = [
    {
         carName : "Toyoto",
    LaunchDate : "1997-12-10"
    },
    {
         carName : "RangeRover",
    LaunchDate : "1999-12-10"
    },
    {
         carName : "RR",
    LaunchDate : "1980-12-10"
    },
    
]
   
console.log(car[0].LaunchDate);
console.log(car[1].carName);
console.log(car[2].carName)



//3. Functions

var bookName = function() {
    console.log("The Summer I Turned Pretty");
}

console.log(bookName);
console.dir(bookName);   //shows more details, dir is a method