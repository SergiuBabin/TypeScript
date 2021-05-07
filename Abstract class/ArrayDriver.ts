import { Shape } from './Shape';
import { Circle } from './Circle';
import { Rectanle } from './Rectangle';


let c = new Circle(10, 20, 30);
let r = new Rectanle(0, 0, 3, 7);

// declare an array of shapes ... initialy empty

let theShapes: Shape[] = [];

//add the shapes to the array 
theShapes.push(c);
theShapes.push(r);

for (let i = 0; i < theShapes.length; i++) {
    console.log(theShapes[i].getInfo());
    console.log(theShapes[i].calculateArea());
    console.log();
}
