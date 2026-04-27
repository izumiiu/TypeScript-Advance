
// Default parameter
function showEmployee(name:string, age:number, address:string = "Phitsanulok"){
    console.log(`name = ${name}, age = ${age}, address = ${address}`);
}

showEmployee("Tj", 18, "Phitsanulok");
showEmployee("boss", 19, "Phitsanulok");
showEmployee("Tata", 19, "Bangkok");
showEmployee("Poom", 20, "Bangkok");
showEmployee("pea", 20);