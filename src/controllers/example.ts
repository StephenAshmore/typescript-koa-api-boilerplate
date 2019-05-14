export default class ExampleController {
    private count: number;
    constructor() {
        this.count = 0;
    }

    public doStuff() {
        this.count++;
        return `You've viewed this ${this.count} times!`;
    }
}
