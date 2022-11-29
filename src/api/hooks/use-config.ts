import { pick, TPickPath } from "../utils/pick";
import { CONFIG } from "../config";

type TConfig = Omit<typeof CONFIG, "MANIFEST" | "LOGGING">;
type TConfigPath = TPickPath<TConfig>;

const useConfig = (key: Lowercase<TConfigPath>) => {
    return {
        value: pick<TConfig, TConfigPath>(
            CONFIG,
            key.toUpperCase() as TConfigPath
        ),
    };
};

export { useConfig };
