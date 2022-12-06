import { useState, FC, useEffect } from "react";

interface ILazy<P = Record<string, unknown>, R = unknown> {
    value: Promise<{ results: R }>;
    component: FC<P & { results: R }>;
    componentProps: P;
    fallback: FC<{ error?: Error }>;
}
const LazyModule: FC<ILazy> = ({
    fallback: Fallback,
    component: Component,
    componentProps,
    value,
}) => {
    const [data, setData] = useState<unknown>();
    const [error, setError] = useState<Error>();

    useEffect(() => {
        Promise.resolve(value)
            .then(({ results }) => {
                setData(results);
            })
            .catch((err: Error) => {
                setError(err);
                setData(undefined);
            });
    }, [value]);

    return data === undefined ? (
        <Fallback error={error} />
    ) : (
        <Component results={data} {...componentProps} />
    );
};

export { LazyModule };
