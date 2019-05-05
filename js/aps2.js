'use strict'

function SomaPares() {
    TabelaPostarPares.innerHTML = ``;
    let nums = document.getElementById("NumberOne").value;
    let NumerosPares = InserePares(nums);
    let soma = SomandoPares(NumerosPares);
    TabelaPostarSomaPares.innerHTML = `<tr><td>${soma}</td></tr>`;
}

function InserePares(nums) {
    let NumerosPares = [];
    let contador = 0;
    for (let i = 1; contador < nums; i++) {
        if (i % 2 == 0) {
            NumerosPares.push(i);
            TabelaPostarPares.innerHTML += `${i} <br>`;
            contador ++;
        }
    }
    return NumerosPares;
}

function SomandoPares(array) {
    let soma = 0;
    array.forEach((numero) => {
        soma = numero + soma;
    });
    return soma;
}




let NomesENotas = [];
function PegaNomesENotas() {
    NomesENotas.push([document.getElementById("Nome").value, Number(document.getElementById("Nota").value)]);
    PostarNomesENotas(NomesENotas);
    return NomesENotas
}

function PostarNomesENotas(NomeENota){
    tabelaturma.innerHTML += `<tr><td>${NomeENota.length}</td> <td>${NomeENota[NomeENota.length-1][0]}</td>
    <td>${NomeENota[NomeENota.length-1][1]}</td> </tr>`
}

function MaiorEMenor() {
    let AlunoseNotas = PegaNomesENotas();
    let maiorAluno = verificaMaior(AlunoseNotas);
    let menorAluno = verificaMenor(AlunoseNotas);
    tabelaMaiorNota.innerHTML = `<tr><td>${maiorAluno[1]}</td></tr>` 
    tabelaMenorNota.innerHTML = `<tr><td>${menorAluno[1]}</td></tr>`
    // postarmaioremenor.innerHTML = `${maiorAluno} e ${menorAluno}`;
}   

function verificaMaior(AlunoseNotas) {
    let maior = AlunoseNotas[0];
    for (let i = 1; i < AlunoseNotas.length; i++) {
        if (AlunoseNotas[i][1]> maior[1]){
            maior = AlunoseNotas[i];
        }
    }
    return maior;
}

function verificaMenor(AlunoseNotas) {
    let menor = AlunoseNotas[0];
    for (let i = 1; i < AlunoseNotas.length; i++) {
        if (AlunoseNotas[i][1] < menor[1]){
            menor = AlunoseNotas[i];
        } 
    }
    return menor;
}
