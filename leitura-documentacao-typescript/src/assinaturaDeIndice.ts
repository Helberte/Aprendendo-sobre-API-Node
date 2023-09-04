// ###################################################################################################
// ###################################### Assinaturas de índice ######################################
// ###################################################################################################

interface StringArray {
    index: string[];
}
interface SintaxeDiff {
    [index: number]: string;
}

const myArray: StringArray = { index: ['teste', 'helberte', 'arruda']};
const myArray2: SintaxeDiff = ['teste', 'helberte', 'arruda'];

console.log(myArray.index[1]);
console.log(myArray2[1]);

interface Animal {
    name: string;
}

interface Dog extends Animal {
    raca: string;
} 

interface NotOkay {
    [x: number]: Animal;
}

// eu preciso percorrer toda a estrutura do objeto, porém eu não sei os nomes e nem
// as quantidades de propriedades deste objeto
// o que eu sei?
// sei apenas que preciso acessar as propriedades por string = nome_da_propriedade
// e sei que ela vão me retornar number

// explicação
// https://dmitripavlutin.com/typescript-index-signatures/

const salarios = {
    base: 1520,
    bonus: 500,
    acrescimo: 1520,
    gratificacao: 1520,
    vale: 1520,
    saude: 1520,
    odontologico: 1520,
}

function somaSalario(myObject: { [index: string]: number }) : number{
    var total: number = 0;

    for(const item in myObject){
        total += myObject[item];
    }

    return total;
}

console.log(somaSalario(salarios))

// ------------------------------------------------------------------------------------------------------------------

type assinaturaIndex = {
    [index: string]: string
}

const myVar: assinaturaIndex = {
'chave1': 'helberte',
'chave2': 'costa',
'chave3': 'arruda'
}

console.log(myVar['chave1']);

interface Fulano {
    [index: string]: number | boolean | string;
    teste: string
}

const meuIrmao: Fulano = {
    teste: 'meu teste',
    idade: 15,
    vivo: true
}

console.log(meuIrmao['idade']);