/// <reference types="vite/client" />

declare module "*.svg" {
    import { FC } from "react";

    type SVGProps = HTMLElement & { height: string; width: string };
    const ReactComponent: FC<Partial<SVGProps>>;
    export { ReactComponent };
}

declare interface IPage {
    router: {
        path: string;
        push(path: string): void;
    };
}

declare interface ILayout {
    title: string;
    children: React.ReactNode;
}

declare interface IAppStore {
    [key: string]: unknown;
    page: {
        last: string | null;
        visited: number | null;
        cookies: boolean;
    };
}
