export const dados = {
  quantidade: { machos: [], femeas: [] },
  nascimentos: { machos: [], femeas: [], total: [] },
  perdas: { femeas: [], borregos: [], borregas: [] },
  descartes: { femeas: [] },
  reposicao: { machos: [], borregas: [] },
  vendas: { borregos:[], borregas:[] },
  compras: { borregos:[], borregas:[] },
  estoqueFinal: { machos: [], femeas: [], borregas: [] }, //machos e borregas não usados
  peso: { machos: [], femeas: [], total: [] },
  Eua: { machos: [], femeas: [], total: [] },
  receita: [],
};

export const parametros = {
  maxFemeas: 0,
  machosPorFemeas: 0,
  partosPorAno: 0,
  prolificidade: 0,
  fertilidade: 0,
  mortalidadeAbaixoDe1Ano: 0,
  mortalidadeAcimaDe1Ano: 0,
  idadeDesmame: 0,
  pesoAbate: 0,
  pesoMedio: { machos: 0, femeas: 0, borregas: 0 },
  taxaDescartes: 0,
  crescimento: 0,
  precoKg: 0,
  custeio: 0,
  custeioTotal: 0,
};

export const suplementos = {
  materiaSeca: {
    femeas: 0,
    machos: 0,
    borregos: 0,
    borregas1: 0,
    borregas2: 0
  },
  diasSuplementos: {
    femeas: 0,
    machos: 0,
    borregos: 0,
    borregas1: 0,
    borregas2: 0
  },
  volumoso: {
    femeas: 0,
    machos: 0,
    borregos: 0,
    borregas1: 0,
    borregas2: 0
  },
  materiaSecaVolumoso: {
    femeas: 0,
    machos: 0,
    borregos: 0,
    borregas1: 0,
    borregas2: 0
  },
  materiaSecaConcentrado: {
    femeas: 0,
    machos: 0,
    borregos: 0,
    borregas1: 0,
    borregas2: 0
  }
};

export let anoAtual = 0, controlador = 0, numAnos = 0;

import { calcularInformacoes } from './Add.js';

// script.js

// Função para capturar e armazenar os valores do formulário
document.getElementById('Form')?.addEventListener('submit', function(event) {
  event.preventDefault();
  
  // Criando uma instância do FormData para capturar todos os campos do formulário
  const formData = new FormData(event.target);

  // Convertendo o FormData em um objeto para facilitar o armazenamento e manipulação
  const formValues = {};
  formData.forEach((value, key) => {
      formValues[key] = value;
  });

  // Guardando o objeto no localStorage (convertendo para JSON)
  localStorage.setItem('formValues', JSON.stringify(formValues));

  // Redirecionando para a página de resultado
  window.location.href = "tabela.html";
});

