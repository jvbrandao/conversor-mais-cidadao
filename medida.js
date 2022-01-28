
var select1 = ''
var select2 = ''
var numero = ''
function converter1() {
    var tipo1 = document.getElementById('tipo1')
    select1 = tipo1.options[tipo1.selectedIndex].value
}
function converter2() {
    var tipo2 = document.getElementById('tipo2')
    select2 = tipo2.options[tipo2.selectedIndex].value
}



function zerarConteudo() {
    document.getElementById('conversao').value = ''
}

function medidaConversao() {
    numero = document.getElementById('numeroConversao').value
    numero = numero.replace(',', '.')

    //metro
    if (select1 === 'metro' && select2 === 'quilometro') {
        numero = numero / 1000

    } if (select1 === 'metro' && select2 === 'centimetro') {
        numero = numero * 100

    } if (select1 === 'metro' && select2 === 'milimetro') {
        numero = numero * 1000

    } if (select1 === 'metro' && select2 === 'micrometro') {
        numero = numero * 1000000

    } if (select1 === 'metro' && select2 === 'nanometro') {
        numero = numero * 1000000000

    } if (select1 === 'metro' && select2 === 'milha') {
        numero = numero / 1609

    } if (select1 === 'metro' && select2 === 'jarda') {
        numero = numero * 1.094

    } if (select1 === 'metro' && select2 === 'pe') {
        numero = numero * 3.281

    } if (select1 === 'metro' && select2 === 'polegada') {
        numero = numero * 39.37

    } if (select1 === 'metro' && select2 === 'milhaNautica') {
        numero = numero / 1852

    } if (select1 === 'metro' && select2 === 'metro') {

    }

    //quilometro
    if (select1 === 'quilometro' && select2 === 'metro') {
        numero = numero * 1000

    } if (select1 === 'quilometro' && select2 === 'centimetro') {
        numero = numero * 100000

    } if (select1 === 'quilometro' && select2 === 'milimetro') {
        numero = numero * 1000000

    } if (select1 === 'quilometro' && select2 === 'micrometro') {
        numero = numero * 1000000000

    } if (select1 === 'quilometro' && select2 === 'nanometro') {
        numero = numero * 1000000000000

    } if (select1 === 'quilometro' && select2 === 'milha') {
        numero = numero / 1.609

    } if (select1 === 'quilometro' && select2 === 'jarda') {
        numero = numero * 1094

    } if (select1 === 'quilometro' && select2 === 'pe') {
        numero = numero * 3281

    } if (select1 === 'quilometro' && select2 === 'polegada') {
        numero = numero * 39370

    } if (select1 === 'quilometro' && select2 === 'milhaNautica') {
        numero = numero / 1.852

    } if (select1 === 'quilometro' && select2 === 'quilometro') {

    }

    //centimetro
    if (select1 === 'centimetro' && select2 === 'metro') {
        numero = numero / 100

    } if (select1 === 'centimetro' && select2 === 'quilometro') {
        numero = numero / 100000

    } if (select1 === 'centimetro' && select2 === 'milimetro') {
        numero = numero * 10

    } if (select1 === 'centimetro' && select2 === 'micrometro') {
        numero = numero * 10000

    } if (select1 === 'centimetro' && select2 === 'nanometro') {
        numero = numero * 10000000

    } if (select1 === 'centimetro' && select2 === 'milha') {
        numero = numero / 160934

    } if (select1 === 'centimetro' && select2 === 'jarda') {
        numero = numero / 91.44

    } if (select1 === 'centimetro' && select2 === 'pe') {
        numero = numero / 30.48

    } if (select1 === 'centimetro' && select2 === 'polegada') {
        numero = numero / 2.54

    } if (select1 === 'centimetro' && select2 === 'milhaNautica') {
        numero = numero / 185200

    } if (select1 === 'centimetro' && select2 === 'centimetro') {

    }

    //milimetro
    if (select1 === 'milimetro' && select2 === 'metro') {
        numero = numero / 1000

    } if (select1 === 'milimetro' && select2 === 'quilometro') {
        numero = numero / 1000000

    } if (select1 === 'milimetro' && select2 === 'centimetro') {
        numero = numero / 10

    } if (select1 === 'milimetro' && select2 === 'micrometro') {
        numero = numero * 1000

    } if (select1 === 'milimetro' && select2 === 'nanometro') {
        numero = numero * 1000000

    } if (select1 === 'milimetro' && select2 === 'milha') {
        numero = numero / 1609000000

    } if (select1 === 'milimetro' && select2 === 'jarda') {
        numero = numero / 914

    } if (select1 === 'milimetro' && select2 === 'pe') {
        numero = numero / 305

    } if (select1 === 'milimetro' && select2 === 'polegada') {
        numero = numero / 25.4

    } if (select1 === 'milimetro' && select2 === 'milhaNautica') {
        numero = numero / 1852000000

    } if (select1 === 'milimetro' && select2 === 'milimetro') {

    }

    //micrometro
    if (select1 === 'micrometro' && select2 === 'metro') {
        numero = numero / 1000000

    } if (select1 === 'micrometro' && select2 === 'quilometro') {
        numero = numero / 1000000000

    } if (select1 === 'micrometro' && select2 === 'centimetro') {
        numero = numero / 10000

    } if (select1 === 'micrometro' && select2 === 'milimetro') {
        numero = numero / 1000

    } if (select1 === 'micrometro' && select2 === 'nanometro') {
        numero = numero * 1000

    } if (select1 === 'micrometro' && select2 === 'milha') {
        numero = numero / 1609000000000

    } if (select1 === 'micrometro' && select2 === 'jarda') {
        numero = numero / 914400

    } if (select1 === 'micrometro' && select2 === 'pe') {
        numero = numero / 304800

    } if (select1 === 'micrometro' && select2 === 'polegada') {
        numero = numero / 25400

    } if (select1 === 'micrometro' && select2 === 'milhaNautica') {
        numero = numero / 1852000000000

    } if (select1 === 'micrometro' && select2 === 'micrometro') {

    }

    //nanometro
    if (select1 === 'nanometro' && select2 === 'metro') {
        numero = numero / 1000000000

    } if (select1 === 'nanometro' && select2 === 'quilometro') {
        numero = numero / 1000000000000

    } if (select1 === 'nanometro' && select2 === 'centimetro') {
        numero = numero / 10000000

    } if (select1 === 'nanometro' && select2 === 'milimetro') {
        numero = numero / 1000000

    } if (select1 === 'nanometro' && select2 === 'micrometro') {
        numero = numero / 1000

    } if (select1 === 'nanometro' && select2 === 'milha') {
        numero = numero / 1609000000000000

    } if (select1 === 'nanometro' && select2 === 'jarda') {
        numero = numero / 914400000000

    } if (select1 === 'nanometro' && select2 === 'pe') {
        numero = numero / 304800000000

    } if (select1 === 'nanometro' && select2 === 'polegada') {
        numero = numero / 2540000000

    } if (select1 === 'nanometro' && select2 === 'milhaNautica') {
        numero = numero / 1852000000000000

    } if (select1 === 'milha' && select2 === 'nanometro') {

    }

    //milha
    if (select1 === 'milha' && select2 === 'metro') {
        numero = numero * 1609

    } if (select1 === 'milha' && select2 === 'quilometro') {
        numero = numero * 1.609

    } if (select1 === 'milha' && select2 === 'centimetro') {
        numero = numero * 160934

    } if (select1 === 'milha' && select2 === 'milimetro') {
        numero = numero * 1609000000

    } if (select1 === 'milha' && select2 === 'micrometro') {
        numero = numero * 1609000000000

    } if (select1 === 'milha' && select2 === 'nanometro') {
        numero = numero * 1609000000000000

    } if (select1 === 'milha' && select2 === 'jarda') {
        numero = numero * 1760

    } if (select1 === 'milha' && select2 === 'pe') {
        numero = numero * 5280

    } if (select1 === 'milha' && select2 === 'polegada') {
        numero = numero * 63360

    } if (select1 === 'milha' && select2 === 'milhaNautica') {
        numero = numero / 1.151

    } if (select1 === 'milha' && select2 === 'milha') {

    }
    //jarda
    if (select1 === 'jarda' && select2 === 'metro') {
        numero = numero / 1.094

    } if (select1 === 'jarda' && select2 === 'quilometro') {
        numero = numero / 1094

    } if (select1 === 'jarda' && select2 === 'centimetro') {
        numero = numero * 91.44

    } if (select1 === 'jarda' && select2 === 'milimetro') {
        numero = numero * 914

    } if (select1 === 'jarda' && select2 === 'micrometro') {
        numero = numero * 914400

    } if (select1 === 'jarda' && select2 === 'nanometro') {
        numero = numero * 914400000000

    } if (select1 === 'jarda' && select2 === 'milha') {
        numero = numero / 1760

    } if (select1 === 'jarda' && select2 === 'pe') {
        numero = numero * 3

    } if (select1 === 'jarda' && select2 === 'polegada') {
        numero = numero * 36

    } if (select1 === 'jarda' && select2 === 'milhaNautica') {
        numero = numero / 2025

    } if (select1 === 'jarda' && select2 === 'jarda') {

    }

    //pe
    if (select1 === 'pe' && select2 === 'metro') {
        numero = numero / 3.281

    } if (select1 === 'pe' && select2 === 'quilometro') {
        numero = numero / 3281

    } if (select1 === 'pe' && select2 === 'centimetro') {
        numero = numero * 30.48

    } if (select1 === 'pe' && select2 === 'milimetro') {
        numero = numero * 305

    } if (select1 === 'pe' && select2 === 'micrometro') {
        numero = numero * 304800

    } if (select1 === 'pe' && select2 === 'nanometro') {
        numero = numero * 304800000000

    } if (select1 === 'pe' && select2 === 'milha') {
        numero = numero / 5280

    } if (select1 === 'pe' && select2 === 'jarda') {
        numero = numero / 3

    } if (select1 === 'pe' && select2 === 'polegada') {
        numero = numero * 12

    } if (select1 === 'pe' && select2 === 'milhaNautica') {
        numero = numero / 6076

    } if (select1 === 'pe' && select2 === 'pe') {

    }

    //polegada
    if (select1 === 'polegada' && select2 === 'metro') {
        numero = numero / 39.37

    } if (select1 === 'polegada' && select2 === 'quilometro') {
        numero = numero / 39370

    } if (select1 === 'polegada' && select2 === 'centimetro') {
        numero = numero * 2.54

    } if (select1 === 'polegada' && select2 === 'milimetro') {
        numero = numero * 25.4

    } if (select1 === 'polegada' && select2 === 'micrometro') {
        numero = numero * 25400

    } if (select1 === 'polegada' && select2 === 'nanometro') {
        numero = numero * 2540000000

    } if (select1 === 'polegada' && select2 === 'milha') {
        numero = numero / 63360

    } if (select1 === 'polegada' && select2 === 'jarda') {
        numero = numero / 36

    } if (select1 === 'polegada' && select2 === 'pe') {
        numero = numero / 12

    } if (select1 === 'polegada' && select2 === 'milhaNautica') {
        numero = numero / 72913

    } if (select1 === 'polegada' && select2 === 'polegada') {

    }

    //milhaNautica
    if (select1 === 'milhaNautica' && select2 === 'metro') {
        numero = numero * 1852

    } if (select1 === 'milhaNautica' && select2 === 'quilometro') {
        numero = numero * 1.852

    } if (select1 === 'milhaNautica' && select2 === 'centimetro') {
        numero = numero * 185200

    } if (select1 === 'milhaNautica' && select2 === 'milimetro') {
        numero = numero * 1852000000

    } if (select1 === 'milhaNautica' && select2 === 'micrometro') {
        numero = numero * 1852000000000

    } if (select1 === 'milhaNautica' && select2 === 'nanometro') {
        numero = numero * 1852000000000000

    } if (select1 === 'milhaNautica' && select2 === 'milha') {
        numero = numero * 1.151

    } if (select1 === 'milhaNautica' && select2 === 'jarda') {
        numero = numero * 2025

    } if (select1 === 'milhaNautica' && select2 === 'pe') {
        numero = numero * 6076

    } if (select1 === 'milhaNautica' && select2 === 'polegada') {
        numero = numero * 72913

    } if (select1 === 'milhaNautica' && select2 === 'milhaNautica') {

    }

    numero = numero.toString();
    numero = numero.replace('.',',')

    

    document.getElementById('resultado').value = numero


}