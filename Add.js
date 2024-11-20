let consumoF = [],
  consumoF_reb = [],
  consumoF_per = [],
  consumoM = [],
  consumoM_reb = [],
  consumoM_per = [],
  consumoB = [],
  consumoB_reb = [],
  consumoB_per = [],
  consumoBA1 = [],
  consumoBA1_reb = [],
  consumoBA1_per = [],
  consumoBA2 = [],
  consumoBA2_reb = [],
  consumoBA2_per = [],
  consumoTotal = [],
  consumoTotal_reb = [],
  consumoTotal_per = [];
let VolF = [],
  VolF_reb = [],
  VolF_per = [],
  VolM = [],
  VolM_reb = [],
  VolM_per = [],
  VolB = [],
  VolB_reb = [],
  VolB_per = [],
  VolBA1 = [],
  VolBA1_reb = [],
  VolBA1_per = [],
  VolBA2 = [],
  VolBA2_reb = [],
  VolBA2_per = [],
  VolTotal = [],
  VolTotal_reb = [],
  VolTotal_per = [],
  VolSecaF = [],
  VolSecaF_reb = [],
  VolSecaF_per = [],
  VolSecaM = [],
  VolSecaM_reb = [],
  VolSecaM_per = [],
  VolSecaB = [],
  VolSecaB_reb = [],
  VolSecaB_per = [],
  VolSecaBA1 = [],
  VolSecaBA1_reb = [],
  VolSecaBA1_per = [],
  VolSecaBA2 = [],
  VolSecaBA2_reb = [],
  VolSecaBA2_per = [],
  VolSecaTotal = [],
  VolSecaTotal_reb = [],
  VolSecaTotal_per = [];
let ConcenF = [],
  ConcenF_reb = [],
  ConcenF_per = [],
  ConcenM = [],
  ConcenM_reb = [],
  ConcenM_per = [],
  ConcenB = [],
  ConcenB_reb = [],
  ConcenB_per = [],
  ConcenBA1 = [],
  ConcenBA1_reb = [],
  ConcenBA1_per = [],
  ConcenBA2 = [],
  ConcenBA2_reb = [],
  ConcenBA2_per = [],
  ConcenTotal = [],
  ConcenTotal_reb = [],
  ConcenTotal_per = [],
  ConcenSecaF = [],
  ConcenSecaF_reb = [],
  ConcenSecaF_per = [],
  ConcenSecaM = [],
  ConcenSecaM_reb = [],
  ConcenSecaM_per = [],
  ConcenSecaB = [],
  ConcenSecaB_reb = [],
  ConcenSecaB_per = [],
  ConcenSecaBA1 = [],
  ConcenSecaBA1_reb = [],
  ConcenSecaBA1_per = [],
  ConcenSecaBA2 = [],
  ConcenSecaBA2_reb = [],
  ConcenSecaBA2_per = [],
  ConcenSecaTotal = [],
  ConcenSecaTotal_reb = [],
  ConcenSecaTotal_per = [];
import {
    femeas,
    machos,
    nascimentos,
    pesoMedioM,
    pesoMedioF,
    pesoMedioR,
    peso_abate,
    idade_desmame,
    femeas_materiaSeca,
    machos_materiaSeca,
    borregos_materiaSeca,
    borregas_materiaSeca1,
    borregas_materiaSeca2,
    femeas_diasSuplementos,
    machos_diasSuplementos,
    borregos_diasSuplementos,
    borregas_diasSuplementos1,
    borregas_diasSuplementos2,
    Fvolumoso,
    Mvolumoso,
    Bvolumoso,
    BA1volumoso,
    BA2volumoso,
    FmateriaSeca_volumoso,
    MmateriaSeca_volumoso,
    BmateriaSeca_volumoso,
    BA1materiaSeca_volumoso,
    BA2materiaSeca_volumoso,
    FmateriaSeca_concentrado,
    MmateriaSeca_concentrado,
    BmateriaSeca_concentrado,
    BA1materiaSeca_concentrado,
    BA2materiaSeca_concentrado,
    anoAtual,
    controlador
} from "./Index.js";

var F = document.querySelector("#consumoF");
var FR = document.querySelector("#consumoFR");
var FP = document.querySelector("#consumoFP");
var M = document.querySelector("#consumoM");
var MR = document.querySelector("#consumoMR");
var MP = document.querySelector("#consumoMP");
var B = document.querySelector("#consumoB");
var BR = document.querySelector("#consumoBR");
var BP = document.querySelector("#consumoBP");
var BA1 = document.querySelector("#consumoBA1");
var BA1R = document.querySelector("#consumoBA1R");
var BA1P = document.querySelector("#consumoBA1P");
var BA2 = document.querySelector("#consumoBA2");
var BA2R = document.querySelector("#consumoBA2R");
var BA2P = document.querySelector("#consumoBA2P");
var T = document.querySelector("#consumoT");
var TR = document.querySelector("#consumoTR");
var TP = document.querySelector("#consumoTP");