// Função para calcular e exibir o resultado na segunda página
document.addEventListener('DOMContentLoaded', function() {
  if (window.location.pathname.includes('tabela.html')) {
      // Recuperando o objeto do localStorage e convertendo de volta para um objeto JavaScript
      const formValues = JSON.parse(localStorage.getItem('formValues'));

      // Convertendo os valores de texto para números e realizando o cálculo
      dados.quantidade.femeas.push(parseFloat(formValues.femaleInput));
      parametros.maxFemeas = parseFloat(formValues.maxFemaleInput);
      parametros.machosPorFemeas = parseFloat(formValues.maleFemaleInput);
      parametros.partosPorAno = parseFloat(formValues.partosPorAnoInput);
      parametros.prolificidade = parseFloat(formValues.prolificidadeInput);
      parametros.fertilidade = parseFloat(formValues.fertilidadeInput);
      parametros.mortalidadeAbaixoDe1Ano = parseFloat(formValues.mortalidade1AnoInput);
      parametros.mortalidadeAcimaDe1Ano = parseFloat(formValues.mortalidadeInput);
      parametros.idadeDesmame = parseFloat(formValues.idadeDesmameInput);
      parametros.pesoAbate = parseFloat(formValues.pesoAbateInput);
      parametros.pesoMedio.machos = parseFloat(formValues.pesoMedioReprodutorInput);
      parametros.pesoMedio.femeas = parseFloat(formValues.pesoMedioMatrizInput);
      parametros.pesoMedio.borregas = parseFloat(formValues.pesoMedioBorregaInput);
      parametros.taxaDescartes = parseFloat(formValues.descarteInput);
      parametros.crescimento = parseFloat(formValues.crescimentoInput);
      parametros.precoKg = parseFloat(formValues.precoKgInput);
      parametros.custeio = parseFloat(formValues.custeioInput);
      parametros.custeioTotal = parseFloat(formValues.custeioTotalInput);
      numAnos = parseFloat(formValues.anosSimuladosInput);

      suplementos.materiaSeca.femeas = parseFloat(formValues.FmateriaSecaInput) / 100;
      suplementos.materiaSeca.machos = parseFloat(formValues.MmateriaSecaInput) / 100;
      suplementos.materiaSeca.borregos = parseFloat(formValues.BmateriaSecaInput) / 100;
      suplementos.materiaSeca.borregas1 = parseFloat(formValues.BA1materiaSecaInput) / 100;
      suplementos.materiaSeca.borregas2 = parseFloat(formValues.BA2materiaSecaInput) / 100;
      suplementos.diasSuplementos.femeas = parseFloat(formValues.FdiasSuplementosInput);
      suplementos.diasSuplementos.machos = parseFloat(formValues.MdiasSuplementosInput);
      suplementos.diasSuplementos.borregos = parseFloat(formValues.BdiasSuplementosInput);
      suplementos.diasSuplementos.borregas1 = parseFloat(formValues.BA1diasSuplementosInput);
      suplementos.diasSuplementos.borregas2 = parseFloat(formValues.BA2diasSuplementosInput);
      suplementos.volumoso.femeas = parseFloat(formValues.FvolumosoInput) / 100;
      suplementos.volumoso.machos = parseFloat(formValues.MvolumosoInput) / 100;
      suplementos.volumoso.borregos = parseFloat(formValues.BvolumosoInput) / 100;
      suplementos.volumoso.borregas1 = parseFloat(formValues.BA1volumosoInput) / 100;
      suplementos.volumoso.borregas2 = parseFloat(formValues.BA2volumosoInput) / 100;
      suplementos.materiaSecaVolumoso.femeas = parseFloat(formValues.FmateriaSeca_volumosoInput) / 100;
      suplementos.materiaSecaVolumoso.machos = parseFloat(formValues.MmateriaSeca_volumosoInput) / 100;
      suplementos.materiaSecaVolumoso.borregos = parseFloat(formValues.BmateriaSeca_volumosoInput) / 100;
      suplementos.materiaSecaVolumoso.borregas1 = parseFloat(formValues.BA1materiaSeca_volumosoInput) / 100;
      suplementos.materiaSecaVolumoso.borregas2 = parseFloat(formValues.BA2materiaSeca_volumosoInput) / 100;
      suplementos.materiaSecaConcentrado.femeas = parseFloat(formValues.FmateriaSeca_concentradoInput) / 100;
      suplementos.materiaSecaConcentrado.machos = parseFloat(formValues.MmateriaSeca_concentradoInput) / 100;
      suplementos.materiaSecaConcentrado.borregos = parseFloat(formValues.BmateriaSeca_concentradoInput) / 100;
      suplementos.materiaSecaConcentrado.borregas1 = parseFloat(formValues.BA1materiaSeca_concentradoInput) / 100;
      suplementos.materiaSecaConcentrado.borregas2 = parseFloat(formValues.BA2materiaSeca_concentradoInput) / 100;

      // Exibindo o resultado
      while (anoAtual < numAnos) {
        mostrarInformacoes();
        calcularInformacoes();
        anoAtual++;
      }

      const botaoRetroceder = document.getElementById('retroceder');
      if (botaoRetroceder) {
        botaoRetroceder.addEventListener('click', function(event){
          event.preventDefault();
          if (controlador > 0) {
            controlador--;
            mostrarInformacoes();
            calcularInformacoes()
            console.log(`Ano ${controlador + 1}`);
            console.log('Fêmeas:', dados.quantidade.femeas[controlador]);
            console.log('Max fêmeas:', parametros.maxFemeas);
            console.log('Reprodução:', dados.nascimentos.femeas[controlador]);
            console.log('Descarte:', dados.descartes.femeas[controlador]);
          }
        });
      }

      const botaoAvancar = document.getElementById('avancar');
      if (botaoAvancar) {
        botaoAvancar.addEventListener('click', function(event){
          event.preventDefault();
          if (controlador + 1 < dados.quantidade.femeas.length) {
            controlador++;
            mostrarInformacoes();
            calcularInformacoes()
            console.log(`Ano ${controlador + 1}`);
            console.log('Fêmeas:', dados.quantidade.femeas[controlador]);
            console.log('Max fêmeas:', parametros.maxFemeas);
            console.log('Reprodução:', dados.nascimentos.femeas[controlador]);
            console.log('Descarte:', dados.descartes.femeas[controlador]);
          }
        });
      }
  }
});

