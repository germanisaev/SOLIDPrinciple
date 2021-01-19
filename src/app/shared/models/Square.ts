import { Figure } from '../interfaces/figure';

export class Square implements Figure {
    private width: number = 0;
    private height: number = 0;
    
    setWidth(width: number) { this.width = width; }
    setHeight(height: number) { this.height = height; }
    areaOf() {
        return this.width * this.height;
    }
}