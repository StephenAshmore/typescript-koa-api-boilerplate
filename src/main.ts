'use strict';

import server from './server';

async function start() {
    'use strict';
    try {
        await server.start();
    } catch (error) {
        process.exit(1);
    }
}

if (require.main === module) {
    start();
}
