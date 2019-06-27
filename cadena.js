function palindromo(cadena) {
    var pali = cadena.toUpperCase().split(' ').join('');
    var pali2 = pali.split('').reverse().join('');

    if(pali === pali2){
        return 'La palabra '+cadena+' es un palíndromo';
    }
    return 'La palabra '+cadena+' no es un palíndromo';
}

function palabras(cadena) {
    return cadena.split(' ').length;
}

function letras(cadena) {
    return cadena.split(' ').join('').split('').length;
}

function vocales(cadena) {
    return cadena.split(' ').join('').replace(/([^a_e_i_o_u_A_E_I_O_U_á_é_í_ó_ú_Á_É_Í_Ó_Ú_])/g,'').split('').length;
}

function consonantes(cadena) {
    return cadena.split(' ').join('').replace(/([a_e_i_o_u_A_E_I_O_U_á_é_í_ó_ú_Á_É_Í_Ó_Ú_])/g,'').split('').length;
}

module.exports.palindromo = palindromo;
module.exports.palabras = palabras;
module.exports.letras = letras;
module.exports.vocales = vocales;
module.exports.consonantes = consonantes;