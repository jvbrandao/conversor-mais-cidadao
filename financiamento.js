
var j = '' //taxa de juros
var n = '' //numero de meses
var p = '' //valor prestação
var q = '' //valor financiado

function aplicacao(){
    j = document.getElementById('jurosMensal').value

    j = parseFloat(j.replace(',','.'))
    j = j/100

    n = document.getElementById('qntMeses').value
    n = parseFloat(n.replace(',','.'))


    q = document.getElementById('valorFinanciado').value
    q = parseFloat(q.replace(',','.'))

    

    var Q = q *((((1+j)**n)*j)/(((1+j)**n)-1))
    


    var T = Q * n



    var jurosTotal = T - q

    var DinTotais = jurosTotal.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});
    var Stotal = T.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});
    var Qtotal = Q.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});
    
    document.getElementById('jurosTotal').value =  DinTotais

    document.getElementById('valorTotal').value = Stotal

    document.getElementById('valorPrestacao').value = Qtotal

}






