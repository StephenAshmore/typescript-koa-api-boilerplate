interface IConfig {
    name: string;
    port: number;
}

// tslint:disable:no-invalid-template-strings
const config: IConfig = {
    name: 'typescript-koa-api-boilerplate',
    port: parseInt(process.env.PORT, 10) || 40404,
};

export default config;
