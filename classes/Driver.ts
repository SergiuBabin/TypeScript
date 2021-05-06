import {Customer} from "./Customer";

let myCustomer = new Customer('Sergiu', 'Babi');

myCustomer.firstName = "Sergiu";
myCustomer.lastName = "Babin";

console.log(`Hi ${myCustomer.lastName}`);