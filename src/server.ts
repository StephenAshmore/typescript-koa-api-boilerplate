'use strict';

import * as Koa from 'koa';
import * as KoaCompose from 'koa-compose';
import * as compress from 'koa-compress';
import * as swagger from 'swagger2';

import { ui } from 'swagger2-koa';

import config from './config';

// routes:
// if you have a large number of routes, you can create a function to compose these elsewhere.
import ExampleRoute from './routes/example';
import HealthRoute from './routes/health';

class Server {
    private server: Koa;

    constructor() {
        this.server = new Koa();

        const handleError = async (ctx: Koa.Context, next: () => void) => {
            try {
                await next();
            } catch (e) {
                ctx.body = e;
                ctx.status = e.response_code || 500;
            }
        };

        // middleware to compress responses greater than 1kb
        const compressResponse = compress({
            flush: require('zlib').Z_SYNC_FLUSH,
            threshold: 1024,
        });

        // compose all middlewares
        const middleware = KoaCompose([
            compressResponse,
            handleError,
            ExampleRoute.getRoutes(),
            HealthRoute.getRoutes(),
            ui(swagger.loadDocumentSync('./swagger.yml')),
        ]);

        // load middlewares
        this.server.use(middleware);
    }

    /**
     * Start HTTP REST Server
     */
    public start() {
        return new Promise<any>((resolve: any, reject: any) => {
            this.server.listen(config.port, () => {
                resolve();
            });
        });
    }
}

const server = new Server();

export default server;
