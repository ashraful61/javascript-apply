
// var fibo =[0, 1]

// for(var i=2; i<=10; i++){
//     fibo[i] = fibo[i-1] + fibo[i-2]

// }
// console.log(fibo)

// // fibonacci using function


// function findFibonacchi(num){
//     var fibo =[0, 1]

// for(var i=2; i<=num; i++){
//     fibo[i] = fibo[i-1] + fibo[i-2]

// }
// return fibo
// }
// console.log(findFibonacchi(9))

//Recursive way

// function fibonacciRecursive(num){
//     if (num == 0){
//         return 0;
//     }
//      if (num == 1){
//          return 1
//      }
//      else{
//          return fibonacciRecursive(num-1) + fibonacciRecursive(num-2)
//      }
//     }

//     console.log(fibonacciRecursive(10))//55 add fibonacci element add.

    //return fibonacchi array

    function fibonacciRecursive(num){    
        
        if (num == 0){
            return [0];
        }
       else if (num == 1){
             return [0, 1];
         }
         else{
            //  find array with  nth element
            var fibo = fibonacciRecursive(num-1)
            var nextElement = fibo[num-1] + fibo[num-2]
            fibo.push(nextElement)
            return fibo;
             
         }
     }
    
        console.log(fibonacciRecursive(10))