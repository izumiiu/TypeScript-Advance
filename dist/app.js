"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Array
// array แบบไม่กำหนดค่าเริ่มต้น
const users = ["tata", "poom", "pea"];
users.push("Tjay");
users.push("Boss");
console.log(users);
const ages = [18, 20, 25, 13, 16, 20];
// for(let i = 0; i < users.length; i++){
//     console.log(users[i]);
// }
users.forEach((element) => {
    console.log(element);
});
console.log(ages.filter(element => {
    return element >= 18;
}));
const employees = [];
employees.push({ name: "Tjay", salary: 300000, department: "senior engineer" });
employees.push({ name: "boss", salary: 300000, department: "Doctor" });
employees.push({ name: "poom", salary: 300000, department: "mechanical engineer" });
employees.push({ name: "pea", salary: 300000, department: "software engineer" });
employees.push({ name: "tata", salary: 300000, department: "Dark bussiness" });
for (let person in employees) {
    console.log(`${employees[person]?.name}`); //สัญลักษณ์ ?. คือ Optional Chaining 
}
employees.forEach(element => {
    // console.log(element);
    console.log(`${element.name} ${element.salary} ${element.department}`);
});
//# sourceMappingURL=app.js.map