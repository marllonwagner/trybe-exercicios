let inss;
let ir ;

let salario = 3000.00


if (salario >= 0 && salario <= 1556.94) {
    inss = (salario * 0.08)
} else if (salario >= 1556.95 && salario <= 2594.92) {
    inss = (salario * 0.09)
} else if (salario >= 2594.93 && salario <= 5189.82) {
    inss = (salario * 0.11)
}else if (salario >= 5189.83) {
    inss = 570.88
} else {
    console.log("insira um valor de salário maior que zero")
}

let salarioMenosInss = salario - inss

if (salarioMenosInss <= 1903.98){
    ir = 0
}else if (salarioMenosInss >= 1903.99 && salarioMenosInss <= 2826.65){
    ir = (salarioMenosInss * 0.075) - 142.80
}else if (salarioMenosInss >= 2826.66 && salarioMenosInss <= 3751.05){
    ir = (salarioMenosInss * 0.15) - 354.80
}else if (salarioMenosInss >= 3751.06 && salarioMenosInss <= 4664.68){
    ir = (salarioMenosInss * 0.225) - 636.13
}else if (salarioMenosInss >= 4664.69){
    ir = (salarioMenosInss * 0.275) - 869.36
}else {
    
};

let salarioLiquido = salarioMenosInss - ir ;

console.log(salarioLiquido);