var VSF = document.querySelector("#volumosoF");
var VSFR = document.querySelector("#volumosoFR");
var VSFP = document.querySelector("#volumosoFP");
var VSM = document.querySelector("#volumosoM");
var VSMR = document.querySelector("#volumosoMR");
var VSMP = document.querySelector("#volumosoMP");
var VSB = document.querySelector("#volumosoB");
var VSBR = document.querySelector("#volumosoBR");
var VSBP = document.querySelector("#volumosoBP");
var VSBA1 = document.querySelector("#volumosoBA1");
var VSBA1R = document.querySelector("#volumosoBA1R");
var VSBA1P = document.querySelector("#volumosoBA1P");
var VSBA2 = document.querySelector("#volumosoBA2");
var VSBA2R = document.querySelector("#volumosoBA2R");
var VSBA2P = document.querySelector("#volumosoBA2P");

var VST = document.querySelector("#volumosoT");
var VSTR = document.querySelector("#volumosoTR");
var VSTP = document.querySelector("#volumosoTP");
var VCF = document.querySelector("#volumosoCF");
var VCFR = document.querySelector("#volumosoCFR");
var VCFP = document.querySelector("#volumosoCFP");
var VCM = document.querySelector("#volumosoCM");
var VCMR = document.querySelector("#volumosoCMR");
var VCMP = document.querySelector("#volumosoCMP");
var VCB = document.querySelector("#volumosoCB");
var VCBR = document.querySelector("#volumosoCBR");
var VCBP = document.querySelector("#volumosoCBP");
var VCBA1 = document.querySelector("#volumosoCBA1");
var VCBA1R = document.querySelector("#volumosoCBA1R");
var VCBA1P = document.querySelector("#volumosoCBA1P");
var VCBA2 = document.querySelector("#volumosoCBA2");
var VCBA2R = document.querySelector("#volumosoCBA2R");
var VCBA2P = document.querySelector("#volumosoCBA2P");
var VCT = document.querySelector("#volumosoCT");
var VCTR = document.querySelector("#volumosoCTR");
var VCTP = document.querySelector("#volumosoCTP");

var CSF = document.querySelector("#concentradoF");
var CSFR = document.querySelector("#concentradoFR");
var CSFP = document.querySelector("#concentradoFP");
var CSM = document.querySelector("#concentradoM");
var CSMR = document.querySelector("#concentradoMR");
var CSMP = document.querySelector("#concentradoMP");
var CSB = document.querySelector("#concentradoB");
var CSBR = document.querySelector("#concentradoBR");
var CSBP = document.querySelector("#concentradoBP");
var CSBA1 = document.querySelector("#concentradoBA1");
var CSBA1R = document.querySelector("#concentradoBA1R");
var CSBA1P = document.querySelector("#concentradoBA1P");
var CSBA2 = document.querySelector("#concentradoBA2");
var CSBA2R = document.querySelector("#concentradoBA2R");
var CSBA2P = document.querySelector("#concentradoBA2P");
var CST = document.querySelector("#concentradoT");
var CSTR = document.querySelector("#concentradoTR");
var CSTP = document.querySelector("#concentradoTP");

var CCF = document.querySelector("#concentradoCF");
var CCFR = document.querySelector("#concentradoCFR");
var CCFP = document.querySelector("#concentradoCFP");
var CCM = document.querySelector("#concentradoCM");
var CCMR = document.querySelector("#concentradoCMR");
var CCMP = document.querySelector("#concentradoCMP");
var CCB = document.querySelector("#concentradoCB");
var CCBR = document.querySelector("#concentradoCBR");
var CCBP = document.querySelector("#concentradoCBP");
var CCBA1 = document.querySelector("#concentradoCBA1");
var CCBA1R = document.querySelector("#concentradoCBA1R");
var CCBA1P = document.querySelector("#concentradoCBA1P");
var CCBA2 = document.querySelector("#concentradoCBA2");
var CCBA2R = document.querySelector("#concentradoCBA2R");
var CCBA2P = document.querySelector("#concentradoCBA2P");
var CCT = document.querySelector("#concentradoCT");
var CCTR = document.querySelector("#concentradoCTR");
var CCTP = document.querySelector("#concentradoCTP");

function calcularConsumoTotal(){
    consumoF.push(pesoMedioF * femeas_materiaSeca);
    consumoF_reb.push(consumoF[anoAtual] * femeas[anoAtual]);
    consumoF_per.push(consumoF_reb[anoAtual] * femeas_diasSuplementos);
    consumoM.push(pesoMedioM * machos_materiaSeca);
    consumoM_reb.push(consumoM[anoAtual] * machos[anoAtual]);
    consumoM_per.push(consumoM_reb[anoAtual] * machos_diasSuplementos);
    consumoB.push(((idade_desmame + peso_abate) / 2) * borregos_materiaSeca);
    consumoB_reb.push(consumoB[anoAtual] * nascimentos[anoAtual]);
    consumoB_per.push(consumoB_reb[anoAtual] * borregos_diasSuplementos);
    consumoBA1.push(((idade_desmame + peso_abate) / 2) * borregas_materiaSeca1);
    consumoBA1_reb.push(consumoBA1[anoAtual] * nascimentos[anoAtual]);
    consumoBA1_per.push(consumoBA1_reb[anoAtual] * borregas_diasSuplementos1);
    consumoBA2.push(((peso_abate + pesoMedioR) / 2) * borregas_materiaSeca2);
    consumoBA2_reb.push(consumoBA2[anoAtual] * nascimentos[anoAtual]);
    consumoBA2_per.push(consumoBA2_reb[anoAtual] * borregas_diasSuplementos2);
    consumoTotal.push(consumoF[anoAtual] + consumoM[anoAtual] + consumoB[anoAtual] + consumoBA1[anoAtual] + consumoBA2[anoAtual]);
     consumoTotal_reb.push(consumoF_reb[anoAtual] + consumoM_reb[anoAtual] + consumoB_reb[anoAtual] + consumoBA1_reb[anoAtual] + consumoBA2_reb[anoAtual]);
    consumoTotal_per.push(consumoF_per[anoAtual] + consumoM_per[anoAtual] + consumoB_per[anoAtual] + consumoBA1_per[anoAtual] + consumoBA2_per[anoAtual]);
}

