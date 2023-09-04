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