class test {
    constructor(pound=100){
    this.pound=pound;
    this.ingridient = [];      
    }

    addingridients(ingridient) {
        this.ingridient.push(ingridient)
    }

    getingridients(ingridient){
        console.log(this.ingridient);
    }

}

let test_call = new test(245)
console.log(test_call.pound);

let new_test_call = new test(2045)
console.log(new_test_call.pound);

let addup = new test();
addup.addingridients("chili")
addup.addingridients("sauf")
addup.addingridients("mutton")
addup.addingridients("chicken")
//console.log(addup); //this will print the whole object
addup.getingridients();