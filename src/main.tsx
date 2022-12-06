import React from "react";
import ReactDOM from "react-dom/client";
import { ThemeProvider } from "./api/providers";
import { setup } from "./api/utils/setup";
import App from "./pages";

 
setup();

const rootElement = document.querySelector<HTMLDivElement>("#root");
if (rootElement) {
    ReactDOM.createRoot(rootElement).render(
        <React.StrictMode>
            <ThemeProvider>
                <App />
            </ThemeProvider>
        </React.StrictMode>
    );
}
