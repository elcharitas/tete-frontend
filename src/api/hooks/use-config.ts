import { useFilter, useRealtime } from "react-supabase";
import { pick, TPickPath } from "../utils/pick";
import { CONFIG } from "../config";

type TConfig = Omit<typeof CONFIG, "MANIFEST" | "LOGGING">;
type TConfigPath = TPickPath<TConfig>;
type TRemoteConfig = {
    key: string;
    value: string;
    group: string;
};

/**
 * A hook to get a config value from the remote config table or the local config.
 * This hook will automatically update the value if it changes in the remote config table.
 *
 * @param key The key of the config to fetch.
 * @returns
 */
const useConfig = (key: Lowercase<TConfigPath>) => {
    const filter = useFilter(
        (query) => {
            const groupKey = key.split(".");
            if (groupKey.length > 1) {
                return query.eq("group", groupKey.shift());
            }
            return query;
        },
        [key]
    );
    const [{ data: configData, ...rest }] = useRealtime<TRemoteConfig>(
        CONFIG.SUPABASE.TABLES.CONFIG,
        { select: { filter } }
    );

    const remoteConfig = configData?.reduce((a, b) => {
        return {
            ...a,
            [b.key.toUpperCase()]: b.value,
        };
    }, {} as TConfig);

    return {
        value: pick<TConfig, TConfigPath>(
            remoteConfig || CONFIG,
            key.toUpperCase() as TConfigPath
        ),
        ...rest,
    };
};

export { useConfig };
