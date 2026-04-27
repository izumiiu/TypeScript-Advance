// Excess Properties Check = การตรวจสอบ Peoperties ที่ส่งเข้ามาใน function

function showDetail(data:{name:string, age:number}){
    console.log(`ชื่อ = ${data.name} , อายุ = ${data.age}`);
}

// const person = {
//     name:"peerawat",
//     age:30,
//     address:"กรุงเทพ"
// }

showDetail({name:"peerawat",age:30,address:"กรุงเทพ"});