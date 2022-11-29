/// <reference types="vite/client" />

declare interface IPage {
    router: {
        path: string;
        push(path: string): void;
    };
}
