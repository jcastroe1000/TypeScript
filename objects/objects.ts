(()=>{
    let flash:{name:string, age?:number,powers:string[],getName?:()=>string} ={
        name: 'Barry Allen',
        age : 24,
        powers:['Super velocidad' , 'Viajar en el tiempo']
    }

    let ironMan:{name:string, age?:number,powers:string[],getName?:()=>string} ={
        name: 'Tony Stark',
        age : 40,
        powers:['Intelgente' , 'Armadura']
    }

//    flash={
//       name:'Clark Kent',
        //age:40,
//        powers:['Super Fuerza'],
//        getName(){
//            return this.name;
//        }
//    }

    console.log(flash);


 
})()