function calcularVolumoso(){
    VolF.push(consumoF[anoAtual] * Fvolumoso);
    VolF_reb.push(consumoF_reb[anoAtual] * Fvolumoso);
    VolF_per.push(consumoF_per[anoAtual] * Fvolumoso);
    VolM.push(consumoM[anoAtual] * Mvolumoso);
    VolM_reb.push(consumoM_reb[anoAtual] * Mvolumoso);
    VolM_per.push(consumoM_per[anoAtual] * Mvolumoso);
    VolB.push(consumoB[anoAtual] * Bvolumoso);
    VolB_reb.push(consumoB_reb[anoAtual] * Bvolumoso);
    VolB_per.push(consumoB_per[anoAtual] * Bvolumoso);
    VolBA1.push(consumoBA1[anoAtual] * BA1volumoso);
    VolBA1_reb.push(consumoBA1_reb[anoAtual] * BA1volumoso);
    VolBA1_per.push(consumoBA1_per[anoAtual] * BA1volumoso);
    VolBA2.push(consumoBA2[anoAtual] * BA2volumoso);
    VolBA2_reb.push(consumoBA2_reb[anoAtual] * BA2volumoso);
    VolBA2_per.push(consumoBA2_per[anoAtual] * BA2volumoso);
    VolTotal.push(VolF[anoAtual] + VolM[anoAtual] + VolB[anoAtual] + VolBA1[anoAtual] + VolBA2[anoAtual]);
    VolTotal_reb.push(VolF_reb[anoAtual] + VolM_reb[anoAtual] + VolB_reb[anoAtual] + VolBA1_reb[anoAtual] + VolBA2_reb[anoAtual]);
    VolTotal_per.push(VolF_per[anoAtual] + VolM_per[anoAtual] + VolB_per[anoAtual] + VolBA1_per[anoAtual] + VolBA2_per[anoAtual]);
}

function calcularMateriaSecaVolumoso(){
  VolSecaF.push(VolF[anoAtual] / FmateriaSeca_volumoso);
  VolSecaF_reb.push(VolF_reb[anoAtual] / FmateriaSeca_volumoso);
  VolSecaF_per.push(VolF_per[anoAtual] / FmateriaSeca_volumoso);
  VolSecaM.push(VolM[anoAtual] / MmateriaSeca_volumoso);
  VolSecaM_reb.push(VolM_reb[anoAtual] / MmateriaSeca_volumoso);
  VolSecaM_per.push(VolM_per[anoAtual] / MmateriaSeca_volumoso);
  VolSecaB.push(VolB[anoAtual] / BmateriaSeca_volumoso);
  VolSecaB_reb.push(VolB_reb[anoAtual] / BmateriaSeca_volumoso);
  VolSecaB_per.push(VolB_per[anoAtual] /BmateriaSeca_volumoso);
  VolSecaBA1.push(VolBA1[anoAtual] / BA1materiaSeca_volumoso);
  VolSecaBA1_reb.push(VolBA1_reb[anoAtual] / BA1materiaSeca_volumoso);
  VolSecaBA1_per.push(VolBA1_per[anoAtual] /BA1materiaSeca_volumoso);
  VolSecaBA2.push(VolBA2[anoAtual] / BA2materiaSeca_volumoso);
  VolSecaBA2_reb.push(VolBA2_reb[anoAtual] / BA2materiaSeca_volumoso);
  VolSecaBA2_per.push(VolBA2_per[anoAtual] / BA2materiaSeca_volumoso);
  VolSecaTotal.push(VolSecaF[anoAtual] + VolSecaM[anoAtual] + VolSecaB[anoAtual] + VolSecaBA1[anoAtual] + VolSecaBA2[anoAtual]);
  VolSecaTotal_reb.push(VolSecaF_reb[anoAtual] + VolSecaM_reb[anoAtual] + VolSecaB_reb[anoAtual] + VolSecaBA1_reb[anoAtual] + VolSecaBA2_reb[anoAtual]);
  VolSecaTotal_per.push(VolSecaF_per[anoAtual] + VolSecaM_per[anoAtual] + VolSecaB_per[anoAtual] + VolSecaBA1_per[anoAtual] + VolSecaBA2_per[anoAtual]);
}