var M = document.querySelector("#machos");
var F = document.querySelector("#femeas");
var N = document.querySelectorAll(".nascimentos");
var P = document.querySelector("#perdas");
var PA = document.querySelectorAll(".perdas_1_ano");
var D = document.querySelector("#descartes");
var RF = document.querySelector("#reposicao-femeas");
var RM = document.querySelector("#reposicao-machos");
var VM = document.querySelector("#venda_machos");
var CM = document.querySelector("#compra_machos");
var VF = document.querySelector("#venda_femeas");
var CF = document.querySelector("#compra_femeas");
var EM = document.querySelector("#machos_Final");
var EF = document.querySelector("#femeas_Final");
var ER = document.querySelector("#reposicaoF_Final");
var PM = document.querySelector("#peso_medioM");
var PF = document.querySelector("#peso_medioF");
var PT = document.querySelector("#peso_total");
var EUAM = document.querySelector("#EUA_machos");
var EUAF = document.querySelector("#EUA_femeas");
var EUAT = document.querySelector("#EUA_total");
var RE = document.querySelector("#receita");
// var C = document.querySelector("#custo");
// var CT = document.querySelector("#custo_total");
// var L = document.querySelector("#lucro");
var A = document.querySelectorAll(".ano_exibido");

function calcularReposicaoMachos() {
  dados.quantidade.machos[anoAtual] = Math.ceil(dados.quantidade.femeas[anoAtual] / parametros.machosPorFemeas);
  
  if (dados.quantidade.machos[anoAtual] > dados.quantidade.machos[(anoAtual-1)]) {
    dados.reposicao.machos[anoAtual] = dados.quantidade.machos[anoAtual] - dados.quantidade.machos[(anoAtual-1)];
  } else{
    dados.reposicao.machos[anoAtual] = 0;
  }

}

function calcularNascimentos() {
  dados.nascimentos.total.push(Math.ceil(((dados.quantidade.femeas[anoAtual] * (parametros.fertilidade / 100) * parametros.prolificidade)) * parametros.partosPorAno));
  dados.nascimentos.machos.push(Math.ceil(dados.nascimentos.total[anoAtual]/2))
  dados.nascimentos.femeas.push(Math.ceil(dados.nascimentos.total[anoAtual]/2))
}

