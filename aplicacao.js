
var j = '' //taxa de juros
var n = '' //numero de meses
var p = '' //valor deposito regular

function aplicacao(){
    j = document.getElementById('jurosMensal').value
    j = parseFloat(j.replace(',','.'))
    j = j/100

    n = document.getElementById('qntMeses').value
    n = parseFloat(n.replace(',','.'))


    p = document.getElementById('depositoRegular').value
    p = parseFloat(p.replace(',','.'))


    S = (1+j)*(((((1+j)**n))-1)/j) * p
    
    var ganhosTotais = S - (p * n)
    
    var DinTotais = ganhosTotais.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});
    var Stotal = S.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});


    document.getElementById('valorFinal').value = Stotal 
    document.getElementById('ganhosTotais').value = DinTotais


}






