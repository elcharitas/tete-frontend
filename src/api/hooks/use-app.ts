import { useCallback } from "react";
import { useLocalStorage } from "react-use";
import { Logger } from "../utils/logging";
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
            const newApp: Partial<IAppStore> = { ...app };
            const paths = path.split(".");

            paths.reduce((prev, next, index) => {
                const isLastIndex = index === paths.length - 1;
                const isValidKey = Object.keys(prev).includes(next);
                if (isLastIndex && isValidKey) {
                    if (typeof value !== typeof prev[next]) {
                        Logger.error("useApp::dispatch: value type mismatch");
                        return prev[next] as IAppStore;
                    }
                    // eslint-disable-next-line no-param-reassign
                    prev[next] = value;
                }
                return prev[next] as IAppStore;
            }, newApp);

            setApp(newApp as IAppStore);
        },
        // eslint-disable-next-line react-hooks/exhaustive-deps
        [app]
    );

    return { app, reset, dispatch };
};

export { useApp };
