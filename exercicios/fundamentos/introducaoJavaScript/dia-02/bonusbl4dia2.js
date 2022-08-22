let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

let ordem ;

for (index = 1 ; index < numbers.length ; index = index + 1) {
    for (index2 = 0; index2 < numbers.length - index; index2 = index2 + 1)
        if(numbers[index2] > numbers[index2 +1]){
            ordem = numbers[index2];
            numbers[index2] = numbers[index2 + 1];
            numbers[index2 + 1] = ordem
        }

}
console.log(numbers)