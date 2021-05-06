import {Shape} from './Shape'

export class Rectanle extends Shape {

    constructor(X: number, Y: number, private _width: number, private _length: number) {
        super(X, Y);
    }

    public get length(): number {
        return this._length;
    }
    public set length(value: number) {
        this._length = value;
    }

    public get width(): number {
        return this._width;
    }
    public set width(value: number) {
        this._width = value;
    }
    
    getInfo(): string {
        return super.getInfo() + `, width=${this.width} length=${this.length}`;
    }
}