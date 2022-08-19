/*pratica 1 */
const myName = "Marllon";
const birthCity = "Rio de Janeiro";
let birthYear = 1991;

console.log(myName);

birthYear = 2030;
console.log(birthYear);

/*pratica 2*/

const base = 5;
let height = 8;

const area = base * height;
console.log("area é " + area);

const perimeter = (base * 2) + (height * 2);
console.log("o perimetro é " + perimeter );

const notaPessoaCandidata = 65;

if (notaPessoaCandidata >= 80) {
    console.log("Parabéns, você foi aprovado(a)!")
} else if (notaPessoaCandidata < 80 && notaPessoaCandidata >= 60)  {
    console.log("Você está na nossa lista de espera")
} else {
    console.log("Você foi reprovado(a)")
};

/*pratica 3 */

const currentHour = 10;
let message = "";

if (currentHour >= 22) {
    message = "nao deveriamos comer nada é hora de dormir"
    console.log(message)
} else if (currentHour >= 18 && currentHour < 22 ) {
    message = "Rango da noite, Vamos jantar :D"
    console.log(message)
} else if (currentHour >= 14 && currentHour < 18) {
    message = "vamos fazer um bolo para o café da tarde?"
    console.log(message)
} else if (currentHour >=11 && currentHour <= 14) {
    message = "Hora do almoço!!!"
    console.log(message)
} else if (currentHour >=4 && currentHour <= 11) {
    message = "Hmmm, cheiro de café recém passado"
    console.log(message)
} else {
    message = "insira um horário válido"
    console.log(message)
}

/*pratica 4 */

let weekDay = "quarta-feira"

if (weekDay == "segunda-feira" || weekDay == "terça-feira" || weekDay == "quarta-feira" || weekDay == "quinta-feira" || weekDay =="sexta-feira") {
    console.log("Oba mais um dia de Trybe")
} else {
    console.log("descanso merecido")
}

/* pratica 5 */

let pessoaCandidata;

switch (pessoaCandidata) {
    case "aprovada":
    console.log("parabens passou")
    break;

    case "lista":
    console.log("voce ta na Lista de espera")
    break

    case "reprovado":
    console.log("voce ta reprovado")    
    break

    default:
        console.log("nao se aplica")
}

