import {Triangle} from './Triangle';


let triangle;

triangle = new Triangle(1,1,1);
console.assert(triangle.type === Triangle.EQUILATERAL, '1 1 1 is equilateral');

triangle = new Triangle(1,2,2);
console.assert(triangle.type === Triangle.ISOSCELES, '1 2 2 is isosceles');
triangle = new Triangle(2,2,1);
console.assert(triangle.type === Triangle.ISOSCELES, '2 2 1 is isosceles');
triangle = new Triangle(2,1,2);
console.assert(triangle.type === Triangle.ISOSCELES, '2 1 2 is isosceles');

triangle = new Triangle(2,3,4);
console.assert(triangle.type === Triangle.SCALENE, '2 3 4 is scalene');

triangle = new Triangle(1,1,2);
console.assert(triangle.type === Triangle.INVALID, '1 1 2 is invalid');