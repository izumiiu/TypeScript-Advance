"use strict";
// Excess Properties Check = การตรวจสอบ Peoperties ที่ส่งเข้ามาใน function
Object.defineProperty(exports, "__esModule", { value: true });
function showDetail(data) {
    console.log(`ชื่อ = ${data.name} , อายุ = ${data.age}`);
}
// const person = {
//     name:"peerawat",
//     age:30,
//     address:"กรุงเทพ"
// }
showDetail({ name: "peerawat", age: 30, address: "กรุงเทพ" });
//# sourceMappingURL=app.js.map