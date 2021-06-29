//---------------------------------------------------------Normal for Loop-----------------------------
var num= 13;
var res;
for(x=1;x<=10;x++){
 res= num * x;
 console.log(num + "*" + x + "=" + res);
}

//---------------------------------------- for in (use to pick data from object)-------------------------------------

var object = {'name':'Prince' ,'address':'BUI','phn num':'54784' };
for(data in object){
    console.log(data);
    //this will give the keys
}

for(let data in object){
    console.log(object[data]);
    //this will give the values
}

//------------------------------------------for of --------------------------------------------------------
for (let item of ['prince','35','2651.023']){
    console.log(item);
}