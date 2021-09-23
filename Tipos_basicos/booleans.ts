(() =>{
    let  isSuperman:boolean=true;
    let  isSpider:boolean=false;
    
    isSuperman = true && false;
    isSuperman = (isSpider) ? true: false;
    console.log({isSuperman})
})()