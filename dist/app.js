"use strict";
// การสร้าง Tuple คล้ายกับ Array แต่ต่างกันตรงที่ Tuple สามารถเก็บกลุ่มข้อมูลที่มีชนิดข้อมูลต่างกันได้
// Array ขนาดมีความยืดหยุ่น (Dynamic Size) สมาชิกใน Array ต้องเหมือนกัน
// Tuple มีขนาดตายตัว (Fixed size) สมาชิกใน Tuple มีชนิดข้อมูลต่งกันได้โดยต้องระบบชนิดข้อมูลกำกับ
Object.defineProperty(exports, "__esModule", { value: true });
const point = [10, 20, "Tjay"];
console.log(point);
point[0] = 100;
point[1] = 200;
point.forEach(element => {
    console.log(element);
});
console.log(point[0]);
//----------------------------------------------------------------------------------------------------------------------------------------------
const goodStatus = [200, "ok"];
console.log(goodStatus);
// Tuple Label คือ การกำหนดชื่อกำกับภายในชนิดข้อมูลที่ทำงานอยู่ใน Tuple-------------------------------------------------------------------------
// const point:[x:number, y:number] = [5,10];
// const good:[code:number,staus:string] = [200,"OK"];
const score = [10, 20];
const badStatus = [200, "ok"];
const notFound = [404, "notFound"];
const badRequest = [400, "คำขอไม่ถูกต้อง"];
const statusCode = [200, "OK"];
console.log(statusCode);
//# sourceMappingURL=app.js.map