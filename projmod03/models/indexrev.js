//number
const num1 = 2;
const num2 =2.5;

console.log(num1, typeof num1);
console.log(num2, typeof num2);

//funções => usa-se a declaração 'funtion' e damos um nome (FUNÇÃO NOMEADA)

//Declara-se uma nova informação e armazena-se na memória => essa informação é do tipo funtion

function nomeDaFuncao (){
    console.log("Nome da função")
}

console.log(nomeDaFuncao, typeof nomeDaFuncao)

//executa a função que havia sido declarada antes
const resultadoDaFuncao = nomeDaFuncao();

//void na prática equivale a algo 'vazio', ou seja, que não tem uma informação definida. Portanto, o retorno de uma função 'void' é sempre undefined;

console. log(resultadoDaFuncao, typeof resultadoDaFuncao)

//Arrow function

const funcaoArrow = () => {
    console.log("Função Arrow")
};

console.log(funcaoArrow, typeof funcaoArrow)

//Função anônimas, ou seja, que não possuem nome

//app.get("", function () {});
//app.get("", () => {})

//Classes

console.log("\n\n\n\n");

class Pessoa{
    constructor(){
        console.log("Classe pessoa está sendo construída");
    }
}

const obj = "obj";

const paulo = new Pessoa()
const ivo = new Pessoa()

console.log(Pessoa, typeof Pessoa);
console.log(obj, typeof obj);
console.log(paulo, typeof paulo);
console.log(ivo, typeof ivo);