import { useMemo, lazy, Suspense, FC } from "react";
import useLocation from "wouter/use-location";
import ErrorPage from "./404";

const routes = import.meta.glob<{ default: FC }>("./*.tsx");

const App: FC = () => {
    const [path, push] = useLocation();
    const Page = useMemo(() => {
        let route = path.replace("/", "") || "home";
        if (!routes[`./${route}.tsx`]) {
            return ErrorPage;
        }
        return lazy(routes[`./${route}.tsx`]);
    }, [path]);

    return (
        <Suspense>
            <Page router={{ path, push }} />
        </Suspense>
    );
};

export default App;
