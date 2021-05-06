import { Shape } from './Shape';
import { Circle } from './Circle';
import { Rectanle } from './Rectangle';


let s = new Shape(10, 20);
console.log(s.getInfo());

let c = new Circle(10, 20, 30);
console.log(c.getInfo());

let r = new Rectanle(0, 0, 3, 7);
console.log(r.getInfo());

