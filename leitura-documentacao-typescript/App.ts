// 30/08/2023

type Metro     = number | string;
type Empregado = number | boolean;

type Pessoa = {
  nome:   string,
  idade:  number | string,
  peso:   number,
  altura: number
}

var teste = {
  nome: 'meu teste',
  idade: 15
}

function getPessoa(medida: Metro, trabalha: Empregado, individuo: Pessoa, o?: { nome: string, idade: number}) : Metro{

  console.log(`metro: ${medida} trabalha: ${trabalha}, pessoa: ${individuo.nome} idade: ${individuo.idade}`);

  return 'meu retorno é uma string';
}

console.log(getPessoa(15, true, { nome: 'fulano', idade: 15, peso: 120, altura: 1.7}));

interface ICoordenadas {
  x: number;
  y: number;
}

function getCoordenadas({ x, y }: ICoordenadas) {
  console.log(`Coordenada x: ${x}. Coordenada y: ${y}`);
}

getCoordenadas({x: 15 , y: 20})


interface Animal {
  name: string;
}

interface Bear extends Animal {
  honey: boolean;
}

function getBear() : Bear{
  const bear: Bear = { name: 'Bia', honey: true };

  return bear;
}

const bear = getBear();
console.log(bear.name);
console.log(bear.honey);



type Felino = {
  name: string;
}

type Gato = Felino & {
  mia: boolean
};

function getBear2() : Gato {
  const bichano: Gato = { name: 'general', mia: true};
  return bichano;
}

const myCat = getBear2();
console.log(myCat.name);
console.log(myCat.mia);


interface WindowTeste {
  title: string;
}

interface WindowTeste {
  ts: string;
}

var win: WindowTeste = { title: 'Windows 10', ts: 'não sei o que é'};

console.log(win.title + ' e ' + win.ts);

// este jera erro
/*
type typeDuplicado = {
  title: string;
}

type typeDuplicado = {
  ts: string;
}
*/


const x = ('hello' as any) as number;

console.log(x);


let x2: "hello" = "hello";
const x3: "hello" = "hello";

x2 = "hello";

// x2 = "howdy";


// funcao que só recebe valores conhecidos


function tiposConhecidos (s: string, valor: "salada" | "sopa" | "macarrao") {
  console.log(s + ' e ' + valor);
}

tiposConhecidos('comida', "salada");


function requisicao ( url: string, method: "POST" | "GET"){
  console.log(url + ' | ' + method);
}

const req = {
  url: 'https://google.com.br',
  method: "POST" as "POST"
}
const req2 = {
  url: 'https://google.com.br',
  method: "POST" 
} as const

requisicao(req.url, req2.method);

// 31/08/2023

// @errors: 2345
function padLeft(padding: number | string, input: string) {
  if (typeof padding === "number")
    return " ".repeat(padding) + input;

  return padding + input;
}

console.log(padLeft(15, 'minha string top'));
console.log(padLeft('teste do helberte ', 'minha string top'));


// tipos dinamicos
function minhaFunction (url: string, method: "POST" | "GET"){
  console.log(`url ${url}, method: ${method}`);
}

const method = {
  post: "POST",
  get: "GET"
} as const

minhaFunction('www.algumacoisa.com.br', method.post);


function printAll(strs: string | string[] | null) {

  if (typeof strs === "object" && strs) {
    for (const s of strs) {
      
      console.log(s);
    }
  } else if (typeof strs === "string") {
    console.log(strs);
  } else {
    console.log('valor null')
  }
}

printAll('teste do helberte');
printAll(['ola', 'teste', 'mais um', 'dois', 'três', 'agua']);
printAll(null);


// estreitamento de veracidade

function funcaoDoIf(num: number | null | string | bigint | undefined){

  if(num){
    console.log('tem valor no parametro: ' + num);
  }
  else
    console.log('não tem valor no parametro')
}

console.log('###############################################################################################################');

funcaoDoIf(0);
funcaoDoIf(null);
funcaoDoIf('');
funcaoDoIf(undefined);

console.log('###############################################################################################################');

console.log(!!null ? 'não nulo' : 'nulo');


function printAll2(strs: string | string[] | null) {
  if (strs) {

    if (typeof strs === "object") {
      for (const s of strs) {
        console.log(s);
      }
    } else if (typeof strs === "string") {

      console.log(strs);
    }
  }
}

