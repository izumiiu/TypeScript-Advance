"use strict";
// Function Overloading
Object.defineProperty(exports, "__esModule", { value: true });
function sayHi(name) {
    if (!name) {
        return `Hello TypeScript`;
    }
    if (typeof name == "string") {
        return `Hello ${name}`;
    }
    else {
        throw new Error("ชนิดข้อมูลไม่ถูกต้อง");
    }
}
console.log(sayHi());
console.log(sayHi("Tjay"));
// function total(a:string,b:string):string
function total(a, b) {
    if (typeof a == "number" && typeof b == "number") {
        return a + b;
    }
    if (typeof a == "string" && typeof b == "string") {
        return parseInt(a) + parseInt(b);
    }
    throw new Error("ชนิดข้อมูลไม่ถูกต้อง");
}
console.log(total(100, 200));
console.log(total("100", "200"));
//# sourceMappingURL=app.js.map