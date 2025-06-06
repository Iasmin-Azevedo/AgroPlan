let perdas = [], perdas1Ano = [], reposicaoM = [],reposicaoF = [], vendasM = [],
  comprasM = [], descartes = [], vendasF = [], pesoM = [],
  pesoF = [], pesoT = [], femeasEUA = [], machosEUA = [], totalEUA = [],
  receita = [], custeioReal = [], totalReal = [], lucro = [];
let maxfemeas = 0, fertilidade = 0, prolificidade = 0, partos_porAno = 0,
  taxa_Descartes = 0, custeio = 0, custeioTotal = 0, preco_kg = 0,
  crescimento = 0, machos_femeas = 0, mortalidade = 0, mortalidade_1Ano = 0;
export let femeas = [], machos = [], femeasFinal = [], nascimentos = [], pesoMedioM = 0, pesoMedioF = 0,
  pesoMedioR = 0, idade_desmame = 0, peso_abate = 0,
  femeas_materiaSeca, machos_materiaSeca, borregos_materiaSeca, borregas_materiaSeca1, borregas_materiaSeca2,
  femeas_diasSuplementos, machos_diasSuplementos, borregos_diasSuplementos, borregas_diasSuplementos1, borregas_diasSuplementos2,
  Fvolumoso, Mvolumoso, Bvolumoso, BA1volumoso, BA2volumoso,
  FmateriaSeca_volumoso, MmateriaSeca_volumoso, BmateriaSeca_volumoso, BA1materiaSeca_volumoso, BA2materiaSeca_volumoso, 
  FmateriaSeca_concentrado, MmateriaSeca_concentrado, BmateriaSeca_concentrado, BA1materiaSeca_concentrado, BA2materiaSeca_concentrado,
  anoAtual = 0, controlador = 0, numAnos = 0;
import { calcularInformacoes, atualizarTabela } from './Add.js';

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
      femeas.push(parseFloat(formValues.femaleInput));
      maxfemeas = parseFloat(formValues.maxFemaleInput);
      machos_femeas = parseFloat(formValues.maleFemaleInput);
      partos_porAno = parseFloat(formValues.partosPorAnoInput);
      prolificidade = parseFloat(formValues.prolificidadeInput);
      fertilidade = parseFloat(formValues.fertilidadeInput);
      mortalidade_1Ano = parseFloat(formValues.mortalidade1AnoInput);
      mortalidade = parseFloat(formValues.mortalidadeInput);
      idade_desmame = parseFloat(formValues.idadeDesmameInput);
      peso_abate = parseFloat(formValues.pesoAbateInput);
      pesoMedioF = parseFloat(formValues.pesoMedioMatrizInput);
      pesoMedioR = parseFloat(formValues.pesoMedioBorregaInput);
      pesoMedioM = parseFloat(formValues.pesoMedioReprodutorInput);
      taxa_Descartes = parseFloat(formValues.descarteInput);
      crescimento = parseFloat(formValues.crescimentoInput);
      preco_kg = parseFloat(formValues.precoKgInput);
      custeio = parseFloat(formValues.custeioInput);
      custeioTotal = parseFloat(formValues.custeioTotalInput);
      numAnos = parseFloat(formValues.anosSimuladosInput);

      femeas_materiaSeca = parseFloat(formValues.FmateriaSecaInput) / 100;
      machos_materiaSeca = parseFloat(formValues.MmateriaSecaInput) / 100;
      borregos_materiaSeca = parseFloat(formValues.BmateriaSecaInput) / 100;
      borregas_materiaSeca1 = parseFloat(formValues.BA1materiaSecaInput) / 100;
      borregas_materiaSeca2 = parseFloat(formValues.BA2materiaSecaInput) / 100;
      femeas_diasSuplementos = parseFloat(formValues.FdiasSuplementosInput);
      machos_diasSuplementos = parseFloat(formValues.MdiasSuplementosInput);
      borregos_diasSuplementos = parseFloat(formValues.BdiasSuplementosInput);
      borregas_diasSuplementos1 = parseFloat(formValues.BA1diasSuplementosInput);
      borregas_diasSuplementos2 = parseFloat(formValues.BA2diasSuplementosInput);
      Fvolumoso = parseFloat(formValues.FvolumosoInput) / 100;
      Mvolumoso = parseFloat(formValues.MvolumosoInput) / 100;
      Bvolumoso = parseFloat(formValues.BvolumosoInput) / 100;
      BA1volumoso = parseFloat(formValues.BA1volumosoInput) / 100;
      BA2volumoso = parseFloat(formValues.BA2volumosoInput) / 100;
      FmateriaSeca_volumoso = parseFloat(formValues.FmateriaSeca_volumosoInput) / 100;
      MmateriaSeca_volumoso = parseFloat(formValues.MmateriaSeca_volumosoInput) / 100;
      BmateriaSeca_volumoso = parseFloat(formValues.BmateriaSeca_volumosoInput) / 100;
      BA1materiaSeca_volumoso = parseFloat(formValues.BA1materiaSeca_volumosoInput) / 100;
      BA2materiaSeca_volumoso = parseFloat(formValues.BA2materiaSeca_volumosoInput) / 100;
      FmateriaSeca_concentrado = parseFloat(formValues.FmateriaSeca_concentradoInput) / 100;
      MmateriaSeca_concentrado = parseFloat(formValues.MmateriaSeca_concentradoInput) / 100;
      BmateriaSeca_concentrado = parseFloat(formValues.BmateriaSeca_concentradoInput) / 100;
      BA1materiaSeca_concentrado = parseFloat(formValues.BA1materiaSeca_concentradoInput) / 100;
      BA2materiaSeca_concentrado = parseFloat(formValues.BA2materiaSeca_concentradoInput) / 100;

      // Exibindo o resultado
      while (anoAtual < numAnos) {
        mostrarInformacoes();
        calcularInformacoes();
        anoAtual++;
      }

      const botaoRetroceder = document.getElementById('retroceder');

      botaoRetroceder.addEventListener('click', function(event){
        event.preventDefault();
        retroceder();
      });

      const botaoAvancar = document.getElementById('avancar');

      botaoAvancar.addEventListener('click', function(event){
        event.preventDefault();
        avancar();
      });
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
  machos[anoAtual] = Math.ceil(femeas[anoAtual] / machos_femeas);
  
  if (machos[anoAtual] > machos[(anoAtual-1)]) {
    reposicaoM[anoAtual] = machos[anoAtual] - machos[(anoAtual-1)];
  } else{
    reposicaoM[anoAtual] = 0;
    RM.textContent = "";
  }

}

