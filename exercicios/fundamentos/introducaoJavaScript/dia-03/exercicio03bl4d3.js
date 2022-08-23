let array = ['java', 'javascript', 'python', 'html', 'css', 'oi'];

let maiorPalavra = " ";
let menorPalavra = " ";

for (let index = 0; index < array.length; index += 1) {
    for (let index2 = 1; index2 < array.length; index2 +=1) {
        if (array[index].length > array[index2].length && array[index].length > maiorPalavra.length) {
            maiorPalavra = array[index]
        }
        
        if (array[index].length < array[index2].length ) {
            menorPalavra = array[index]    
    }
    
} 
    
}
console.log('A maior palavra é : ' + maiorPalavra);
console.log('A menor palavra é : ' + menorPalavra);
















//console.log(array[0].length);