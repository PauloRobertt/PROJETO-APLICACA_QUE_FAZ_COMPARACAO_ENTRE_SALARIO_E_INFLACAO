import opcao, { question } from 'readline-sync';

//Tabela Salário Minimo
let salarioMinimo = [
    {ano: 2010, salarioMin:510},
    {ano: 2011, salarioMin:545},
    {ano: 2012, salarioMin:622},
    {ano: 2013, salarioMin:678},
    {ano: 2014, salarioMin:724},
    {ano: 2015, salarioMin:788},
    {ano: 2016, salarioMin:880},
    {ano: 2017, salarioMin:937},
    {ano: 2018, salarioMin:954},
    {ano: 2019, salarioMin:998},
    {ano: 2020, salarioMin:1045},
]

//Tabela Inflação
let ipca = [
    {ano: 2010, inflacao:5.91},
    {ano: 2011, inflacao:6.50},
    {ano: 2012, inflacao:5.84},
    {ano: 2013, inflacao:5.91},
    {ano: 2014, inflacao:6.41},
    {ano: 2015, inflacao:10.67},
    {ano: 2016, inflacao:6.29},
    {ano: 2017, inflacao:2.95},
    {ano: 2018, inflacao:3.75},
    {ano: 2019, inflacao:4.31},
    {ano: 2020, inflacao:4.52},
]

//Menu
console.log("Escolha uma das alternativas:\n");
console.log("1 - Listar os salários minímos de 2010 à  2020");
console.log("2 - Listar o índice IPCA de 2010 à 2020");
console.log("3 - Comparação entre o percentual de aumento salarial e o IPCA\n");
let opM = Number(opcao.question("\nDigite o numero da sua escolha: "));

//Menu Switch
switch(opM){
    case 1:
        for(let sm of salarioMinimo){
            console.log("Ano: ".padEnd(30,".")+sm.ano);
            console.log("Salário mínimo:".padEnd(30,".")+ "R$ "+sm.salarioMin.toFixed(2).replace(".",",")+"\n");
        }
        break;

    case 2:
        for(let inf of ipca){
            console.log("Ano: ".padEnd(30,".")+inf.ano);
            console.log("Inflação IPCA:".padEnd(30,".")+inf.inflacao.toFixed(2).replace(".",",")+"%"+"\n");
        }
        break;
        case 3:
            let salarioAnt = 0;
            for(let i = 0;i < salarioMinimo.length;i++){
                let ano = salarioMinimo[i].ano;
                let salario = salarioMinimo[i].salarioMin;
                let inf = ipca[i].inflacao;

                console.log("\n\nAno: ".padEnd(30,".")+ano);
                console.log("Salário mínimo: ".padEnd(30,".")+"R$ "+salario.toFixed(2).replace(".",","));

                let diferenca = salario - salarioAnt;
                let cresc = (diferenca / salarioAnt) * 100;
                if(ano == 2010){
                    cresc = 0;
                }
                console.log("Crescimento Salarial: ".padEnd(30,".")+cresc.toFixed(2).replace(".",",")+"%");

                console.log("Inflação IPCA: ".padEnd(30,".")+inf.toFixed(2).replace(".",",")+"%\n");

                salarioAnt = salario;
            }
        break;
    default:
        console.log("Opcao Invalida!");
        break;
}