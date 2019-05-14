import ExampleController from './example';

class MasterController {
    private exampleController: ExampleController;

    constructor() {
        this.exampleController = new ExampleController();
    }

    get ExampleController() {
        return this.exampleController;
    }
}

export default new MasterController();
