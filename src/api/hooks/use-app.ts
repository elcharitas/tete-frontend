import { useCallback } from "react";
import { useLocalStorage } from "react-use";
import { useConfig } from "./use-config";

const INITIAL_APP_STORE: IAppStore = {
    page: {
        last: null,
        visited: null,
        cookies: false,
    },
};

const useApp = () => {
    const appName = useConfig<string>("app.short_name");
    const [app, setApp] = useLocalStorage(appName.value, INITIAL_APP_STORE);

    const reset = () => setApp(INITIAL_APP_STORE);

    const dispatch = useCallback(
        (path: string, value: unknown) => {
            const newApp: Record<string, any> = { ...app };
            const paths = path.split(".");

            paths.reduce((prev, next, index) => {
                const isLastIndex = index === paths.length - 1;
                const isValidKey = prev.hasOwnProperty(next);
                if (isLastIndex && isValidKey) {
                    prev[next] = value;
                } else if (isValidKey) {
                    prev[next] = { ...prev[next] };
                }
                return prev[next];
            }, newApp);

            setApp(newApp as IAppStore);
        },
        [app]
    );

    return { app, reset, dispatch };
};

export { useApp };
