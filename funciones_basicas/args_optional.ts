(()=>{
    const fullName =(fisrtName:string,lastName?:string):string =>{

        return `${fisrtName} ${lastName || 'no lastName'}`;
        const name = fullName('Tony' ,'Stark');    
    }
})()