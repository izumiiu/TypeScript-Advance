// Rest Parameter  = ใช้ในการส่งค่า Parameter(Array) เข้าไปทำงานใน function โดยไม่จำกัดจำนวนโดยใช้เครื่องหมาย ...


// function total (...numbers:number[]){}

// const total = (...numbers:number[]) => {
//     const totalSum = numbers.reduce((accumulator, element) => {
//         return accumulator + element;
//     }, 0);
//     return totalSum;
// }

const total = (...numbers:number[]) => {
    return numbers.reduce((accumulator, element) => {
        return accumulator + element;
    }, 0);
}
console.log(total(100,200,300,400,500));