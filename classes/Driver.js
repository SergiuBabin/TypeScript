"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Customer_1 = require("./Customer");
var myCustomer = new Customer_1.Customer('Sergiu', 'Babi');
myCustomer.firstName = "Sergiu";
myCustomer.lastName = "Babin";
console.log("Hi " + myCustomer.lastName);
