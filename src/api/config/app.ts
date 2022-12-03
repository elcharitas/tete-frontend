import packageInfo from "/src/../package.json";

export interface IAppConfig {
    NAME: string;
    DESCRIPTION: string;
    SHORT_NAME: string;
    VERSION: string;
}

const APP_CONFIG: IAppConfig = {
    NAME: packageInfo.name,
    SHORT_NAME: packageInfo.name,
    DESCRIPTION: packageInfo.description,
    VERSION: packageInfo.version,
};

export default APP_CONFIG;
