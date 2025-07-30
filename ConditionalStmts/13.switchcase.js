// Conditional Statements
// swtich...case

// Syntax:
// switch(expression)
//{
//     case value1:
//     {
//         //------------------;
//         break;
//     }
//     case value2:
//     {
//         //------------------;
//         break;
//     }
//     defult:
//     {
//         //------------------;
//         break;
//     }
// }


let day = 10;
switch(day)
{
    case 1: {
        console.log("Day 1 is Monday");
        break;
    }
    case 2: {
        console.log("Day 2 is Tuesday");
        break;
    }
    case 3: {
        console.log("Day 3 is Wednesday");
        break;
    }
    case 4: {
        console.log("Day 4 is Thursday");
        break;
    }
    case 5: {
        console.log("Day 5 is Friday");
        break;
    }
    case 6: {
        console.log("Day 6 is Saturday");
        break;
    }
    case 7: {
        console.log("Day 7 is Sunday");
        break;
    }
    default: {
        console.log("❌ Invalid Input. Please Enter a Valid Input[1-7]");
        break;
    }
}

