// Write your solution in this file!
//assign an employee variable to an Object containing name and streetAddress keys
const employee = {
    name : "Josh",
    streetAddress : "100 Main Street",
}
//Function that takes employee Object, a Key and a Value and returns a new object with updated value without mutating employee
function updateEmployeeWithKeyAndValue(employee,key,value) {
    return {
        ...employee,
        [key] : value
    }
}
//Function that does the same as above but does mutate Employee object
function destructivelyUpdateEmployeeWithKeyAndValue(employee,key,value) {
    employee[key] = value;
    return {
        ...employee,
        [key] : value
    }
}
/*
should take in a employee Object and a key. It should delete the property with that key from the employee Object. 
This should not mutate the original employee Object; it should return a new Object that doesn't include the identified key-value 
*/
function deleteFromEmployeeByKey(employee,key) {
    const dEmployee = {...employee};
    delete dEmployee[key];
    return dEmployee
}
//Same as above but does mutate it
function destructivelyDeleteFromEmployeeByKey(employee,key) {
    delete employee[key];
    return employee
}
