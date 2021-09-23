"use strict";
(function () {
    // Tipos
    var batman = 'Bruce';
    var superman = 'Clark';
    var existe = false;
    // Tuplas
    var parejaHeroes = [batman, superman];
    var villano = ['Lex Lutor', 5, true];
    // Arreglos
    var aliados = ['Mujer Maravilla', 'Acuaman', 'San', 'Flash'];
    //Enumeraciones
    var fuerza_heroes;
    (function (fuerza_heroes) {
        fuerza_heroes[fuerza_heroes["Flash"] = 5] = "Flash";
        fuerza_heroes[fuerza_heroes["Superman"] = 100] = "Superman";
        fuerza_heroes[fuerza_heroes["Batman"] = 1] = "Batman";
        fuerza_heroes[fuerza_heroes["Acuaman"] = 0] = "Acuaman";
    })(fuerza_heroes || (fuerza_heroes = {}));
    var fuerzaFlash = fuerza_heroes.Flash;
    var fuerzaSuperman = fuerza_heroes.Superman;
    var fuerzaBatman = fuerza_heroes.Batman;
    var fuerzaAcuaman = fuerza_heroes.Acuaman;
    // Retorno de funciones
    function activar_batiseñal() {
        return 'activada';
    }
    function pedir_ayuda() {
        console.log('Auxilio!!!');
    }
    // Aserciones de Tipo
    var poder = '100';
    var largoDelPoder = poder.length;
    console.log(largoDelPoder);
})();
