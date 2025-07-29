// Complex Data Types  
// Array, Object and function datatypes[Non-Primitive DT.]

/*
Complex data types in JavaScript are generally represented by objects, arrays, and functions.

Property :  A property is a value that belongs to a single value....
Method   :  A method is a function that performs a specific action and can access or manipulate the data. 
*/

//object is key-value pair which we can also example of complex data type

// Here Name, Age, books are the members of empdetails,  those are [member type] properties. 
// getbooksCount is also member which is the [member type] method of the empdetails.
var empdetails = {
    Name: "Laural",
    Age: 32,
    books: ["Gitanjali", "The Home and the World", "Gora"],
    getbooksCount: function()
    {
        // console.log("Total books are 3");
        // document.write("Total books are 3");
        return "Total books are 3";
    }
}

console.log(`Age: ${empdetails.Age}`);
//console.log(empdetails.getbooksCount());

var output = empdetails.getbooksCount();
console.log(output);

console.log(`Name: ${empdetails.Name}`);