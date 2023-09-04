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
  