printAll2('teste do helberte');
printAll2(['ola', 'teste', 'mais um', 'dois', 'três', 'agua']);
printAll2(null);


function multiplyAll(values: number[] | undefined, factor: number): number[] | undefined {
  if (!values) {
    return values;
  } else {
    return values.map((x) => x * factor);
  }
}

console.log(multiplyAll([1,2,3,5,4,5,6,1,2,3,5], 5))
console.log(undefined)

function example(x: string | number, y: string | boolean) {
  if (x === y) {
    console.log(x.toUpperCase() + ' igual');          
    console.log(y.toLowerCase() + ' igual');          
  } else {
    console.log(x + ' diferente');               
    console.log(y + ' diferente');               
  }
}

example('5', '5');


function printAll3(strs: string | string[] | null) {
  if (strs !== null) {
    if (typeof strs === "object") {
      for (const s of strs) {
                       
        console.log(s);
      }
    } else if (typeof strs === "string") {
      console.log(strs);
                   
    }
  }
}


interface Container {
  value: number | null | undefined;
}
 
function multiplyValue(container: Container, factor: number) {
  // Remova 'nulo' e 'indefinido' do tipo.
  if (container.value != null) {
    console.log(container.value);
                  
    // Agora podemos multiplicar 'container.value' com segurança.
    container.value *= factor;
  }else{
    console.log('O valor é undefined')
  }
}

multiplyValue({ value: undefined }, 5)
multiplyValue({ value: null }, 5)
multiplyValue({ value: 15 }, 5)



type Peixe = {
  nadar: () => void;
}
type Passaro = {
  voar: () => void;
}

function meuObjeto (animal: Peixe | Passaro){
  if("nadar" in animal){
    return animal.nadar();
  }
 
  return animal.voar();
}

meuObjeto({nadar: () => {   
  console.log('Este animal nada');
}});

meuObjeto({voar: () => {   
  console.log('Este animal voa');
}});


type Fish  = { swim:  () => void };
type Bird  = { fly:   () => void };
type Human = { swim?: () => void; fly?: () => void };
 
function move(animal: Fish | Bird | Human) {

  if ("swim" in animal) 
    animal;      
  else 
    animal;     
}

function logValue(x: Date | string) {
  if (x instanceof Date) {

    console.log(x.toUTCString());
               
  } else {
    console.log(x.toUpperCase());
               
  }
}

logValue('new Date()')

class Humano{
  private nome: string;
  private idade: number;

  constructor(){
    this.nome = 'fulano';
    this.idade = 147;
  } 

  public getNome() : string{
    return this.nome;
  }
  public getIdade() : number{
    return this.idade;
  }
}

const pessoa: Humano = new Humano();

function obterPessoa(p: Humano | string){
  if(p instanceof Humano)
    console.log(p.getNome() + ' ' + p.getIdade());
  else
    console.log(p.toString().toUpperCase());
}

obterPessoa('string que não pertence a instacia de Humano');
obterPessoa(pessoa);


let x10 = Math.random() < 0.5 ? 10 : "hello world!";
   
x10 = 1; 
console.log(x10);           
x10 = "goodbye!";
 
console.log(x10);
           
function ePeixe(pet: Fish | Bird): pet is Fish {
  return (pet as Fish).swim !== undefined;
}

console.log(ePeixe({ swim: () => { return 'é um peixe que nada'}}));


// funcoes de afirmação
interface Forma {
  tipo: "circulo" | "quadrado";
  raio?: number;
  cumprimento?: number;
}

/*
function tratarForma(forma: Forma){
  

  if(forma.tipo === ret){

  }
}

function getArea(forma: Forma){

  if(forma.tipo === "circulo"){
    return Math.PI *  forma.raio ** 2;

  }
  return 15;
}
*/

interface Circulo {
  tipo: "circulo";
  raio: number;
}
 
interface Quadrado {
  tipo: "quadrado";
  cumprimento: number;
}

interface Triangulo {
  tipo: "triangulo";
  cumprimento: number;
}

type TForma = Circulo | Quadrado;

function pegaArea(forma: TForma) : number {

  switch (forma.tipo){
    case "circulo":
      return Math.PI *  forma.raio ** 2;

    case "quadrado":
      return forma.cumprimento ** 2;

    default:
      const _tipoNever: never = forma;
      return _tipoNever;
  }
}

