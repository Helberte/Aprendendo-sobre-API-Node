// #######################################################################
//                            Tipos de objetos
// #######################################################################

interface IPessoa {
    nome: string;
    idade?: number;
    titulo?: number;
    readonly cpf?: number;
}
    function processaPessoa({nome, idade = 0, titulo = 0}: IPessoa){
        console.log('Nome: ' + nome + '. idade: ' + idade + '. titulo: ' + titulo);
    }

    processaPessoa({ nome: 'Helberte '});

    class Fulano implements IPessoa{
    nome: string = 'fulano';
    idade?: number;
    titulo?: number;
    readonly cpf?: number;

    constructor(){
        this.cpf = 15;
    }

    public teste(){
        // this.cpf = 15;
    }
}
  
// ################################### 02/09/2023 ##########################################

interface SomeType {
    readonly prop: string;  
}

function doSomething(obj: SomeType) {

console.log(`prop has the value '${obj.prop}'.`);
    // obj.prop = "hello";
}

// quando marcamos um objeto como readonly, estamos marcando apenas o objeto em sibling
// e não as suas propriedades, ou seja, ainda será possível alterar as propriedades

interface Casa{
    readonly residente: { nome: string, idade: number };
}

function visitaCasa(casa: Casa){
    for (let i = 0; i < 2; i++) {
        console.log(casa.residente.idade++);
    }
}

visitaCasa({ residente: { nome: 'Helberte', idade: 24}});

interface PessoaTeste{
    readonly pessoa: { nome: string }
}

interface ReadOnlyPessoa {
    readonly pessoa: { readonly nome: string }
}

function alteraPessoa(p1: PessoaTeste, p2: ReadOnlyPessoa){
p1.pessoa.nome = "My name is Helberte";
    // p2.pessoa.nome = "teste";
}
var objetoPessoa: PessoaTeste = { pessoa: { nome: 'fulano' } };

var maisTeste: ReadOnlyPessoa = objetoPessoa;
console.log(maisTeste.pessoa.nome);