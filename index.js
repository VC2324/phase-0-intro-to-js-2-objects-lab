// Write your solution in this file!
const employee  = { 
    name: "x",
    streetAdress: "y",
}

function updateEmployeeWithKeyAndValue(obj, key, value) {
    const newEmployee = {...obj}
    newEmployee[key] = value;
    return newEmployee
}


function destructivelyUpdateEmployeeWithKeyAndValue(obj, key, value){
    obj[key] = value;

    return obj
}

function deleteFromEmployeeByKey (obj, key,){
    const firedEmployee = {...obj}
    delete firedEmployee[key] 
    return firedEmployee
}

function destructivelyDeleteFromEmployeeByKey(obj, key){
    delete obj[key]
    return obj
}
