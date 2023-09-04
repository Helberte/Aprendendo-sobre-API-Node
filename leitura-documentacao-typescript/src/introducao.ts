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