console.log('Área: ' + pegaArea({ tipo: "quadrado", cumprimento: 15}));
console.log('Área: ' + pegaArea({ tipo: "circulo", raio: 15}));

// Mais sobre FUNÇÕES
// Expressões de tipo de função

function funcaoComoTipo(funcao: (param: string) => string){
  return funcao("Uma função do tipo de uma função");
}
function callba(param: string){
  // processamento

  return param.toUpperCase();
}

console.log(funcaoComoTipo(callba))

type tipoFuncao = (p: number) => number;

function passaPorParametro(p: number){
  return p * 2;
}

function recebeCallBack(n: number, func: tipoFuncao){
  return n * func(15);
}

console.log(recebeCallBack(2, passaPorParametro));

// Assinaturas de chamada

type descricaoFuncao = {
  descricao: string,
  (v: number): boolean;
}

function fnPassadaParam(v: number){
  return (v % 2) == 0;
}
fnPassadaParam.descricao = "Devolve se é impar ou par";

function funcaoChamadora(fn: descricaoFuncao){
  const valor: string = fn(6) ? 'par' : 'impar';

  console.log('Descrição: ' + fn.descricao + ' | ' + valor);
}

funcaoChamadora(fnPassadaParam);

type SomeConstructor = {
  new (s: string): SomeObject;
};

class SomeObject{
  private s: string;
  constructor(s: string){
    this.s = s;
  }
  public getS(){
    return this.s;
  }
}

function fn(ctor: SomeConstructor) {
  return new ctor("hello").getS();
}

console.log( fn(SomeObject) );

// #######################################################################################
// ################################  Funções genéricas ###################################
// #######################################################################################

function primeiroElemento<Type>(arr: Type[]): Type | undefined {
  return arr[0];
}

console.log(primeiroElemento([{ numero: 15}, { teste: 20 }, {outroTeste: 30}]));
console.log(primeiroElemento([15,20,30,4,50]));

type funcaoPropriedade = {
  descricao: string,
  new (p: string): Pessoa2
}

class Pessoa2{
  private nome: string;

  constructor(nome: string) {
    this.nome = nome;
  }

  public getNome() : string {
    return this.nome;
  }
}

function myName (d: string, n: funcaoPropriedade){
  return new n(d);
}

(Pessoa2 as funcaoPropriedade).descricao = 'Uma funcão que retorna um objeto';
const p: Pessoa2 = myName('teste', Pessoa2 as funcaoPropriedade);

console.log(`Nome: ${p.getNome()}. Descricao: ${(Pessoa2 as funcaoPropriedade).descricao}`);


function myFunctionGeneric<type>(p: type) : type | undefined{
  return p;
}

const inteiro = myFunctionGeneric(15);




function map<nomeQ, saida, teste>(arr: nomeQ[], func: (arg: nomeQ) => saida, param: teste): saida[] {
  let valor = (param as number) * 10;

  return arr.map(func);
}

// Parameter 'n' is of type 'string'
// 'parsed' is of type 'number[]'
const parsed = map(["1", "2", "3"], (n) => parseInt(n), 10);

console.log(parsed);


function calculaMedia<num1, num2, num3> (p1: num1, p2: num2, p3: num3) {
  return ((p1 as number) * (p2 as number) * (p3 as number)) / 3; 
} 

console.log(calculaMedia('15',20,30));


// ################### Restrições ###################
// nas funções genericas eu consigo passar qualquer tipo por parametro
// mas as vezes pode ser interessante passar apenas um grupo de tipos que eu queira
// pra isso, usamos as restricoes


type grupoValores = {
  tamanho: number,
  descricao: string
}

function maiorDeDois<Type extends grupoValores>(valor: Type, valor2: Type) {
  if(valor.tamanho > valor2.tamanho ){
    return valor.tamanho;
  }
  return valor2.tamanho;
}

function maiorDeDois2<Type extends { tamanho: number}>(valor: Type, valor2: Type) {
  if(valor.tamanho > valor2.tamanho ){
    return valor.tamanho;
  }
  return valor2.tamanho;
}

console.log('Maior: ' + maiorDeDois ({tamanho: 15, descricao: ''}, {tamanho: 17, descricao: ''})) 
console.log('Maior: ' + maiorDeDois2({tamanho: 150 },{tamanho: 17 }));