function calcularPerdas() {
  dados.perdas.borregos.push(Math.ceil(dados.nascimentos.machos[anoAtual] * (parametros.mortalidadeAbaixoDe1Ano / 100)));
  dados.perdas.borregas.push(Math.ceil(dados.nascimentos.femeas[anoAtual] * (parametros.mortalidadeAbaixoDe1Ano / 100)));
  dados.perdas.femeas.push(Math.ceil(dados.quantidade.femeas[anoAtual] * (parametros.mortalidadeAcimaDe1Ano / 100))); 
}

function calcularDescartes() {
  dados.descartes.femeas.push(Math.ceil(dados.quantidade.femeas[anoAtual] * (parametros.taxaDescartes / 100)));
}

function calcularReposicaoFemeas() {
  if (dados.quantidade.femeas[anoAtual] + dados.quantidade.femeas[anoAtual] * (parametros.crescimento / 100) < parametros.maxFemeas) {
    dados.reposicao.borregas.push(Math.ceil(dados.quantidade.femeas[anoAtual] * (parametros.crescimento / 100) + dados.perdas.femeas[anoAtual] + dados.descartes.femeas[anoAtual]));
  } else if (dados.quantidade.femeas[anoAtual] + dados.quantidade.femeas[anoAtual] * (parametros.crescimento / 100) == parametros.maxFemeas) {
    dados.reposicao.borregas.push(dados.perdas.femeas[anoAtual] + dados.descartes.femeas[anoAtual]);
  } else {
    dados.reposicao.borregas.push((dados.quantidade.femeas[anoAtual] - dados.perdas.femeas[anoAtual] - dados.descartes.femeas[anoAtual] - parametros.maxFemeas) * -1);
  }
}

function calcularVendas() {
  dados.vendas.borregos.push((dados.nascimentos.machos[anoAtual] - dados.perdas.borregos[anoAtual]));
  dados.compras.borregos.push(dados.reposicao.machos[anoAtual]);

  if ((dados.nascimentos.femeas[anoAtual] - dados.perdas.borregas[anoAtual] - dados.reposicao.borregas[anoAtual]) > 0) {
    dados.vendas.borregas.push(dados.nascimentos.femeas[anoAtual] - dados.perdas.borregas[anoAtual] - dados.reposicao.borregas[anoAtual]);
    dados.compras.borregas.push(0)
  } 
  else if((dados.nascimentos.femeas[anoAtual] - dados.perdas.borregas[anoAtual] - dados.reposicao.borregas[anoAtual]) == 0) {
    dados.vendas.borregas.push(0)
    dados.compras.borregas.push(0)
  }
  else {
    dados.compras.borregas.push((dados.nascimentos.femeas[anoAtual] - dados.perdas.borregas[anoAtual] - dados.reposicao.borregas[anoAtual]) *-1);
    dados.vendas.borregas.push(0)
  } 
}

function calcularEstoque() {
  dados.estoqueFinal.femeas[anoAtual] = dados.quantidade.femeas[anoAtual] - dados.perdas.femeas[anoAtual] - dados.descartes.femeas[anoAtual];
}

function calcularPeso() {
  dados.peso.machos.push(dados.quantidade.machos[anoAtual] * parametros.pesoMedio.machos);
  dados.peso.femeas.push(dados.estoqueFinal.femeas[anoAtual] * parametros.pesoMedio.femeas + dados.reposicao.borregas[anoAtual] * parametros.pesoMedio.borregas);
  dados.peso.total.push(dados.peso.machos[anoAtual] + dados.peso.femeas[anoAtual])
}

function calcularEUA() {
  dados.Eua.femeas.push((Math.pow(parametros.pesoMedio.femeas, 0.75) / Math.pow(450, 0.75)) * dados.estoqueFinal.femeas[anoAtual] + (Math.pow(parametros.pesoMedio.borregas, 0.75) / Math.pow(450, 0.75)) * dados.reposicao.borregas[anoAtual]);
  dados.Eua.machos.push((Math.pow(parametros.pesoMedio.machos, 0.75) / Math.pow(450, 0.75)) * dados.quantidade.machos[anoAtual]);
  dados.Eua.total.push(dados.Eua.femeas[anoAtual] + dados.Eua.machos[anoAtual]);
}

