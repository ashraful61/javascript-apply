
function inchToFeet(inch){
     var feet = inch/12;
     return feet
}
var result = inchToFeet(156);
console.log(result)//13
var result = inchToFeet(288);
console.log(result)//24
var result = inchToFeet(300);
console.log(result)//25

var senario = [156, 288, 300]

for(i=0; i<senario.length; i++){
    
    console.log(inchToFeet(senario[i]))
}