function calcularConcentrado(){
    ConcenF.push(consumoF[anoAtual] - VolF[anoAtual]);
    ConcenF_reb.push(consumoF_reb[anoAtual] - VolF_reb[anoAtual]);
    ConcenF_per.push(consumoF_per[anoAtual] - VolF_per[anoAtual]);
    ConcenM.push(consumoM[anoAtual] - VolM[anoAtual]);
    ConcenM_reb.push(consumoM_reb[anoAtual] - VolM_reb[anoAtual]);
    ConcenM_per.push(consumoM_per[anoAtual] - VolM_per[anoAtual]);
    ConcenB.push(consumoB[anoAtual] - VolB[anoAtual]);
    ConcenB_reb.push(consumoB_reb[anoAtual] - VolB_reb[anoAtual]);
    ConcenB_per.push(consumoB_per[anoAtual] - VolB_per[anoAtual]);
    ConcenBA1.push(consumoBA1[anoAtual] - VolBA1[anoAtual]);
    ConcenBA1_reb.push(consumoBA1_reb[anoAtual] - VolBA1_reb[anoAtual]);
    ConcenBA1_per.push(consumoBA1_per[anoAtual] - VolBA1_per[anoAtual]);
    ConcenBA2.push(consumoBA2[anoAtual] - VolBA2[anoAtual]);
    ConcenBA2_reb.push(consumoBA2_reb[anoAtual] - VolBA2_reb[anoAtual]);
    ConcenBA2_per.push(consumoBA2_per[anoAtual] - VolBA2_per[anoAtual]);
    ConcenTotal.push(ConcenF[anoAtual] + ConcenM[anoAtual] + ConcenB[anoAtual] + ConcenBA1[anoAtual] + ConcenBA2[anoAtual]);
    ConcenTotal_reb.push(ConcenF_reb[anoAtual] + ConcenM_reb[anoAtual] + ConcenB_reb[anoAtual] + ConcenBA1_reb[anoAtual] + ConcenBA2_reb[anoAtual]);
    ConcenTotal_per.push(ConcenF_per[anoAtual] + ConcenM_per[anoAtual] + ConcenB_per[anoAtual] + ConcenBA1_per[anoAtual] + ConcenBA2_per[anoAtual]);
  }

function calcularMateriaSecaConcentrado(){
    ConcenSecaF.push(ConcenF[anoAtual] / FmateriaSeca_concentrado);
    ConcenSecaF_reb.push(ConcenF_reb[anoAtual] / FmateriaSeca_concentrado);
    ConcenSecaF_per.push(ConcenF_per[anoAtual] / FmateriaSeca_concentrado);
    ConcenSecaM.push(ConcenM[anoAtual] / MmateriaSeca_concentrado);
    ConcenSecaM_reb.push(ConcenM_reb[anoAtual] / MmateriaSeca_concentrado);
    ConcenSecaM_per.push(ConcenM_per[anoAtual] / MmateriaSeca_concentrado);
    ConcenSecaB.push(ConcenB[anoAtual] / BmateriaSeca_concentrado);
    ConcenSecaB_reb.push(ConcenB_reb[anoAtual] / BmateriaSeca_concentrado);
    ConcenSecaB_per.push(ConcenB_per[anoAtual] / BmateriaSeca_concentrado);
    ConcenSecaBA1.push(ConcenBA1[anoAtual] / BA1materiaSeca_concentrado);
    ConcenSecaBA1_reb.push(ConcenBA1_reb[anoAtual] / BA1materiaSeca_concentrado);
    ConcenSecaBA1_per.push(ConcenBA1_per[anoAtual] / BA1materiaSeca_concentrado);
    ConcenSecaBA2.push(ConcenBA2[anoAtual] / BA2materiaSeca_concentrado);
    ConcenSecaBA2_reb.push(ConcenBA2_reb[anoAtual] / BA2materiaSeca_concentrado);
    ConcenSecaBA2_per.push(ConcenBA2_per[anoAtual] / BA2materiaSeca_concentrado);
    ConcenSecaTotal.push(ConcenSecaF[anoAtual] + ConcenSecaM[anoAtual] + ConcenSecaB[anoAtual] + ConcenSecaBA1[anoAtual] + ConcenSecaBA2[anoAtual]);
    ConcenSecaTotal_reb.push(ConcenSecaF_reb[anoAtual] + ConcenSecaM_reb[anoAtual] + ConcenSecaB_reb[anoAtual] + ConcenSecaBA1_reb[anoAtual] + ConcenSecaBA2_reb[anoAtual]);
    ConcenSecaTotal_per.push(ConcenSecaF_per[anoAtual] + ConcenSecaM_per[anoAtual] + ConcenSecaB_per[anoAtual] + ConcenSecaBA1_per[anoAtual] + ConcenSecaBA2_per[anoAtual]);
  }

