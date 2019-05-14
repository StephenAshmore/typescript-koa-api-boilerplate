'use strict';

import * as KoaCompose from 'koa-compose';
import * as Router from 'koa-router';

abstract class BaseRoute {
    private router: Router;
    private prefix: string;

    constructor(prefix: string) {
        this.prefix = prefix;
        this.router = new Router({
            prefix: this.prefix,
        });
    }

    public getNoPathRouter() {
        const router = new Router();
        this.mapRoutes(router);
        return router;
    }

    public getRoutes() {
        this.mapRoutes(this.router);
        return KoaCompose([
            this.router.routes(),
            this.router.allowedMethods({
                throw: true,
            }),
        ]);
    }

    protected abstract mapRoutes(router: Router): void;
}

export default BaseRoute;
