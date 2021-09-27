(()=>{
    interface Client {
        name:string;
        age?: number;
        address:Address;
        
    }


    interface Address{
        id:1234,
        zip:57170,
        city:'Mexico'
    }

    const client:Client ={
        name : 'Antonio',
        age:31,
        address:{
            id:1234,
            zip:57170,
            city:'Mexico'
        },
        
    
    }

    const client2:Client ={
        name : 'Jose',
        age:31,
        address:{
            id:1234,
            zip:57170,
            city:'Mexico'
        },
       
    
    }

})()