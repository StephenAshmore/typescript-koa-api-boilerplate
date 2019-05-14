interface IConfig {
    name: string;
    port: number;
}

// tslint:disable:no-invalid-template-strings
const config: IConfig = {
    name: 'instock-root-cause',
    port: parseInt(process.env.PORT, 10) || 40404,
};

export default config;
