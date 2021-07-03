let certification = new Promise((resolve,reject)=>{
    certify=true;
    if(certify){
       setTimeout(()=>{
        resolve('Certfication obtained');
       },3000)
    }
    else{
        reject('Failed');
    }
})

certification.then((succses)=>{
    console.log(succses);
}).catch((Failure)=>{
    console.log(Failure);
})

console.log('test');