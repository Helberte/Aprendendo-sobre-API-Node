
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
  