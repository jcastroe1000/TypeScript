(()=>{

    let avanger:any = 123;
    let exists;
    let power;

    avanger = 'Dr. Strange';
    //console.log(avanger.charAt(0))
    console.log((avanger as string).charAt(0));
    avanger = 3.14169871154;
    console.log((<number>avanger).toFixed(2));
})()
