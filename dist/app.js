"use strict";
// Spread Operator เป็นรูปแบบการกระจายสมิชิกใน array ออกมาใช้งานโดนเติมเครื่องหมาย ... ด้านหน้าตัวแปร array
Object.defineProperty(exports, "__esModule", { value: true });
const section = ["บัญชี", "การเงิน"];
const departments = ["programmer", "marketing", "graphics"];
const fruits = ["apple", "banana", "coconut"];
const newAll = [...section, ...departments];
newAll.forEach((element) => {
    console.log(element);
});
const displayAll = newAll.map(element => {
    return element;
});
displayAll.push(...fruits); // ในการ push ก็ต้องใช้เป็น spread operator
function displayForeach(displayAll) {
    displayAll.forEach(element => {
        console.log(element);
    });
}
displayForeach(displayAll);
console.log(displayAll);
//# sourceMappingURL=app.js.map