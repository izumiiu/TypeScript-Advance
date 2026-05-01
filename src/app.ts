// การสร้าง Tuple คล้ายกับ Array แต่ต่างกันตรงที่ Tuple สามารถเก็บกลุ่มข้อมูลที่มีชนิดข้อมูลต่างกันได้
// Array ขนาดมีความยืดหยุ่น (Dynamic Size) สมาชิกใน Array ต้องเหมือนกัน
// Tuple มีขนาดตายตัว (Fixed size) สมาชิกใน Tuple มีชนิดข้อมูลต่งกันได้โดยต้องระบบชนิดข้อมูลกำกับ


const point:[number, number, string] = [10, 20, "Tjay"];

console.log(point);

point[0] = 100;
point[1] = 200;
point.forEach(element => {
    console.log(element);
});
console.log(point[0]);

//----------------------------------------------------------------------------------------------------------------------------------------------
const goodStatus:[number, string] = [200, "ok"];
console.log(goodStatus);


// Tuple Label คือ การกำหนดชื่อกำกับภายในชนิดข้อมูลที่ทำงานอยู่ใน Tuple-------------------------------------------------------------------------
// const point:[x:number, y:number] = [5,10];
// const good:[code:number,staus:string] = [200,"OK"];

const score:[x:number,y:number] = [10,20];
const badStatus:[code:number, status:string] = [200, "ok"];
const notFound:[code:number,status:string] = [404, "notFound"];
const badRequest:[code:number, status:string] = [400, "คำขอไม่ถูกต้อง"]


// สร้าง Type แบบ Tuple--------------------------------------------------------------------------------------------
type HttpStatusCode = [number,string];


const statusCode:HttpStatusCode = [200,"OK"];
console.log(statusCode);