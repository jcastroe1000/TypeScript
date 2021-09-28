// Crear interfaces

interface Auto{
  encender:boolean,
  velocidadMaxima:number,
  acelerar():void
}

// Cree una interfaz para validar el auto (el valor enviado por parametro)
const conducirBatimovil = ( auto:Auto ):void => {
  auto.encender = true;
  auto.velocidadMaxima = 100;
  auto.acelerar();
}

const batimovil = {
  encender:false,
  velocidadMaxima:0,
  acelear(){
    console.log("...... gogogo!!!");
  }
}

// Cree una interfaz con que permita utilzar el siguiente objeto
// utilizando propiedades opcionales

interface Guason  {
  reir?: true,
  comer?:true,
  llorar?:false
}

const reir = ( guason:Guason ):void => {
  if( guason.reir ){
    console.log("JAJAJAJA");
  }
}


// Cree una interfaz para la siguiente funcion
interface CiudGotFn{
  (ciudadanos:string[]):number
}


const ciudadGotica = ( ciudadanos:string[] ):number => {
  return ciudadanos.length;
}

// Cree una interfaz que obligue crear una clase
// con las siguientes propiedades y metodos

/*
  propiedades:
    - nombre
    - edad
    - sexo
    - estadoCivil
    - imprimirBio(): void // en consola una breve descripcion.
*/

interface Person{
   name:string,
   age: number,
   gender: string,
   matiral_status:string,
   imprimirBio():void;
}


class Persona implements Person {
   public name:string;
   public age:number;
   public gender:string;
   public matiral_status:string;

   imprimirBio(){
      
   }
}