


// for(i=1; i<=10; i++){
    
//      var factorial = 1;
//     factorial = factorial*i
//     console.log(i,factorial)
// }
// console.log(i-1 + '! :'+ factorial)

function factorial(num){
    var factorial = 1;
for(i=1; i<=num; i++){
   factorial = factorial*i

}
return factorial

}
console.log(factorial(5))



//recursive way to find factorial number

function factorial(num){
    var factorial = 1;
for(i=num; i>=1; i--){
   factorial = factorial*i

}
return factorial

}
console.log(factorial(4))

function findFactorial(n){
    if(n == 0){
        return 1
    }
    else{
        return n*findFactorial(n-1) 
    }
}
console.log(findFactorial(3))