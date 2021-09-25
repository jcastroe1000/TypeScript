"use strict";
(function () {
    var hero = ['Dr Strange', 100, true];
    hero[0] = 'Ironman';
    hero[1] = 50;
    hero[2] = false;
})();
(function () {
    var avanger = 123;
    var exists;
    var power;
    avanger = 'Dr. Strange';
    console.log(avanger.charAt(0));
    avanger = 3.14169871154;
    console.log(avanger.toFixed(2));
})();
(function () {
    var batman = 'Bruce';
    var superman = 'Clark';
    var existe = false;
    var parejaHeroes = [batman, superman];
    var villano = ['Lex Lutor', 5, true];
    var aliados = ['Mujer Maravilla', 'Acuaman', 'San', 'Flash'];
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
    function activar_batiseñal() {
        return 'activada';
    }
    function pedir_ayuda() {
        console.log('Auxilio!!!');
    }
    var poder = '100';
    var largoDelPoder = poder.length;
    console.log(largoDelPoder);
})();
(function () {
    var numbers = [1, 2, 3, 4, 5, 7, 8, 9, 10];
    console.log(numbers);
    var villanos = ['Duende Verde', 'Octopus', 'Thanos'];
    villanos.forEach(function (v) { return console.log(v.toUpperCase); });
})();
(function () {
    var isSuperman = true;
    var isSpider = false;
    isSuperman = true && false;
    isSuperman = (isSpider) ? true : false;
    console.log({ isSuperman: isSuperman });
})();
(function () {
    var AudioLevel;
    (function (AudioLevel) {
        AudioLevel[AudioLevel["min"] = 0] = "min";
        AudioLevel[AudioLevel["medium"] = 1] = "medium";
        AudioLevel[AudioLevel["max"] = 2] = "max";
    })(AudioLevel || (AudioLevel = {}));
    var currentAudio = AudioLevel.medium;
    console.log(currentAudio);
})();
(function () {
    var a = 10;
    console.log(a);
})();
(function () {
    var error = function (message) {
        throw new Error(message);
    };
    error('Auxilio!');
})();
(function () {
})();
(function () {
    var avengers = 10;
    console.log(avengers);
    var villanos = 20;
    if (avengers < villanos) {
        console.log('Problemas');
    }
    else {
        console.log('Nos salvamos');
    }
})();
(function () {
    var _a;
    var Batman = 'Batman';
    var Spider = "Spiderman";
    var DrStrange = "Dr. Stange";
    var abc = 123;
    console.log("I'm " + Batman + " , " + abc);
    console.log(Batman.toLocaleUpperCase());
    console.log(((_a = Batman[10]) === null || _a === void 0 ? void 0 : _a.toLocaleUpperCase()) || 'No está presente');
})();
(function () {
    function callBatman() {
        return;
    }
    var callSuperman = function () {
        return;
    };
    var a = callBatman();
    console.log(a);
})();
var msg = 'Hola mundo!!';
console.log(msg);
(function () {
    var fullName = function (fisrtName, lastName, upper) {
        if (upper === void 0) { upper = false; }
        if (upper) {
            return (fisrtName + " " + (lastName || 'no lastName')).toUpperCase();
        }
        else {
            return fisrtName + " " + (lastName || 'no lastName');
        }
        var name = fullName('Tony', 'Stark', true);
    };
})();
(function () {
    var fullName = function (fisrtName, lastName) {
        return fisrtName + " " + (lastName || 'no lastName');
        var name = fullName('Tony', 'Stark');
    };
})();
(function () {
    var fullName = function (fisrtName, lastName) {
        return fisrtName + " " + lastName;
        var name = fullName('Tony', 'Stark');
    };
})();
(function () {
    var fullName = function (firstName) {
        var restArgs = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            restArgs[_i - 1] = arguments[_i];
        }
        return firstName + " " + restArgs.join(' ');
    };
    var superMan = fullName('Antonio', 'Castro', 'Esparza');
    console.log({ superMan: superMan });
});
var sumar = function (a, b) { return a + b; };
var contar = function (heroes) {
    return heroes.length;
};
var superHeroes = ["Flash", "Arrow", "Superman", "Linterna Verde"];
contar(superHeroes);
var llamarBatman = function (llamar) {
    if (llamar === void 0) { llamar = true; }
    if (llamar) {
        console.log("Batiseñal activada");
    }
};
llamarBatman();
var unirheroes = function (nombre) {
    var personas = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        personas[_i - 1] = arguments[_i];
    }
    return nombre + " " + personas.join(' ') + " ";
};
var noHaceNada = function (numero, texto, booleano, arreglo) { };
var noHaceNadaTampoco;
noHaceNadaTampoco = noHaceNada;
(function () {
    var addNumbers = function (a, b) { return a + b; };
    var greet = function (name) { return "Hola " + name; };
    var saveTheWorld = function () { return " El Mundo esta salvado!"; };
    var myFunction;
    myFunction = saveTheWorld;
    console.log(myFunction());
})();
(function () {
    var hero = 'Flash';
    function returnName() {
        return hero;
    }
    var activaBatisenal = function () {
        return 'Batisenal activa';
    };
    console.log(typeof activaBatisenal);
})();
var batimovil = {
    carroceria: "Negra",
    modelo: "6x6",
    antibalas: true,
    pasajeros: 4
};
var bumblebee = {
    carroceria: "Amarillo con negro",
    modelo: "4x2",
    antibalas: true,
    pasajeros: 4,
    disparar: function () {
        console.log("Disparando");
    }
};
var villanos = [{
        nombre: "Lex Luthor",
        edad: 54,
        mutante: false
    }, {
        nombre: "Erik Magnus Lehnsherr",
        edad: 49,
        mutante: true
    }, {
        nombre: "James Logan",
        edad: undefined,
        mutante: true
    }];
var charles = {
    poder: "psiquico",
    estatura: 1.78
};
var apocalipsis = {
    lider: true,
    miembros: ["Magneto", "Tormenta", "Psylocke", "Angel"]
};
var mystique;
mystique = charles;
mystique = apocalipsis;
(function () {
    var flash = {
        name: 'Barry Allen',
        age: 24,
        powers: ['Super velocidad', 'Viajar en el tiempo']
    };
    var ironMan = {
        name: 'Tony Stark',
        age: 40,
        powers: ['Intelgente', 'Armadura']
    };
    console.log(flash);
})();
(function () {
    var flash = {
        name: 'Barry Allen',
        age: 24,
        powers: [2, 4]
    };
    var ironMan = {
        name: 'Tony Stark',
        age: 40,
        powers: [1, 5],
        getName: function () {
            return this.name;
        }
    };
})();
(function () {
    var myCustomVariable = 'Antonio';
    console.log(myCustomVariable);
    myCustomVariable = 20;
    console.log(typeof myCustomVariable);
    myCustomVariable = {
        name: 'Jose',
        age: 31,
        powers: [1]
    };
    console.log(typeof myCustomVariable);
})();
//# sourceMappingURL=main.js.map