function calcularNascimentos() {
  nascimentos.push(Math.ceil(((femeas[anoAtual] * (fertilidade / 100) * prolificidade) / 2) * partos_porAno));
}

function calcularPerdas() {
  perdas1Ano.push(Math.ceil(nascimentos[anoAtual] * (mortalidade_1Ano / 100)));
  perdas.push(Math.ceil(femeas[anoAtual] * (mortalidade / 100))); 
}

function calcularDescartes() {
  descartes.push(Math.ceil(femeas[anoAtual] * (taxa_Descartes / 100)));
}

function calcularReposicaoFemeas() {
  if (femeas[anoAtual] + femeas[anoAtual] * (crescimento / 100) < maxfemeas) {
    reposicaoF.push(Math.ceil(femeas[anoAtual] * (crescimento / 100) + perdas[anoAtual] + descartes[anoAtual]));
  } else if (femeas[anoAtual] + femeas[anoAtual] * (crescimento / 100) == maxfemeas) {
    reposicaoF.push(perdas[anoAtual] + descartes[anoAtual]);
  } else {
    reposicaoF.push((femeas[anoAtual] - perdas[anoAtual] - descartes[anoAtual] - maxfemeas) * -1);
  }
}

function calcularVendas() {
  vendasM.push((nascimentos[anoAtual] - perdas1Ano[anoAtual]));
  comprasM.push(reposicaoM[anoAtual]);
  vendasF.push(nascimentos[anoAtual] - perdas1Ano[anoAtual] - reposicaoF[anoAtual]);
  mostrarVendas();
}

function mostrarVendas() {
  if (vendasF[controlador] > 0){
    VF.textContent = vendasF[controlador];
    CF.textContent = "";
  } else if (vendasF[controlador] < 0){
    VF.textContent = "";
    CF.textContent = vendasF[controlador]*-1;
  } 
}

function calcularEstoque() {
  femeasFinal[anoAtual] = femeas[anoAtual] - perdas[anoAtual] - descartes[anoAtual];
}

function calcularPeso() {
  pesoM.push(machos[anoAtual] * pesoMedioM);
  pesoF.push(femeasFinal[anoAtual] * pesoMedioF + reposicaoF[anoAtual] * pesoMedioR);
  pesoT.push(pesoM[anoAtual] + pesoF[anoAtual])
}

function calcularEUA() {
  femeasEUA.push((Math.pow(pesoMedioF, 0.75) / Math.pow(450, 0.75)) * femeasFinal[anoAtual] + (Math.pow(pesoMedioR, 0.75) / Math.pow(450, 0.75)) * reposicaoF[anoAtual]);
  machosEUA.push((Math.pow(pesoMedioM, 0.75) / Math.pow(450, 0.75)) * machos[anoAtual]);
  totalEUA.push(femeasEUA[anoAtual] + machosEUA[anoAtual]);
}

