let nota = 85;
let conceito = "";

if (nota >= 0 && nota < 50) {
    conceito = "F"
    console.log(conceito)
} else if (nota >=50 && nota < 60){
    conceito = "E"
    console.log(conceito)
} else if (nota >=60 && nota < 70 ) {
    conceito = "D"
    console.log(conceito)
} else if (nota >= 70 && nota < 80) {
    conceito = "C"
    console.log(conceito)
} else if (nota >= 80 && nota < 90) {
    conceito = "B"
    console.log(conceito)
} else if (nota >= 90 && nota <=100){
    conceito = "A"
    console.log(conceito)
}else {
    console.log("Erro, nota não pode ser menor que 0 ou maior que 100")
    

}



