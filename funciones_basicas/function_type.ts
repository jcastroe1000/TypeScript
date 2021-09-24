(()=>{
    const addNumbers = (a:number,b:number) => a+b ;
    const greet = (name:string) => `Hola ${name}` ;
    const saveTheWorld =() => ` El Mundo esta salvado!`;

    

    //myFunction=10;
    //console.log(myFunction);
    
    //let myFunction:(a:number,b:number)=>number;
    //myFunction=addNumbers
    //console.log(myFunction(1,2))

    //let myFunction:(a:string)=>string;
    //myFunction=greet
    //console.log(myFunction('Jose'))
    
    let myFunction:()=>void;
    myFunction=saveTheWorld
    console.log(myFunction())

})()