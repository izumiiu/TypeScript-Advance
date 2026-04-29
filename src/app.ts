
// Type Aliases = เป็นการกำหนดโครงสร้าง
// let ชื่อตัวแปร : ชื่อTypeAliases = {property:value,property:value}
// Optional Properties = คือการระบุว่า properties ที่ทำงานอยู่ใน Type Aliases นั้นสามารถกำหนดค่าได้หรือไม่กำหนดค่าก็ได้โดยใช้เครื่องหมาย ?
// โครงสร้างคำสั่ง type ชื่อTypeAliases = {property?:type,}


type Employee = {
    id:number,
    name:string,
    salary:number,
    phone?:string
}
let emp1:Employee = {id: 1,name: "Peerawat",salary: 500000,phone: "065-414-9927"}
let emp2:Employee = {id:2,name: "Thanakorn",salary:300000,phone: "090-990-9990"}
let emp3:Employee = {id:3,name: "Tata",salary: 200000,}
console.log(emp1);
console.log(emp2);
console.log(emp3);

// Type Aliases (Readonly Modifier)
// โครงสร้าง เติมคำว่า readonly หน้า property ของ TypeAliases

type People = {
    readonly name:string,
    readonly age:number,
    contact:string
}

let person1:People = {
    name: "Tjay",
    age:18,
    contact:"jprwtt"
}

person1.name = "zac";  // ถ้ามีการเปลียนค่าของ readonly properties ระบบจะแจ้ง error ทันที

function displayInfo(info:{name:string, age:number, contact:string}){
    console.log(info);
    console.log(info.name);
    console.log(info.age);
    console.log(info.contact);
}

displayInfo(person1);