function minimumLength<Type extends { length: number }>(obj: Type, minimum: number ): Type {
  if (obj.length >= minimum) {
    return obj;
  } else {
    return { length: minimum } as Type;
  }
}

console.log (minimumLength({ length: 15}, 100));


// juntando array

function juntaArray<Type>(arr1: Type[], arr2: Type[]) : Type[]{
  return arr1.concat(arr2);
}

console.log(juntaArray<number | string>([1,2,3,4,5,6,7,8,9,10], ['1', '3']));



function funcaoGenerica<Type>(p1: Type, p2: Type, p3: Type) : Type{
  return (p1 + ' - ' + p2 + ' - ' + p3) as Type;
}

// nem sempre o typescript infere o tipo de dado que está sendo passado
// para isso, colocamos o tipo que vamos passar por parametro explicitamente

console.log(funcaoGenerica<string | string | number>('primeiro param', 'segundo param', 15));


function firstElement1<Type>(arr: Type[]) {
  return arr[0];
}
  
function firstElement2<Type extends any[]>(arr: Type) {
  return arr[0];
}
  
// a: number (good)
const a = firstElement1([1, 2, 3]);
// b: any (bad)
const b = firstElement2([1, 2, 3]);

// ############################################################################################ //
// Regra : Se um parâmetro de tipo aparecer apenas em um local, reconsidere fortemente se você realmente precisa dele

function filter1<Type>(arr: Type[], func: (arg: Type) => boolean): Type[] {
  return arr.filter(func);
}

function procura(n: number) : boolean {
  return n === 8 || n === 9;
}

var arr: number[] = [1,2,3,4,5,6,7,8,9,10];

console.log(filter1(arr, procura));


function filter2<Type, Func extends (arg: Type) => boolean>(arr: Type[],func: Func ): Type[] {

  return arr.filter(func);
}

console.log(filter2(arr, procura));


// ######################################## Parâmetros opcionais ########################################


function f(x: number = 10) {
  console.log(x);
}
f();
f(150);


function f2(x?: number) {
  console.log(x);
}
f2();
f2(150);
f2(undefined);

// Regra : Ao escrever um tipo de função para um retorno de chamada, nunca escreva um parâmetro opcional, 
// a menos que pretenda chamar a função sem passar esse argumento

function meyForEach(arr: any[], callback: (arg: any, index?: number) => void) {
  for(let i = 0; i < arr.length; i++){
    callback(arr[i], i);
  }
}

meyForEach([1,2,3,4,5,6,7,8,9,10], (a: any) => console.log(a));
meyForEach([1,2,3,4,5,6,7,8,9,10], (a, b)   => console.log(a, b));


// ######################################## Sobrecargas de função ########################################


function makeDate(timestamp: number): Date;
function makeDate(m: number, d: number, y: number): Date;
function makeDate(mOrTimestamp: number, d?: number, y?: number): Date {
  if (d !== undefined && y !== undefined) {
    return new Date(y, mOrTimestamp, d);
  } else {
    return new Date(mOrTimestamp);
  }
}
const d1 = makeDate(12345678);
const d2 = makeDate(5, 5, 5);

console.log('Resultado: ' + d1 + ' || ' + d2);

function minhaSobrecarga(primeiroNome: string) : string;                        // primeira sobrecarga
function minhaSobrecarga(primeiroNome: string, segundoNome: string) : string;   // sobrecarga
function minhaSobrecarga(primeiroNome: string, segundoNome?: string) : string{  // linha de implementação, não é vista
  
  if(segundoNome)
    return primeiroNome + ' ' + segundoNome;
  return primeiroNome;  
}

console.log(minhaSobrecarga('helberte'));
console.log(minhaSobrecarga('helberte', 'costa'));

function fnc(x: boolean): void;
function fnc(x: boolean, y: string): void;
function fnc(x: boolean, y?: string) : void{}

function fn2(x: string): string;
function fn2(x: number): boolean;
function fn2(x: string | number) : string | boolean {
  return "oops";
}

// funcao que retorna o tamnho de um array ou string

function tamanho(s: string): number;
function tamanho(arr: any[]): number;
function tamanho(x: any) {
  return x.length;
}

// ##################### Sempre prefira parâmetros com tipos de união em vez de sobrecargas quando possível #####################

