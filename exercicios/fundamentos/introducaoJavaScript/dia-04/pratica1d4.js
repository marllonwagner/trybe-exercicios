let player = {
    name: 'Marta',
    lastname: 'Silva',
    age: 34,
    medals : {golden: 2 , silver: 3}

}

console.log(player.name);
console.log(player['lastname']);
console.log(player.age);

console.log('A jogadora ' + player.name + ' ' + player.lastname  + ' ' + 'tem' +' ' + player.age + ' ' + 'anos de idade.');

player.bestIntheWorld = [2006, 2007, 2008, 2009, 2010, 2018];

console.log(player);

console.log("A jogadora Marta foi eleita a melhor do mundo 6 vezes:" + ' ' + player.bestIntheWorld );

console.log(player['medals']);