/*
    console.log("TOTAL:          A/D    R/D     R/P");
    console.log("Matrizes:       "+ consumoF[anoAtual].toFixed(2) +"   "+ consumoF_reb[anoAtual].toFixed(2) +"   "+ consumoF_per[anoAtual].toFixed(2));
    console.log("Reprodutores:   "+ consumoM[anoAtual].toFixed(2) +"   "+ consumoM_reb[anoAtual].toFixed(2) +"   "+ consumoM_per[anoAtual].toFixed(2));
    console.log("Borregos P1:    "+ consumoB[anoAtual].toFixed(2) +"   "+ consumoB_reb[anoAtual].toFixed(2) +"   "+ consumoB_per[anoAtual].toFixed(2));
    console.log("Borregas P1:    "+ consumoB[anoAtual].toFixed(2) +"   "+ consumoB_reb[anoAtual].toFixed(2) +"   "+ consumoB_per[anoAtual].toFixed(2));
    console.log("Borregas P2:    "+ consumoB2[anoAtual].toFixed(2) +"   "+ consumoB2_reb[anoAtual].toFixed(2) +"   "+ consumoB2_per[anoAtual].toFixed(2));
    console.log("Total:          "+ consumoTotal[anoAtual].toFixed(2) +"   "+ consumoTotal_reb[anoAtual].toFixed(2) +"   "+ consumoTotal_per[anoAtual].toFixed(2));
    console.log("");
    console.log("VOLUMOSO:       A/D    R/D     R/P       A/D    R/D     R/P");
    */
/*
    console.log("Matrizes:       "+ VolF[anoAtual].toFixed(2) +"   "+ VolF_reb[anoAtual].toFixed(2) +"   "+ VolF_per[anoAtual].toFixed(2) +"   "+ VolSecaF[anoAtual].toFixed(2) +"   "+ VolSecaF_reb[anoAtual].toFixed(2) +"   "+ VolSecaF_per[anoAtual].toFixed(2));
    console.log("Reprodutores:   "+ VolM[anoAtual].toFixed(2) +"   "+ VolM_reb[anoAtual].toFixed(2) +"   "+ VolM_per[anoAtual].toFixed(2) +"   "+ VolSecaM[anoAtual].toFixed(2) +"   "+ VolSecaM_reb[anoAtual].toFixed(2) +"   "+ VolSecaM_per[anoAtual].toFixed(2));
    console.log("Borregos P1:    "+ VolB[anoAtual].toFixed(2) +"   "+ VolB_reb[anoAtual].toFixed(2) +"   "+ VolB_per[anoAtual].toFixed(2) +"   "+ VolSecaB[anoAtual].toFixed(2) +"   "+ VolSecaB_reb[anoAtual].toFixed(2) +"   "+ VolSecaB_per[anoAtual].toFixed(2));
    console.log("Borregas P1:    "+ VolB[anoAtual].toFixed(2) +"   "+ VolB_reb[anoAtual].toFixed(2) +"   "+ VolB_per[anoAtual].toFixed(2) +"   "+ VolSecaB[anoAtual].toFixed(2) +"   "+ VolSecaB_reb[anoAtual].toFixed(2) +"   "+ VolSecaB_per[anoAtual].toFixed(2));
    console.log("Borregas P2:    "+ VolB2[anoAtual].toFixed(2) +"   "+ VolB2_reb[anoAtual].toFixed(2) +"   "+ VolB2_per[anoAtual].toFixed(2) +"   "+ VolSecaB2[anoAtual].toFixed(2) +"   "+ VolSecaB2_reb[anoAtual].toFixed(2) +"   "+ VolSecaB2_per[anoAtual].toFixed(2));
    console.log("Total:          "+ VolTotal[anoAtual].toFixed(2) +"   "+ VolTotal_reb[anoAtual].toFixed(2) +"   "+ VolTotal_per[anoAtual].toFixed(2) +"   "+ VolSecaTotal[anoAtual].toFixed(2) +"   "+ VolSecaTotal_reb[anoAtual].toFixed(2) +"   "+ VolSecaTotal_per[anoAtual].toFixed(2));
    console.log("");
    console.log("CONCENTRADO:    A/D    R/D     R/P       A/D    R/D     R/P");
    */
