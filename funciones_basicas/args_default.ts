(()=>{
    const fullName =(fisrtName:string,lastName?:string,upper:boolean= false,):string =>{
        if (upper){
            return `${fisrtName} ${lastName || 'no lastName'}`.toUpperCase();
        }else{
            return `${fisrtName} ${lastName || 'no lastName'}`;
        }
        
        const name = fullName('Tony','Stark',true);    }
})()