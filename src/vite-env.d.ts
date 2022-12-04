/// <reference types="vite/client" />

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
    page: {
        last: string | null;
        visited: number | null;
        cookies: boolean;
    };
}
