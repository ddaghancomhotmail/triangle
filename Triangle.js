'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

let Triangle = exports.Triangle = function () {
    _createClass(Triangle, null, [{
        key: 'INVALID',
        get: function () {
            return 'invalid';
        }
    }, {
        key: 'EQUILATERAL',
        get: function () {
            return 'equilateral';
        }
    }, {
        key: 'ISOSCELES',
        get: function () {
            return 'isosceles';
        }
    }, {
        key: 'SCALENE',
        get: function () {
            return 'scalene';
        }
    }]);

    function Triangle(a, b, c) {
        _classCallCheck(this, Triangle);

        this.a = parseFloat(a);
        this.b = parseFloat(b);
        this.c = parseFloat(c);
    }

    _createClass(Triangle, [{
        key: 'type',
        get: function () {
            if (this.a <= 0 || this.b <= 0 || this.c <= 0 || this.a + this.b <= this.c || this.a + this.c <= this.b || this.b + this.c <= this.a) {
                return Triangle.INVALID;
            }

            if (this.a === this.b && this.b === this.c) {
                return Triangle.EQUILATERAL;
            }

            if (this.a === this.b || this.b === this.c || this.a === this.c) {
                return Triangle.ISOSCELES;
            }

            return Triangle.SCALENE;
        }
    }]);

    return Triangle;
}();
