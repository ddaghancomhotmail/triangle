'use strict';

var _Triangle = require('./Triangle');

let triangle;

triangle = new _Triangle.Triangle(1, 1, 1);
console.assert(triangle.type === _Triangle.Triangle.EQUILATERAL, '1 1 1 is equilateral');

triangle = new _Triangle.Triangle(1, 2, 2);
console.assert(triangle.type === _Triangle.Triangle.ISOSCELES, '1 2 2 is isosceles');
triangle = new _Triangle.Triangle(2, 2, 1);
console.assert(triangle.type === _Triangle.Triangle.ISOSCELES, '2 2 1 is isosceles');
triangle = new _Triangle.Triangle(2, 1, 2);
console.assert(triangle.type === _Triangle.Triangle.ISOSCELES, '2 1 2 is isosceles');

triangle = new _Triangle.Triangle(2, 3, 4);
console.assert(triangle.type === _Triangle.Triangle.SCALENE, '2 3 4 is scalene');

triangle = new _Triangle.Triangle(1, 1, 2);
console.assert(triangle.type === _Triangle.Triangle.INVALID, '1 1 2 is invalid');