function calcularCusto() {
  dados.receita.push(dados.vendas.borregos[anoAtual] * parametros.pesoAbate * parametros.precoKg + dados.vendas.borregas[anoAtual] * parametros.pesoAbate * parametros.precoKg); //O dinheiro usado pra comprar novas borregas, deve sair daqui?
  // custeioReal.push(receita[anoAtual] * (custeio / 100));
  // totalReal.push(receita[anoAtual] * (custeioTotal / 100));
  // lucro.push(receita[anoAtual] - totalReal[anoAtual]);
}

function atualizarRebanho() {
  dados.quantidade.femeas.push(dados.estoqueFinal.femeas[anoAtual] + dados.reposicao.borregas[anoAtual]);
}

function mostrarInformacoes() {
  calcularReposicaoMachos();
  M.textContent = dados.quantidade.machos[controlador];
  F.textContent = dados.quantidade.femeas[controlador];
  calcularNascimentos();
  N[0].textContent = dados.nascimentos.machos[controlador];
  N[1].textContent = dados.nascimentos.femeas[controlador];
  calcularPerdas();
  P.textContent = dados.perdas.femeas[controlador];
  PA[0].textContent = dados.perdas.borregos[controlador];
  PA[1].textContent = dados.perdas.borregas[controlador];
  calcularDescartes();
  D.textContent = dados.descartes.femeas[controlador];
  calcularReposicaoFemeas();
  RF.textContent = dados.reposicao.borregas[controlador];
  RM.textContent = dados.reposicao.machos[controlador];
  calcularVendas();
  VM.textContent = dados.vendas.borregos[controlador];
  CM.textContent = dados.compras.borregos[controlador];
  VF.textContent = dados.vendas.borregas[controlador];
  CF.textContent = dados.compras.borregas[controlador];;
  calcularEstoque();
  EM.textContent = dados.quantidade.machos[controlador];
  EF.textContent = dados.estoqueFinal.femeas[controlador];
  ER.textContent = dados.reposicao.borregas[controlador];
  calcularPeso();
  PM.textContent = dados.peso.machos[controlador].toFixed(2) + "Kg";
  PF.textContent = dados.peso.femeas[controlador].toFixed(2) + "Kg";
  PT.textContent = dados.peso.total[controlador].toFixed(2) + "Kg";
  calcularEUA();
  EUAM.textContent = dados.Eua.machos[controlador].toFixed(2);
  EUAF.textContent = dados.Eua.femeas[controlador].toFixed(2);
  EUAT.textContent = dados.Eua.total[controlador].toFixed(2);
  calcularCusto();
  RE.textContent = "R$" + dados.receita[controlador].toFixed(2);
  // C.textContent = "R$" + custeioReal[0].toFixed(2);
  // CT.textContent = "R$" + totalReal[0].toFixed(2);
  // L.textContent = "R$" + lucro[0].toFixed(2);
  A[0].textContent = "Ano "+ (controlador+1);
  A[1].textContent = "Ano "+ (controlador+1);
  atualizarRebanho();
}

