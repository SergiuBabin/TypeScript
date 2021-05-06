import { Shape } from './Shape';
import { Circle } from './Circle';
import { Rectanle } from './Rectangle';


let s = new Shape(10, 20);
let c = new Circle(10, 20, 30);
let r = new Rectanle(0, 0, 3, 7);

// declare an array of shapes ... initialy empty

let theShapes: Shape[] = [];

//add the shapes to the array 
theShapes.push(s);
theShapes.push(c);
theShapes.push(r);

