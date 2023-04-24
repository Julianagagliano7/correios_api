/* Como consultar um CEP? */

const { consultarCep } = require('correios-brasil');

// Cep pode ser String ou Number
const cep = '28960000'; // 21770200 , '21770-200', '21770 200'.... qualquer um formato serve

consultarCep(cep).then(response => {
  console.log(response);
});

/* Consulta do Preço e Prazo de Entrega de uma Encomenda*/

const { calcularPrecoPrazo } = require('correios-brasil');

let args = {
  sCepOrigem: '81200100',
  sCepDestino: '21770200',
  nVlPeso: '1',
  nCdFormato: '1',
  nVlComprimento: '20',
  nVlAltura: '20',
  nVlLargura: '20',
  nCdServico: ['04014', '04510'], //Array com os códigos de serviço
  nVlDiametro: '0',
};

calcularPrecoPrazo(args).then(response => {
  console.log(response);
}); 

/* Como rastrear uma ou mais encomendas? */

const { rastrearEncomendas } = require('correios-brasil');

let codRastreio = ['OU341933668BR', 'LB290784401HK']; // array de códigos de rastreios

rastrearEncomendas(codRastreio).then(response => {
  console.log(response);
});


/* Detalhes dos Eventos de Rastreio */

/* const { rastrearEncomendas } = require('correios-brasil');

let codRastreio = ['OU341933668BR', 'LB290784401HK']; // array de códigos de rastreios

rastrearEncomendas(codRastreio).then(response => {
  console.log(response[0].eventos.reverse());
  // O reverse é apenas para organizarmos os dados do rastreio do mais antigo para o mais recente !
});  */