console.log(tamanho('my name is fulano of tal'));
console.log(tamanho([1,2,3,4,5,6,7,8,9,10]));

// ##################### Declarando this em uma Função #####################



const user = {
  id: 123,
  admin: false,

  adicionaAdmin: function () {
    this.admin = true;
  }
}


interface DB {
  filterUsers(filter: (this: User) => boolean): User[];
}

class User{
  public admin: boolean = false;
}
class Banco implements DB {

  filterUsers(filter: (this: User) => boolean): User[] {
    return [];
  }
} 
function getDB(){
  return new Banco();
}

const db = getDB();

const admins = db.filterUsers(function (this: User) {
  return this.admin;
});

// ##################### Outros tipos para conhecer #####################

// void não é o mesmo que undefined.
// object é todo o tipo que for diferente dos tipos primitivos
//
// string, number, bigint, boolean, symbol, null, undefined
//
// tudo diferente disso é object
//
// ----------------------------  I M P O R T A N T E  ----------------------------
// //                                                                           //
// //                 objectnão é Object. Utilize sempre object !               //
// //                                                                           //
// -------------------------------------------------------------------------------

// unknown - qualquer coisa, parecido com any, porém mais seguro do que o any

function myF(p: unknown){
  // p.t(); // não deixa
}

function myF2(p: any){
  p.t();
}

// o tipo Function
// melhor evitar devido ao anytipo de retorno inseguro.
function recebeFuncao (func: Function) {
  return func('minha função retornando valor');
}

function passadaParametro(p: string){
  return p;
}

console.log(recebeFuncao(passadaParametro));

// ##################### Parâmetros e argumentos restantes #####################
// Parâmetros de descanso ...m

function multiply(n: number, ...m: number[]) {
  return m.map((x) => n * x);
}

const ab = multiply(10, 1, 2, 3, 4,5,2,2,4,5,7,8,7,5,15,4,5,4,5,6,6,3,3,3,2,1,1,2,2);
console.log(ab);


function paramDescanso(sep: string, ...p: string[] ){
  return p.join(sep);
}

console.log(paramDescanso(' - ', 'fulano', 'fulano', 'fulano', 'fulano', 'fulano', 'fulano', 'fulano', 'fulano', 'fulano', 'fulano', 'fulano', 'fulano', 'fulano'));

const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6,7,8,9,10];
arr1.push(...[1,2,3,4,5,6,7,8]);

console.log(arr1);

const args = [8, 5] as const;
const angle = Math.atan2(...args);

// ############################# Desestruturação de parâmetros #############################
// ############################# Atribuição de Funções         #############################
    
type voidFunc = () => void;
  
const myFu: voidFunc = () => true;
const myFu2: voidFunc = () => {
  console.log('teste');
  return 'fala meu povo!';
};

// o retorno continua como void
const v1 = myFu();
const v2 = myFu2();

console.log(v1);
console.log(v2);

const arrTop = [1,2,3,4,5,6,7,8,9,10];
const arrSecond = [1];

arrTop.forEach((a) => arrSecond.push(a));

console.log(arrTop);
console.log(arrSecond);
  
// #######################################################################
//                            Tipos de objetos
// #######################################################################

interface IPessoa{
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

// ################################## Excesso de verificações de propriedade ##################################

interface SquareConfig {
  color?: string;
  width?: number;
  [index: string]: any
}
 
function createSquare(config: SquareConfig): { color: string; area: number } {
  return {
    color: config.color || "red",
    area: config.width ? config.width * config.width : 20,
  };
}

let mySquare = createSquare({ color: "", width: undefined, opacity: 1.5 });

console.log(mySquare);

// ################################## Estendendo Tipos ##################################

interface ICarro{
  qtdPorta: number;
}

interface IFiat {
  preco: number;
}

interface IFiatArgo extends ICarro, IFiat {
  computadorBordo: boolean;
}

// ################################## Tipos de interseção ##################################

interface Colorful {
  color: string;
}
interface Circle {
  radius: number;
}
 
// Aqui, cruzamos Colorfule Circleproduzimos um novo tipo que possui todos os membros de Colorful e Circle.

type ColorfulCircle = Colorful & Circle;

const myIntersecao: ColorfulCircle = { color: 'red', radius: 1.55 };

// ################################## Interfaces vs. Interseções ##################################