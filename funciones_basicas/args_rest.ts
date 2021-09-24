(()=>{
    const fullName = (firstName:string,...restArgs:string[])=>{
        return `${firstName} ${restArgs.join(' ')}`;
    }
    
    const superMan = fullName ('Antonio' ,'Castro','Esparza');
    console.log({superMan});

})