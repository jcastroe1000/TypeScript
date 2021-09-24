 type carro ={
  carroceria:string;
  modelo:string;
  antibalas:boolean; 
  pasajeros:number;
  disparar?: ()=>void;
 }

// Objetos
const batimovil:carro= {
  carroceria: "Negra",
  modelo: "6x6",
  antibalas: true,
  pasajeros:4
};

const bumblebee:carro= {
  carroceria: "Amarillo con negro",
  modelo: "4x2",
  antibalas: true,
  pasajeros:4,
  disparar(){ // El metodo disparar es opcional
    console.log("Disparando");
  }
};
//ya


// Villanos debe de ser un arreglo de objetos personalizados
type Xmen_villanos ={
  nombre:string;
  edad: any;
  mutante:boolean;
}

const villanos:Xmen_villanos[] = [{
  nombre:"Lex Luthor",
  edad: 54,
  mutante:false
},{
  nombre: "Erik Magnus Lehnsherr",
  edad: 49,
  mutante: true
},{
  nombre: "James Logan",
  edad: undefined,
  mutante: true
}];

// Multiples tipos
// cree dos tipos, uno para charles y otro para apocalipsis
type Xmen ={
  poder:string;
  estatura:number;
}
//ya
type Xmen_Jefe ={
  lider:boolean;
  miembros:string[];
}

const charles:Xmen = {
  poder:"psiquico",
  estatura: 1.78
};

const apocalipsis:Xmen_Jefe = {
  lider:true,
  miembros: ["Magneto","Tormenta","Psylocke","Angel"]
}

// Mystique, debe poder ser cualquiera de esos dos mutantes (charles o apocalipsis)
let mystique:Xmen|Xmen_Jefe;

mystique = charles;
mystique = apocalipsis;
