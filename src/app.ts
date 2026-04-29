// Function Overloading

function sayHi():string
function sayHi(name:string):string
function sayHi(name?:unknown):unknown{
    if(!name){
        return `Hello TypeScript`;
    }
    if(typeof name == "string"){
        return `Hello ${name}`;
    }
    else{
        throw new Error("ชนิดข้อมูลไม่ถูกต้อง");
    }
    
}

console.log(sayHi());
console.log(sayHi("Tjay"));
// console.log(sayHi(12));

// Function สำหรับรับ parameter 2 จำนวน

function total(a:number,b:number):number
function total(a:string,b:string):number
// function total(a:string,b:string):string
function total(a:unknown,b:unknown){
    if(typeof a == "number" && typeof b == "number"){
        return a+b;
    }
    if(typeof a == "string" && typeof b == "string"){
        return parseInt(a) + parseInt(b);
    }
    throw new Error("ชนิดข้อมูลไม่ถูกต้อง");
}

console.log(total(100,200));
console.log(total("100","200"));