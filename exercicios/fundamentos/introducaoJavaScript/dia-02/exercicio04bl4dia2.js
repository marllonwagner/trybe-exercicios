let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let soma = 0;



for (index  = 0 ; index < numbers.length ; index += 1){
    soma = soma + numbers[index]
}
console.log( "A média aritimética é  : " + (soma) / (numbers.length))


let mediaArr = soma / (numbers.length)


if (mediaArr > 20) {
    console.log("Valor maior que 20")
}else if (mediaArr <= 20) {
    console.log("Valor menor ou igual a 20")
}else {
    console.log(mediaArr)
}



