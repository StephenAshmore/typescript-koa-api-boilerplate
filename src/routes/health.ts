'use strict';

import * as Router from 'koa-router';

import BaseRoute from './base-route';

class HealthRoute extends BaseRoute {
    constructor() {
        super('/health');
    }

    public mapRoutes(router: Router) {
        router.get('/', async (ctx, next) => {
            ctx.body = 'healthy';
        });
    }
}

const healthRoute = new HealthRoute();
export default healthRoute;
