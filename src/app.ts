// Spread Operator เป็นรูปแบบการกระจายสมิชิกใน array ออกมาใช้งานโดนเติมเครื่องหมาย ... ด้านหน้าตัวแปร array

const section: string[] = ["บัญชี", "การเงิน"];
const departments: string[] = ["programmer", "marketing", "graphics"];
const fruits: string[] = ["apple", "banana", "coconut"];
const newAll: string[] = [...section, ...departments];


newAll.forEach((element) => {
  console.log(element);
});

const displayAll = newAll.map(element => {
    return element;
});

displayAll.push(...fruits); // ในการ push ก็ต้องใช้เป็น spread operator

function displayForeach(displayAll:string[]):void{
    displayAll.forEach(element => {
        console.log(element);
    });
}  

displayForeach(displayAll);
console.log(displayAll);