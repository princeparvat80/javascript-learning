let emp1 = {
    name:'Prince',
    Designation:'Ceo',
    salaray: 1250000,
}
let emp2 = {
    name:'Rahul',
    Designation:'Cfo',
    salaray: 125000,
}
let emp3 = {
    name:'lovely',
    Designation:'HR',
    salaray: 12500,
}
let emp4 = {
    name:'rtvik',
    Designation:'Cmo',
    salaray: 195000,
}
let emp5 = {
    name:'ayush',
    Designation:'Cpo',
    salaray: 175400,
}
let emp6 = {
    name:'surya',
    Designation:'Ias',
    salaray: 1258700,
}
let emp7 = {
    name:'Pandey',
    Designation:'bhj',
    salaray: 12465,
}
let emp8 = {
    name:'Tiwari',
    Designation:'lok',
    salaray: 18000,
}

let Employee = [
    emp1,
    emp2,
    emp3,
    emp4,
    emp5,
    emp6,
    emp7,
    emp8,
]

Employee.map(emp => {
    //console.log(emp);
    emp.salaray *= 1.25
   // console.log(emp);
})

let filetrs = Employee.filter((employ) => 
 employ.salaray < 125000 
);

console.log(filetrs);