/*
console.log("Rebanho: Macho: "+ machos[anoAtual] +" Fêmeas: "+ femeas[anoAtual]);
console.log("Nascimentos: Machos: "+ nascimentos[anoAtual] +" Fêmeas: "+ nascimentos[anoAtual]);
console.log("Perdas: Adultos: Fêmeas: "+ perdas[anoAtual] +" Abaixo de 1 ano: M: "+ perdas1Ano[anoAtual] +" F: "+ perdas1Ano[anoAtual]);
console.log("Descartes: "+ descartes[anoAtual]);
console.log("Reposição das Fêmeas: "+ reposicaoF[anoAtual]);
console.log("Vendas: Macho: "+ vendasM[anoAtual] +" " mostrarVenda() +"Fêmeas: "+ Venda_Compra);
console.log("Estoque Final: Macho: "+ machos[anoAtual] +" Fêmeas: "+ femeas[anoAtual] +" Fêmeas Abaixo de 1 ano: "+ reposicaoF[anoAtual]);
console.log("Peso Médio: Macho: "+ pesoM[anoAtual].toFixed(2) +"Kg Fêmeas: "+ pesoF[anoAtual].toFixed(2) +"Kg");
console.log("E.U.A Machos: "+ machosEUA[anoAtual].toFixed(2) +" E.U.A Fêmeas: "+ femeasEUA[anoAtual].toFixed(2) +" Total: "+ totalEUA[anoAtual].toFixed(2));
console.log("Receita: R$"+ receita[anoAtual].toFixed(2) +" Custo em real: R$"+ custeioReal[anoAtual].toFixed(2));
console.log("Custo Total: R$"+ totalReal[anoAtual].toFixed(2));
console.log("Lucro: R$"+ lucro[anoAtual].toFixed(2));
*/

/*
function calcularReposicaoMachos() {
  const anterior = dados.quantidade.machos[anoAtual - 1] || 0;
  dados.quantidade.machos[anoAtual] = Math.ceil(dados.quantidade.femeas[anoAtual] / parametros.machosPorFemeas);
  dados.reposicao.machos[anoAtual] = Math.max(0, dados.quantidade.machos[anoAtual] - anterior);
}
*/

/*
function avancar() {
  if(controlador < (dados.quantidade.machos.length-1)){
    controlador++;
    M.textContent = dados.quantidade.machos[controlador];
    F.textContent = dados.quantidade.femeas[controlador];
    N[0].textContent = dados.nascimentos.machos[controlador];
    N[1].textContent = dados.nascimentos.femeas[controlador];
    P.textContent = dados.perdas.femeas[controlador];
    PA[0].textContent = dados.perdas.borregos[controlador]; //Verificar a ordem
    PA[1].textContent = dados.perdas.borregas[controlador];
    D.textContent = dados.descartes.femeas[controlador];
    RF.textContent = dados.reposicao.borregas[controlador];
    RM.textContent = dados.reposicao.machos[controlador];
    VM.textContent = dados.vendas.borregos[controlador];
    CM.textContent = dados.compras.borregos[controlador];
    VF.textContent = dados.vendas.borregas[controlador];
    CF.textContent = dados.compras.borregas[controlador];
    EM.textContent = dados.quantidade.machos[controlador];
    EF.textContent = dados.estoqueFinal.femeas[controlador];
    ER.textContent = dados.reposicao.borregas[controlador];
    PM.textContent = dados.peso.machos[controlador].toFixed(2) + "Kg";
    PF.textContent = dados.peso.femeas[controlador].toFixed(2) + "Kg";
    PT.textContent = dados.peso.total[controlador].toFixed(2) + "Kg";
    EUAM.textContent = dados.Eua.machos[controlador].toFixed(2);
    EUAF.textContent = dados.Eua.femeas[controlador].toFixed(2);
    EUAT.textContent = dados.Eua.total[controlador].toFixed(2);
    RE.textContent = "R$" + dados.receita[controlador].toFixed(2);
    // C.textContent = "R$" + custeioReal[controlador].toFixed(2);
    // CT.textContent = "R$" + totalReal[controlador].toFixed(2);
    // L.textContent = "R$" + lucro[controlador].toFixed(2);
    A[0].textContent = "Ano "+ (controlador+1);
    A[1].textContent = "Ano "+ (controlador+1);
    atualizarTabela();
  }
}

function retroceder() {
  if(controlador > 0){
    controlador--;
    M.textContent = dados.quantidade.machos[controlador];
    F.textContent = dados.quantidade.femeas[controlador];
    N[0].textContent = dados.nascimentos.machos[controlador];
    N[1].textContent = dados.nascimentos.femeas[controlador];
    P.textContent = dados.perdas.femeas[controlador];
    PA[0].textContent = dados.perdas.borregos[controlador];
    PA[1].textContent = dados.perdas.borregas[controlador];
    D.textContent = dados.descartes.femeas[controlador];
    RF.textContent = dados.reposicao.borregas[controlador];
    RM.textContent = dados.reposicao.machos[controlador];
    VM.textContent = dados.vendas.borregos[controlador];
    CM.textContent = dados.compras.borregos[controlador];
    VF.textContent = dados.vendas.borregas[controlador];
    CF.textContent = dados.compras.borregas[controlador];;
    EM.textContent = dados.quantidade.machos[controlador];
    EF.textContent = dados.estoqueFinal.femeas[controlador];
    ER.textContent = dados.reposicao.borregas[controlador];
    PM.textContent = dados.peso.machos[controlador].toFixed(2) + "Kg";
    PF.textContent = dados.peso.femeas[controlador].toFixed(2) + "Kg";
    PT.textContent = dados.peso.total[controlador].toFixed(2) + "Kg";
    EUAM.textContent = dados.Eua.machos[controlador].toFixed(2);
    EUAF.textContent = dados.Eua.femeas[controlador].toFixed(2);
    EUAT.textContent = dados.Eua.total[controlador].toFixed(2);
    RE.textContent = "R$" + dados.receita[controlador].toFixed(2);
    // C.textContent = "R$" + custeioReal[controlador].toFixed(2);
    // CT.textContent = "R$" + totalReal[controlador].toFixed(2);
    // L.textContent = "R$" + lucro[controlador].toFixed(2);
    A[0].textContent = "Ano "+ (controlador+1);
    A[1].textContent = "Ano "+ (controlador+1);
    atualizarTabela();
  }
}
*/

