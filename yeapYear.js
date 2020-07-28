
// const year = 3660

// if(year % 4 == 0){
//     console.log(year,' is checkLeapyear.')
// }
// else{
//     console.log(year,' is not  checkLeapyear.')
// }

function checkLeapyear(year){
    if (year % 4 == 0 && year % 100 != 0){
        return true
    }
    else if(year % 400 == 0 && year % 100 == 0){
        return true
    }
    else{
        return false
    }
}
console.log(checkLeapyear(3660))
console.log(checkLeapyear(2016));
console.log(checkLeapyear(2000));
console.log(checkLeapyear(1700));
console.log(checkLeapyear(1800));
console.log(checkLeapyear(100));