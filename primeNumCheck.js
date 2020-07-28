


function isPrime(n){
    
for (var i= 2; i<n; i++){
    if (n % i == 0){
        return n +' is not a Prime Number'
    }
    else{
        return n + ' is a Prime Number'
    }
}
}
var result = isPrime(17)
console.log(result)