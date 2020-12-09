'use strict';

import Router from 'koa-router';

import MasterController from '../controllers/master';
import BaseRoute from './base-route';

class ExampleRoute extends BaseRoute {
    constructor() {
        super('/example');
    }

    public mapRoutes(router: Router) {
        router.get('/', async (ctx, next) => {
            ctx.body = MasterController.ExampleController.doStuff();
        });
    }
}

const exampleRoute = new ExampleRoute();
export default exampleRoute;
