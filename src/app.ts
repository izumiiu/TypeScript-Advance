// void คือ function ที่ไม่มีการ return ค่าอะไร || ไม่จำเป็นต้องใส่ leyword void ก็ได้
function sayHi():void{
    console.log("Hello TypeScript");
}
sayHi();

// function ที่มีการรับค่า (parameter)

function total(name:string, age:number):void{
    console.log(`Your name is ${name} and your age is: ${age}`);
}
total("Peerawat", 18);

// function ที่มีการส่งค่า return -------------------------

function getDiscount():number{
    return 500;
}

function getAddress():string{
    return "Phitsanulok";
}

console.log(`my number is ${getDiscount()} and i live in ${getAddress()}`)

// function ที่มีการรัลและส่งค่า --------------------------------------

function checkNumber(num:number):string{
    if(num % 2 === 0){
        return "Even";
    }
    else{
        return "Odd";
    }
}

console.log(checkNumber(23));

// Arrow Function -----------------------------------------------------

const total1 = (num1:number, num2:number):number => {
    return num1 + num2;
}

console.log(total1(10, 5));
