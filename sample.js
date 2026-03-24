/*
syntax:
vartype variableName = value;

types:
1. var
2. let
3. const

var:
1. global scope/functional scope
2. re-declaration and re-assignment both are possible
3. var can be hoisted

let:
1. block scoped variable
2. re-declaration is not possible but re-assignment is possible
3. let can be hoisted but not intialized with undefined

const:

1. block scoped variable
2. re-declaration and re-assignment both are not possible
3. const can be hoisted but not intialized with undefined

*/



var a = 10; 
console.log(a);//10
var a = 30;
console.log(a);//30
{
    console.log(a);//30
}
if(true){
  
    console.log(a);//30
}
function globalScope(){
     
    console.log(a);//20
     var a = 20;
    var b = 40;
    console.log(b);//40
}
globalScope()


console.log(a);

var age  = 98;
var age = 50;
age = 100;
console.log(age);

var name;
name = "ABC";
name = "XYZ";
console.log(name);

console.log(number);
var number = 1000;

var number;




console.log(number);
number = 1000;

console.log(number);



function globalScope(){
     
    console.log(a);//20
     var a = 20;
    var b = 40;
    console.log(b);//40
}
globalScope()

function globalScope(){
     var a;//undefined
     var b;//undefined
    console.log(a);//undefined
     var a = 20;
    var b = 40;
    console.log(b);//40
}
globalScope()


let array= [1,2,3,4,5]
console.log(array);

{
    let array1 = [9,8,7,6]
    console.log(array1);
}
    // console.log(array1);
    if(true){
        // console.log(num);
        let num = 200;
        
    }
//     console.log(num);
// if(true){
//     let num;
//         console.log(num);
//         num = 200;
        
//     }


    let c = 10;
        c = 20;
        console.log(c);

        let  = 300;
        d=340;


        const t= 100;
        //  t = 200;
         console.log(t);


         const r = 200;
        //  r = 400;
        console.log(r);