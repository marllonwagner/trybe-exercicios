let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

numbers.sort((a, b) => a - b);

let numbersImpars = []

for (index  = 0 ; index < numbers.length ; index += 1){  
   if( numbers[index] % 2 !== 0){
    numbersImpars.push(numbers[index] % 2 !==0)
   } else if ( numbers[index] % 2 == 0) {
   // nada //
   }else {
    console.log("nenhum impar encontrado")
   }
}
console.log("existem : " + numbersImpars.length +  " " + "numeros impares nessa array")





/*for(let index2 = numbers.length -1 ;index2 > 0 ;index2 -= 1)
    console.log()*/

   /*if(numbers[index] > numbers[index2]) {
    console.log(numbers[index])
}*/
