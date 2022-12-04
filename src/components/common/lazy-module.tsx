import { lazy, FC, ReactNode, Suspense } from "react";

interface ILazy<P = Record<string, unknown>, R = unknown> {
    value: Promise<{ results: R }>;
    component: FC<P & { results: R }>;
    componentProps: P;
    fallback?: ReactNode;
}
const LazyModule: FC<ILazy> = ({
    fallback,
    component: Component,
    componentProps,
    value,
}) => {
    const Module = lazy(async () => {
        const { results } = await Promise.resolve(value);
        return {
            default: (props: ILazy["componentProps"]) => (
                <Component results={results} {...props} />
            ),
        };
    });
    return (
        <Suspense fallback={fallback}>
            <Module {...componentProps} />
        </Suspense>
    );
};

export { LazyModule };
