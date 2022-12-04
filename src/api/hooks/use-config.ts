import { pick, TPickPath, TPickPathValue } from "../utils/pick";
import { CONFIG } from "../config";

type TConfig = Omit<typeof CONFIG, "MANIFEST" | "LOGGING">;
type TConfigPath = TPickPath<TConfig>;

const useConfig = <T extends TPickPathValue<TConfig, TConfigPath>>(
    key: Lowercase<TConfigPath>
): { value: T } => {
    return {
        value: pick<TConfig, TConfigPath>(
            CONFIG,
            key.toUpperCase() as TConfigPath
        ) as T,
    };
};

export { useConfig };
