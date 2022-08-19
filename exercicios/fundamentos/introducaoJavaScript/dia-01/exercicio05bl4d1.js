let angle1 = 30;
let angle2 = 80;
let angle3 = 70;

if (angle1 < 0 || angle2 < 0 || angle3 < 0) {
    console.log("Erro, angulos devem ser positivos")
}else if ((angle1 + angle2 + angle3) < 180){
    console.log(false)
}else if ((angle1 + angle2 + angle3) == 180) {
    console.log(true)
}else if ((angle1 + angle2 + angle3) > 180) {
    console.log("a soma dos angulos nao pode ser maior que 180")
}else {
    console.log("favor insira um numero válido")
}