/*
    console.log("Matrizes:       "+ ConcenF[anoAtual].toFixed(2) +"   "+ ConcenF_reb[anoAtual].toFixed(2) +"   "+ ConcenF_per[anoAtual].toFixed(2) +"   "+ ConcenSecaF[anoAtual].toFixed(2) +"   "+ ConcenSecaF_reb[anoAtual].toFixed(2) +"   "+ ConcenSecaF_per[anoAtual].toFixed(2));
    console.log("Reprodutores:   "+ ConcenM[anoAtual].toFixed(2) +"   "+ ConcenM_reb[anoAtual].toFixed(2) +"   "+ ConcenM_per[anoAtual].toFixed(2) +"   "+ ConcenSecaM[anoAtual].toFixed(2) +"   "+ ConcenSecaM_reb[anoAtual].toFixed(2) +"   "+ ConcenSecaM_per[anoAtual].toFixed(2));
    console.log("Borregos P1:    "+ ConcenB[anoAtual].toFixed(2) +"   "+ ConcenB_reb[anoAtual].toFixed(2) +"   "+ ConcenB_per[anoAtual].toFixed(2) +"   "+ ConcenSecaB[anoAtual].toFixed(2) +"   "+ ConcenSecaB_reb[anoAtual].toFixed(2) +"   "+ ConcenSecaB_per[anoAtual].toFixed(2));
    console.log("Borregas P1:    "+ ConcenB[anoAtual].toFixed(2) +"   "+ ConcenB_reb[anoAtual].toFixed(2) +"   "+ ConcenB_per[anoAtual].toFixed(2) +"   "+ ConcenSecaB[anoAtual].toFixed(2) +"   "+ ConcenSecaB_reb[anoAtual].toFixed(2) +"   "+ ConcenSecaB_per[anoAtual].toFixed(2));
    console.log("Borregas P2:    "+ ConcenB2[anoAtual].toFixed(2) +"   "+ ConcenB2_reb[anoAtual].toFixed(2) +"   "+ ConcenB2_per[anoAtual].toFixed(2) +"   "+ ConcenSecaB2[anoAtual].toFixed(2) +"   "+ ConcenSecaB2_reb[anoAtual].toFixed(2) +"   "+ ConcenSecaB2_per[anoAtual].toFixed(2));
    console.log("Total:          "+ ConcenTotal[anoAtual].toFixed(2) +"   "+ ConcenTotal_reb[anoAtual].toFixed(2) +"   "+ ConcenTotal_per[anoAtual].toFixed(2) +"   "+ ConcenSecaTotal[anoAtual].toFixed(2) +"   "+ ConcenSecaTotal_reb[anoAtual].toFixed(2) +"   "+ ConcenSecaTotal_per[anoAtual].toFixed(2));
    console.log("");
    */
