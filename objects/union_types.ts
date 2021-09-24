(()=>{
    type Hero ={
        name:string;
        age?:number;
        powers:number[];
        getName?:()=>string;
    }
    
    let myCustomVariable:(string|number|Hero) = 'Antonio';
    console.log(myCustomVariable);

    myCustomVariable=20
    console.log(typeof myCustomVariable)

    myCustomVariable={
        name: 'Jose',
        age:31,
        powers:[1]
    }
    console.log(typeof myCustomVariable)
})()