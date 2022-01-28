
var j = '' //taxa de juros
var n = '' //numero de meses
var Q = '' //valor obtido no final
var q = '' //capital atual

function aplicacao() {
    
    j = document.getElementById('jurosMensal').value
    j = parseFloat(j.replace(',', '.'))
    j = j / 100

    n = document.getElementById('qntMeses').value
    n = parseFloat(n.replace(',', '.'))


    q = document.getElementById('capitalAtual').value
    q = parseFloat(q.replace(',', '.'))

    Q = ((1 + j) ** n) * q



    var ganhoTotal = Q - q


    var DinTotais = ganhoTotal.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});
    var Stotal = Q.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});


    document.getElementById('valorFinal').value = Stotal
    document.getElementById('ganhoTotal').value = DinTotais


}






