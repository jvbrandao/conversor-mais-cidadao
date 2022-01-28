
var select1 = ''
var select2 = ''
var numero = ''
function converter1(){
    var tipo1 = document.getElementById('tipo1')
    select1 = tipo1.options[tipo1.selectedIndex].value
}
function converter2(){
    var tipo2 = document.getElementById('tipo2')
    select2 = tipo2.options[tipo2.selectedIndex].value
}

function numeroConversao(){
    numero = document.getElementById('numeroConversao').value
    
}

function convertendo(){
        numero = document.getElementById('numeroConversao').value

    
        //decimal
        if(select1 === 'decimal' && select2 === 'binario'){
            numero = parseInt(numero)
            var decBinario = numero.toString(2)
            document.getElementById('resultado').value = decBinario
        }if(select1 === 'decimal' && select2 === 'octal'){
            numero = parseInt(numero)
            var decOctal = numero.toString(8)
            document.getElementById('resultado').value = decOctal
        }if(select1 === 'decimal' && select2 === 'hexadecimal'){
            numero = parseInt(numero)
            var decHex = numero.toString(16)
            document.getElementById('resultado').value = decHex
        }if(select1 === 'decimal' && select2 === 'decimal'){
            document.getElementById('resultado').value = numero
        }

        //binario
        if(select1 === 'binario' && select2 === 'decimal'){
            numero = parseInt(numero)
            var binDec = parseInt(numero,2)
            document.getElementById('resultado').value = binDec
        }if(select1 === 'binario' && select2 === 'octal'){
            numero = parseInt(numero)
            var binDec = parseInt(numero,2)
            var decOctal = binDec.toString(8)
            document.getElementById('resultado').value = decOctal
        }if(select1 === 'binario' && select2 === 'hexadecimal'){
            numero = parseInt(numero)
            var decHex = parseInt(numero,2)
            var binHex = decHex.toString(16)
            document.getElementById('resultado').value = binHex

        }if(select1 === 'binario' && select2 === 'binario'){
            document.getElementById('resultado').value = numero

        }

        //octal
        if(select1 === 'octal' && select2 === 'decimal'){
            numero = parseInt(numero)
            var octalDec = parseInt(numero,8)
            document.getElementById('resultado').value = octalDec

        }if(select1 === 'octal' && select2 === 'binario'){
            numero = parseInt(numero)
            var octalDec = parseInt(numero,8)
            var decBinario = octalDec.toString(2)
            document.getElementById('resultado').value = decBinario

        }if(select1 === 'octal' && select2 === 'hexadecimal'){
            numero = parseInt(numero)
            var octalDec = parseInt(numero,8)
            var decHex = octalDec.toString(16)
            document.getElementById('resultado').value = decHex
        }if(select1 === 'octal' && select2 === 'octal'){
            document.getElementById('resultado').value = numero

        }

        //hexadecimal
        if(select1 === 'hexadecimal' && select2 === 'decimal'){
            var hexDec = parseInt(numero,16)
            document.getElementById('resultado').value = hexDec
        }if(select1 === 'hexadecimal' && select2 === 'binario'){
            var hexDec = parseInt(numero,16)
            var decBinario = hexDec.toString(2)
            document.getElementById('resultado').value = decBinario
        }if(select1 === 'hexadecimal' && select2 === 'octal'){
            var hexDec = parseInt(numero,16)
            var decOctal = hexDec.toString(8)
            document.getElementById('resultado').value = decOctal
        }if(select1 === 'hexadecimal' && select2 === 'hexadecimal'){
            document.getElementById('resultado').value = numero

        }
}   