export function atualizarTabela(){
    F.textContent = consumoF[controlador].toFixed(2);
    FR.textContent = consumoF_reb[controlador].toFixed(2);
    FP.textContent = consumoF_per[controlador].toFixed(2);
    M.textContent = consumoM[controlador].toFixed(2);
    MR.textContent = consumoM_reb[controlador].toFixed(2);
    MP.textContent = consumoM_per[controlador].toFixed(2);
    B.textContent = consumoB[controlador].toFixed(2);
    BR.textContent = consumoB_reb[controlador].toFixed(2);
    BP.textContent = consumoB_per[controlador].toFixed(2);
    BA1.textContent = consumoBA1[controlador].toFixed(2);
    BA1R.textContent = consumoBA1_reb[controlador].toFixed(2);
    BA1P.textContent = consumoBA1_per[controlador].toFixed(2);
    BA2.textContent = consumoBA2[controlador].toFixed(2);
    BA2R.textContent = consumoBA2_reb[controlador].toFixed(2);
    BA2P.textContent = consumoBA2_per[controlador].toFixed(2);
    T.textContent = consumoTotal[controlador].toFixed(2);
    TR.textContent = consumoTotal_reb[controlador].toFixed(2);
    TP.textContent = consumoTotal_per[controlador].toFixed(2);

    VSF.textContent = VolF[controlador].toFixed(2);
    VSFR.textContent = VolF_reb[controlador].toFixed(2);
    VSFP.textContent = VolF_per[controlador].toFixed(2);
    VSM.textContent = VolM[controlador].toFixed(2);
    VSMR.textContent = VolM_reb[controlador].toFixed(2);
    VSMP.textContent = VolM_per[controlador].toFixed(2);
    VSB.textContent = VolB[controlador].toFixed(2);
    VSBR.textContent = VolB_reb[controlador].toFixed(2);
    VSBP.textContent = VolB_per[controlador].toFixed(2);
    VSBA1.textContent = VolBA1[controlador].toFixed(2);
    VSBA1R.textContent = VolBA1_reb[controlador].toFixed(2);
    VSBA1P.textContent = VolBA1_per[controlador].toFixed(2);
    VSBA2.textContent = VolBA2[controlador].toFixed(2);
    VSBA2R.textContent = VolBA2_reb[controlador].toFixed(2);
    VSBA2P.textContent = VolBA2_per[controlador].toFixed(2);
    VST.textContent = VolTotal[controlador].toFixed(2);
    VSTR.textContent = VolTotal_reb[controlador].toFixed(2);
    VSTP.textContent = VolTotal_per[controlador].toFixed(2);

    VCF.textContent = VolSecaF[controlador].toFixed(2);
    VCFR.textContent = VolSecaF_reb[controlador].toFixed(2);
    VCFP.textContent = VolSecaF_per[controlador].toFixed(2);
    VCM.textContent = VolSecaM[controlador].toFixed(2);
    VCMR.textContent = VolSecaM_reb[controlador].toFixed(2);
    VCMP.textContent = VolSecaM_per[controlador].toFixed(2);
    VCB.textContent = VolSecaB[controlador].toFixed(2);
    VCBR.textContent = VolSecaB_reb[controlador].toFixed(2);
    VCBP.textContent = VolSecaB_per[controlador].toFixed(2);
    VCBA1.textContent = VolSecaBA1[controlador].toFixed(2);
    VCBA1R.textContent = VolSecaBA1_reb[controlador].toFixed(2);
    VCBA1P.textContent = VolSecaBA1_per[controlador].toFixed(2);
    VCBA2.textContent = VolSecaBA2[controlador].toFixed(2);
    VCBA2R.textContent = VolSecaBA2_reb[controlador].toFixed(2);
    VCBA2P.textContent = VolSecaBA2_per[controlador].toFixed(2);
    VCT.textContent = VolSecaTotal[controlador].toFixed(2);
    VCTR.textContent = VolSecaTotal_reb[controlador].toFixed(2);
    VCTP.textContent = VolSecaTotal_per[controlador].toFixed(2);

    CSF.textContent = ConcenF[controlador].toFixed(2);
    CSFR.textContent = ConcenF_reb[controlador].toFixed(2);
    CSFP.textContent = ConcenF_per[controlador].toFixed(2);
    CSM.textContent = ConcenM[controlador].toFixed(2);
    CSMR.textContent = ConcenM_reb[controlador].toFixed(2);
    CSMP.textContent = ConcenM_per[controlador].toFixed(2);
    CSB.textContent = ConcenB[controlador].toFixed(2);
    CSBR.textContent = ConcenB_reb[controlador].toFixed(2);
    CSBP.textContent = ConcenB_per[controlador].toFixed(2);
    CSBA1.textContent = ConcenBA1[controlador].toFixed(2);
    CSBA1R.textContent = ConcenBA1_reb[controlador].toFixed(2);
    CSBA1P.textContent = ConcenBA1_per[controlador].toFixed(2);
    CSBA2.textContent = ConcenBA2[controlador].toFixed(2);
    CSBA2R.textContent = ConcenBA2_reb[controlador].toFixed(2);
    CSBA2P.textContent = ConcenBA2_per[controlador].toFixed(2);
    CST.textContent = ConcenTotal[controlador].toFixed(2);
    CSTR.textContent = ConcenTotal_reb[controlador].toFixed(2);
    CSTP.textContent = ConcenTotal_per[controlador].toFixed(2);

    CCF.textContent = ConcenSecaF[controlador].toFixed(2);
    CCFR.textContent = ConcenSecaF_reb[controlador].toFixed(2);
    CCFP.textContent = ConcenSecaF_per[controlador].toFixed(2);
    CCM.textContent = ConcenSecaM[controlador].toFixed(2);
    CCMR.textContent = ConcenSecaM_reb[controlador].toFixed(2);
    CCMP.textContent = ConcenSecaM_per[controlador].toFixed(2);
    CCB.textContent = ConcenSecaB[controlador].toFixed(2);
    CCBR.textContent = ConcenSecaB_reb[controlador].toFixed(2);
    CCBP.textContent = ConcenSecaB_per[controlador].toFixed(2);
    CCBA1.textContent = ConcenSecaBA1[controlador].toFixed(2);
    CCBA1R.textContent = ConcenSecaBA1_reb[controlador].toFixed(2);
    CCBA1P.textContent = ConcenSecaBA1_per[controlador].toFixed(2);
    CCBA2.textContent = ConcenSecaBA2[controlador].toFixed(2);
    CCBA2R.textContent = ConcenSecaBA2_reb[controlador].toFixed(2);
    CCBA2P.textContent = ConcenSecaBA2_per[controlador].toFixed(2);
    CCT.textContent = ConcenSecaTotal[controlador].toFixed(2);
    CCTR.textContent = ConcenSecaTotal_reb[controlador].toFixed(2);
    CCTP.textContent = ConcenSecaTotal_per[controlador].toFixed(2);
}

