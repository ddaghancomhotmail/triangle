
export class Triangle {
    static get INVALID() { return 'invalid'; };

    static get EQUILATERAL() { return 'equilateral'; };

    static get ISOSCELES() { return 'isosceles'; };

    static get SCALENE() { return 'scalene'; };

    constructor(a, b, c){
        this.a = parseFloat(a);
        this.b = parseFloat(b);
        this.c = parseFloat(c);
    }

    get type() {
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
}