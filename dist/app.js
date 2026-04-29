"use strict";
// Destructuring(การสลายโครงสร้าง) = การกำหนดค่าที่อยู่ภายใน Array หรือ Object ไห้กับตัวแปร
// โดยใช้วิธีการจับคู่ตัวแปรนั้นกับค่าใน Array หรือ Object แทน
// const colors = ["ขาว", "แดง"]
// const a = colors[0] // a = ขาว
// const b = colors[1] // b = แดง
Object.defineProperty(exports, "__esModule", { value: true });
const colors = ["red", "green", "blue"];
const [red, green, blue] = colors;
console.log(red);
console.log(green);
console.log(blue);
// let a:number = 1;
// let b:number = 2;
// [a,b] = [b,a];
// console.log(a);
// console.log(b);
// Object Destructuring ------------------------------------------------------------------------------
const person = {
    name: "Tjay",
    age: 18,
    address: "Phitsanulok"
};
// ส่วนของ Object Destructuring จะใช้เป็น วงเล็บปีกกา {}
const { name, age, address } = person;
console.log(name);
console.log(age);
console.log(address);
//# sourceMappingURL=app.js.map