function calcularCusto() {
  receita.push(vendasM[anoAtual] * peso_abate * preco_kg + vendasF[anoAtual] * peso_abate * preco_kg);
  // custeioReal.push(receita[anoAtual] * (custeio / 100));
  // totalReal.push(receita[anoAtual] * (custeioTotal / 100));
  // lucro.push(receita[anoAtual] - totalReal[anoAtual]);
}

function atualizarRebanho() {
  femeas.push(femeasFinal[anoAtual] + reposicaoF[anoAtual]);
}

function avancar() {
  if(controlador < (machos.length-1)){
    controlador++;
    M.textContent = machos[controlador];
    F.textContent = femeas[controlador];
    N[0].textContent = nascimentos[controlador];
    N[1].textContent = nascimentos[controlador];
    P.textContent = perdas[controlador];
    PA[0].textContent = perdas1Ano[controlador];
    PA[1].textContent = perdas1Ano[controlador];
    D.textContent = descartes[controlador];
    RF.textContent = reposicaoF[controlador];
    RM.textContent = reposicaoM[controlador];
    VM.textContent = vendasM[controlador];
    CM.textContent = comprasM[controlador];
    mostrarVendas();
    EM.textContent = machos[controlador];
    EF.textContent = femeas[controlador];
    ER.textContent = reposicaoF[controlador];
    PM.textContent = pesoM[controlador].toFixed(2) + "Kg";
    PF.textContent = pesoF[controlador].toFixed(2) + "Kg";
    PT.textContent = pesoT[controlador].toFixed(2) + "Kg";
    EUAM.textContent = machosEUA[controlador].toFixed(2);
    EUAF.textContent = femeasEUA[controlador].toFixed(2);
    EUAT.textContent = totalEUA[controlador].toFixed(2);
    RE.textContent = "R$" + receita[controlador].toFixed(2);
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
    M.textContent = machos[controlador];
    F.textContent = femeas[controlador];
    N[0].textContent = nascimentos[controlador];
    N[1].textContent = nascimentos[controlador];
    P.textContent = perdas[controlador];
    PA[0].textContent = perdas1Ano[controlador];
    PA[1].textContent = perdas1Ano[controlador];
    D.textContent = descartes[controlador];
    RF.textContent = reposicaoF[controlador];
    RM.textContent = reposicaoM[controlador];
    VM.textContent = vendasM[controlador];
    CM.textContent = comprasM[controlador];
    mostrarVendas();
    EM.textContent = machos[controlador];
    EF.textContent = femeas[controlador];
    ER.textContent = reposicaoF[controlador];
    PM.textContent = pesoM[controlador].toFixed(2) + "Kg";
    PF.textContent = pesoF[controlador].toFixed(2) + "Kg";
    PT.textContent = pesoT[controlador].toFixed(2) + "Kg";
    EUAM.textContent = machosEUA[controlador].toFixed(2);
    EUAF.textContent = femeasEUA[controlador].toFixed(2);
    EUAT.textContent = totalEUA[controlador].toFixed(2);
    RE.textContent = "R$" + receita[controlador].toFixed(2);
    // C.textContent = "R$" + custeioReal[controlador].toFixed(2);
    // CT.textContent = "R$" + totalReal[controlador].toFixed(2);
    // L.textContent = "R$" + lucro[controlador].toFixed(2);
    A[0].textContent = "Ano "+ (controlador+1);
    A[1].textContent = "Ano "+ (controlador+1);
    atualizarTabela();
  }
}

function mostrarInformacoes() {
  calcularReposicaoMachos();
  M.textContent = machos[0];
  F.textContent = femeas[0];
  calcularNascimentos();
  N[0].textContent = nascimentos[0];
  N[1].textContent = nascimentos[0];
  calcularPerdas();
  P.textContent = perdas[0];
  PA[0].textContent = perdas1Ano[0];
  PA[1].textContent = perdas1Ano[0];
  calcularDescartes();
  D.textContent = descartes[0];
  calcularReposicaoFemeas();
  RF.textContent = reposicaoF[0];
  RM.textContent = reposicaoM[0];
  calcularVendas();
  VM.textContent = vendasM[0];
  CM.textContent = comprasM[0];
  calcularEstoque();
  EM.textContent = machos[0];
  EF.textContent = femeasFinal[0];
  ER.textContent = reposicaoF[0];
  calcularPeso();
  PM.textContent = pesoM[0].toFixed(2) + "Kg";
  PF.textContent = pesoF[0].toFixed(2) + "Kg";
  PT.textContent = pesoT[0].toFixed(2) + "Kg";
  calcularEUA();
  EUAM.textContent = machosEUA[0].toFixed(2);
  EUAF.textContent = femeasEUA[0].toFixed(2);
  EUAT.textContent = totalEUA[0].toFixed(2);
  calcularCusto();
  RE.textContent = "R$" + receita[0].toFixed(2);
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
