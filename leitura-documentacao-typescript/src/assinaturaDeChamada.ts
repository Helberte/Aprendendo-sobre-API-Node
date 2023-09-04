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
  