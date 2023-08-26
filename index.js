import opcao from 'readline-sync';

//
let salarioMinimo = [
    {ano:2010, salarioMin: 510, inflacao:5.91},
    {ano:2011, salarioMin: 545, inflacao:6.50},
    {ano:2012, salarioMin: 622, inflacao:5.84},
    {ano:2013, salarioMin: 678, inflacao:5.91},
    {ano:2014, salarioMin: 724, inflacao:6.41},
    {ano:2015, salarioMin: 788, inflacao:10.67},
    {ano:2016, salarioMin: 880, inflacao:6.29},
    {ano:2017, salarioMin: 937, inflacao:2.95},
    {ano:2018, salarioMin: 954, inflacao:3.75},
    {ano:2019, salarioMin: 998, inflacao:4.31},
    {ano:2020, salarioMin: 1045, inflacao:4.52}
]

//Menu
console.log("Escolha uma das alternativas:\n");
console.log("1 - Listar os salários minímos de 2010 à  2020");
console.log("2 - Listar o índice IPCA de 2010 à 2020");
console.log("3 - Comparação entre o percentual de aumento salarial e o IPCA\n");
let opM = opcao.question("\nDigite o numero da sua escolha: ");

//Menu Switch
switch(opM){
    case 1:
        for(let sm of salarioMinimo){
            console.log("Ano: ".padEnd(30,".")+sm.ano);
            console.log("Salário mínimo:".padEnd(30,".")+ "R$ "+sm.salarioMin.toFixed(2)+"\n");
        }
        break;
    case 2:
        for(let sm of salarioMinimo){
            console.log("Ano: ".padEnd(30,".")+sm.ano);
            console.log("Inflação IPCA:".padEnd(30,".")+sm.inflacao.toFixed(2)+"%"+"\n");
        }
        break;
    case 3:
        let salarioAnt = 0;
        let diferenca = 0;
        let resultado = " ";
        for(let sm of salarioMinimo){
                diferenca = sm.salarioMin - salarioAnt;
                let crescS = (diferenca / salarioAnt) * 100;
                
                console.log("Ano: ".padEnd(30,".")+sm.ano);

                console.log("Salário mínimo: ".padEnd(30,".")+"R$ "+sm.salarioMin.toFixed(2));

                if(crescS == Infinity){
                    console.log("Crescimento Salarial: ".padEnd(30,".")+ "-");
                }else{
                    console.log("Crescimento Salarial: ".padEnd(30,".")+ crescS.toFixed(2)+"%");
                }

                salarioAnt = sm.salarioMin;
                console.log("Inflação IPCA: ".padEnd(30,".")+sm.inflacao.toFixed(2)+"%\n");
        }
        break;
    default:
        console.log("Opcao Invalida!");
        break;
}
