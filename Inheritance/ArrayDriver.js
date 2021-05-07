"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Shape_1 = require("./Shape");
var Circle_1 = require("./Circle");
var Rectangle_1 = require("./Rectangle");
var s = new Shape_1.Shape(10, 20);
var c = new Circle_1.Circle(10, 20, 30);
var r = new Rectangle_1.Rectanle(0, 0, 3, 7);
// declare an array of shapes ... initialy empty
var theShapes = [];
//add the shapes to the array 
theShapes.push(s);
theShapes.push(c);
theShapes.push(r);
for (var i = 0; i < theShapes.length; i++) {
    console.log(theShapes[i].getInfo());
}