/*
export let anoAtual = 0, controlador = 0, numAnos = 0;

export const dados = {
  quantidade: { machos: [], femeas: [50] },
  nascimentos: { machos: [], femeas: [], total: [] },
  perdas: { femeas: [], borregos: [], borregas: [] },
  descartes: { femeas: [] },
  reposicao: { machos: [], borregas: [] },
  vendas: { borregos:[], borregas:[] },
  compras: { borregos:[], borregas:[] },
  estoqueFinal: { machos: [], femeas: [], borregas: [] },
  peso: { machos: [], femeas: [], total: [] },
  Eua: { machos: [], femeas: [], total: [] },
  receita: [],
};

export const parametros = {
  maxFemeas: 200,
  machosPorFemeas: 40,
  partosPorAno: 1,
  prolificidade: 1.2,
  fertilidade: 70,
  mortalidadeAbaixoDe1Ano: 5,
  mortalidadeAcimaDe1Ano: 2.5,
  idadeDesmame: 16,
  pesoAbate: 30,
  pesoMedio: { machos: 60, femeas: 55, borregas: 41.25 },
  taxaDescartes: 10,
  crescimento: 30,
  precoKg: 5,
  custeio: 24,
  //custeioTotal: 39,
};

export const suplementos = {
  materiaSeca: {
    femeas: 3.5,
    machos: 3.5,
    borregos: 3.5,
    borregas1: 4,
    borregas2: 4
  },
  diasSuplementos: {
    femeas: 240,
    machos: 365,
    borregos: 90,
    borregas1: 90,
    borregas2: 180
  },
  volumoso: {
    femeas: 60,
    machos: 60,
    borregos: 60,
    borregas1: 60,
    borregas2: 60
  },
  materiaSecaVolumoso: {
    femeas: 30,
    machos: 30,
    borregos: 30,
    borregas1: 30,
    borregas2: 30
  },
  materiaSecaConcentrado: {
    femeas: 92,
    machos: 92,
    borregos: 92,
    borregas1: 92,
    borregas2: 92
  }
};
*/