export function calcularInformacoes(){
    calcularConsumoTotal();
    F.textContent = consumoF[0].toFixed(2);
    FR.textContent = consumoF_reb[0].toFixed(2);
    FP.textContent = consumoF_per[0].toFixed(2);
    M.textContent = consumoM[0].toFixed(2);
    MR.textContent = consumoM_reb[0].toFixed(2);
    MP.textContent = consumoM_per[0].toFixed(2);
    B.textContent = consumoB[0].toFixed(2);
    BR.textContent = consumoB_reb[0].toFixed(2);
    BP.textContent = consumoB_per[0].toFixed(2);
    BA1.textContent = consumoBA1[0].toFixed(2);
    BA1R.textContent = consumoBA1_reb[0].toFixed(2);
    BA1P.textContent = consumoBA1_per[0].toFixed(2);
    BA2.textContent = consumoBA2[0].toFixed(2);
    BA2R.textContent = consumoBA2_reb[0].toFixed(2);
    BA2P.textContent = consumoBA2_per[0].toFixed(2);
    T.textContent = consumoTotal[0].toFixed(2);
    TR.textContent = consumoTotal_reb[0].toFixed(2);
    TP.textContent = consumoTotal_per[0].toFixed(2);
    calcularVolumoso();
    VSF.textContent = VolF[0].toFixed(2);
    VSFR.textContent = VolF_reb[0].toFixed(2);
    VSFP.textContent = VolF_per[0].toFixed(2);
    VSM.textContent = VolM[0].toFixed(2);
    VSMR.textContent = VolM_reb[0].toFixed(2);
    VSMP.textContent = VolM_per[0].toFixed(2);
    VSB.textContent = VolB[0].toFixed(2);
    VSBR.textContent = VolB_reb[0].toFixed(2);
    VSBP.textContent = VolB_per[0].toFixed(2);
    VSBA1.textContent = VolBA1[0].toFixed(2);
    VSBA1R.textContent = VolBA1_reb[0].toFixed(2);
    VSBA1P.textContent = VolBA1_per[0].toFixed(2);
    VSBA2.textContent = VolBA2[0].toFixed(2);
    VSBA2R.textContent = VolBA2_reb[0].toFixed(2);
    VSBA2P.textContent = VolBA2_per[0].toFixed(2);
    VST.textContent = VolTotal[0].toFixed(2);
    VSTR.textContent = VolTotal_reb[0].toFixed(2);
    VSTP.textContent = VolTotal_per[0].toFixed(2);
    calcularMateriaSecaVolumoso();
    VCF.textContent = VolSecaF[0].toFixed(2);
    VCFR.textContent = VolSecaF_reb[0].toFixed(2);
    VCFP.textContent = VolSecaF_per[0].toFixed(2);
    VCM.textContent = VolSecaM[0].toFixed(2);
    VCMR.textContent = VolSecaM_reb[0].toFixed(2);
    VCMP.textContent = VolSecaM_per[0].toFixed(2);
    VCB.textContent = VolSecaB[0].toFixed(2);
    VCBR.textContent = VolSecaB_reb[0].toFixed(2);
    VCBP.textContent = VolSecaB_per[0].toFixed(2);
    VCBA1.textContent = VolSecaBA1[0].toFixed(2);
    VCBA1R.textContent = VolSecaBA1_reb[0].toFixed(2);
    VCBA1P.textContent = VolSecaBA1_per[0].toFixed(2);
    VCBA2.textContent = VolSecaBA2[0].toFixed(2);
    VCBA2R.textContent = VolSecaBA2_reb[0].toFixed(2);
    VCBA2P.textContent = VolSecaBA2_per[0].toFixed(2);
    VCT.textContent = VolSecaTotal[0].toFixed(2);
    VCTR.textContent = VolSecaTotal_reb[0].toFixed(2);
    VCTP.textContent = VolSecaTotal_per[0].toFixed(2);
    calcularConcentrado();
    CSF.textContent = ConcenF[0].toFixed(2);
    CSFR.textContent = ConcenF_reb[0].toFixed(2);
    CSFP.textContent = ConcenF_per[0].toFixed(2);
    CSM.textContent = ConcenM[0].toFixed(2);
    CSMR.textContent = ConcenM_reb[0].toFixed(2);
    CSMP.textContent = ConcenM_per[0].toFixed(2);
    CSB.textContent = ConcenB[0].toFixed(2);
    CSBR.textContent = ConcenB_reb[0].toFixed(2);
    CSBP.textContent = ConcenB_per[0].toFixed(2);
    CSBA1.textContent = ConcenBA1[0].toFixed(2);
    CSBA1R.textContent = ConcenBA1_reb[0].toFixed(2);
    CSBA1P.textContent = ConcenBA1_per[0].toFixed(2);
    CSBA2.textContent = ConcenBA2[0].toFixed(2);
    CSBA2R.textContent = ConcenBA2_reb[0].toFixed(2);
    CSBA2P.textContent = ConcenBA2_per[0].toFixed(2);
    CST.textContent = ConcenTotal[0].toFixed(2);
    CSTR.textContent = ConcenTotal_reb[0].toFixed(2);
    CSTP.textContent = ConcenTotal_per[0].toFixed(2);
    calcularMateriaSecaConcentrado();
    CCF.textContent = ConcenSecaF[0].toFixed(2);
    CCFR.textContent = ConcenSecaF_reb[0].toFixed(2);
    CCFP.textContent = ConcenSecaF_per[0].toFixed(2);
    CCM.textContent = ConcenSecaM[0].toFixed(2);
    CCMR.textContent = ConcenSecaM_reb[0].toFixed(2);
    CCMP.textContent = ConcenSecaM_per[0].toFixed(2);
    CCB.textContent = ConcenSecaB[0].toFixed(2);
    CCBR.textContent = ConcenSecaB_reb[0].toFixed(2);
    CCBP.textContent = ConcenSecaB_per[0].toFixed(2);
    CCBA1.textContent = ConcenSecaBA1[0].toFixed(2);
    CCBA1R.textContent = ConcenSecaBA1_reb[0].toFixed(2);
    CCBA1P.textContent = ConcenSecaBA1_per[0].toFixed(2);
    CCBA2.textContent = ConcenSecaBA2[0].toFixed(2);
    CCBA2R.textContent = ConcenSecaBA2_reb[0].toFixed(2);
    CCBA2P.textContent = ConcenSecaBA2_per[0].toFixed(2);
    CCT.textContent = ConcenSecaTotal[0].toFixed(2);
    CCTR.textContent = ConcenSecaTotal_reb[0].toFixed(2);
    CCTP.textContent = ConcenSecaTotal_per[0].toFixed(2);
}