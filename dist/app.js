"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Default parameter
function showEmployee(name, age, address = "Phitsanulok") {
    console.log(`name = ${name}, age = ${age}, address = ${address}`);
}
showEmployee("Tj", 18, "Phitsanulok");
showEmployee("boss", 19, "Phitsanulok");
showEmployee("Tata", 19, "Bangkok");
showEmployee("Poom", 20, "Bangkok");
showEmployee("pea", 20);
//# sourceMappingURL=app.js.map