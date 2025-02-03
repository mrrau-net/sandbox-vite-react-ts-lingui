import { useEffect, useState } from "react";
import { i18n } from "@lingui/core";
import { I18nProvider } from "@lingui/react";
import { Trans } from "@lingui/react/macro";

import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { defaultLocale, dynamicActivate } from "./i18n";

function App() {
    const [count, setCount] = useState(0);
    const [locale, setLocale] = useState(defaultLocale);

    useEffect(() => {
        dynamicActivate(defaultLocale);
    }, []);

    const changeLanguage = (newLocale: string) => {
        setLocale(newLocale);
        dynamicActivate(newLocale);
    };

    return (
        <I18nProvider i18n={i18n}>
            <div>
                <a href="https://vite.dev" target="_blank">
                    <img src={viteLogo} className="logo" alt="Vite logo" />
                </a>
                <a href="https://react.dev" target="_blank">
                    <img src={reactLogo} className="logo react" alt="React logo" />
                </a>
            </div>
            <h1>Vite + React + Lingui</h1>
            <div className="card">
                <button onClick={() => setCount((count) => count + 1)}>
                    <Trans>count is {count}</Trans>
                </button>
                <p>This is just a test.</p>
            </div>
            <p className="read-the-docs">
                <Trans>Click on the Vite and React logos to learn more</Trans>
            </p>
            <div>
                {locale === "pl" && <button onClick={() => changeLanguage("en")}>English</button>}
                {locale === "en" && <button onClick={() => changeLanguage("pl")}>polski</button>}
            </div>
        </I18nProvider>
    );
}

export default App;
