// ################################         04/09/2023         ################################
// ################################ Tipos de objetos genéricos ################################

interface Box {
    contents: unknown;
  }
  
  let x: Box = {
    contents: "hello world",
  };
  
  // we could check 'x.contents'
  if (typeof x.contents === "string") {
    console.log(x.contents.toLowerCase());
  }
  
  // or we could use a type assertion
  console.log((x.contents as string).toLowerCase());
  
  
  interface NumberBox {
    contents: number;
  }
   
  interface StringBox {
    contents: string;
  }
   
  interface BooleanBox {
    contents: boolean;
  }
  
  function setContent(cont1: NumberBox,  valor: number)  : void;
  function setContent(cont1: StringBox,  valor: string)  : void;
  function setContent(cont1: BooleanBox, valor: boolean) : void;
  function setContent(cont1: { contents: any }, valor: any) : void {
    cont1.contents = valor;
  }
  
  // o problema é querer mais tipos além destes, a função creceria demais
  
  interface Box2<Type> {
    contents: Type;
  }
  
  type tipoGenerico<Type> = Type;
  
  var box: Box2<string>;
  var varGenerica:  tipoGenerico<string>;
  var varGenerica2: tipoGenerico<boolean>;
  
  function teste(box: Box2<string>, varGenerica: tipoGenerico<string>) : string {
  
    return box.contents + ' and ' + varGenerica;
  }
  
  console.log(teste({ contents: 'my name is fulano of tal'}, 'my first name is fulano'));
  
  // Box é reutilizável porque Typepode ser substituído por qualquer coisa.
  
  interface Cachorro<Type>{
    tipo: Type;
  }
  
  function eviteSobrecarga<Type>(valor1: Type, animal: Cachorro<Type>) {
    animal.tipo = valor1;
  }
  
  eviteSobrecarga<string>('vira lata', { tipo: ''});
  
  // ################################ O Array tipo ################################
  
  function getNomes(nomes: Array<string>){
    for(var item in nomes){
      console.log(nomes[item]);
    }
  }
  getNomes(['fulano', 'beltrano', 'sicrano']);
  
  // ################################ O ReadonlyArray tipo ################################
  
  function arraySomenteLeitura(myArray: ReadonlyArray<string>) {  
    console.log('primeiro valor ' + myArray[0]);
  }
  
  arraySomenteLeitura(['nome 1', 'nome 2', 'nome 3']);
  
  console.log(new Array('nome1', 'nome2', 'nome3', 'nome4'));
  console.log(new String('retorna uma string').toString())
  console.log(new Number(15));
  
  var arrayTeste: ReadonlyArray<string> = ['nomes', 'testes', 'e por', 'ai vai'];
  
  arrayTeste;
  
  // ################################################################################
  // ################################ Tipos de tupla ################################
  // ################################################################################
  //
  // Um tipo de tupla é outro tipo de Arraytipo que sabe exatamente quantos elementos contém e exatamente quais tipos contém em posições específicas.
  
  type myTupla = [string, number];
  
  function testeTupla(p: myTupla){
    const [first, second] = p;
  
    console.log(first + ' ' + second);
  }
  
  testeTupla(['my age is: ', 24])
  
  const variavel: myTupla = ['primeiro parametro', 15];
  
  
  function testeSlice(values: [string, number, boolean, ...string[]]) {
   
    const copy = values.slice();
    console.log(copy); 
  }
  
  testeSlice(['my teste', 15.5, true, 'adicionais', 'adicionais', 'adicionais', 'adicionais', 'adicionais']);
  
  type StringNumberBooleans = [string, number, ...boolean[]];
  type StringBooleansNumber = [string, ...boolean[], number];
  type BooleansStringNumber = [...boolean[], string, number];
  
  // ################################ readonly Tipos de tupla ################################
  
  function tuplaLeitura (tupla: readonly [string, number]){
    const [ dado1, dado2] = tupla;
  
    console.log(`dado 1: ${dado1}, dado 2: ${dado2}`);
  }
  
  tuplaLeitura(['idade dele é: ', 15]);