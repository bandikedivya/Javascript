{
    // Scope1  -  Block 1
    let fruit1 = "apple"; 
    {
        //scope2 - Block 2
        let fruit2 = "Mango";
         {
            // scope3 - Block 3
            let fruit3 = "Kiwi";
            console.log("Scope3:" , fruit3); // Kiwi
            console.log("Scope3:" , fruit2); // Mango
            console.log("Scope3:" , fruit1); // apple
         }

        console.log("Scope2:" , fruit2); // Mango
        console.log("Scope2:" , fruit1); //apple
    }

    console.log("Scope1:" , fruit1); // apple
    //console.log("Scope1:" , fruit2); // ReferenceError: fruit2 is not defined
    //console.log("Scope1:" , fruit3); // ReferenceError: fruit3 is not defined
}
