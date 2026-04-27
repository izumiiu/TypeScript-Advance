"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Object แบบไม่ได้มีการระบุชนิดข้อมูล----------------------------------
const person1 = {
    name: "Peerawat",
    age: 18
};
// Object แบบระบุชนิดข้อมูล------------------------------------------
const person2 = {
    name: "Tjay",
    age: 25
};
// const position:{lat:any, long:any} = {lat:30, long:50}
// function รับค่า object-----------------------------------------------------------------------
function showDetail(data) {
    console.log(`Your name is ${data.name} and your age is ${data.age}`);
}
// แบบ Arrow function**************************
const showDisplay = (data) => {
    console.log(`Your name is ${data.name} and your age is ${data.age}`);
};
showDetail(person1);
showDisplay(person2);
// function ส่งค่า object-------------------------------------------------------------------------
// const ชื่อฟังชั่น = () : object => { return object }
const position = { lat: 10, long: 20 };
const randomAddress = () => {
    return {
        address1: Math.random(),
        address2: Math.random()
    };
};
function randomPosition() {
    return {
        lat: Math.random(),
        long: Math.random()
    };
}
console.log(randomAddress());
//# sourceMappingURL=app.js.map