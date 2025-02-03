import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { lingui } from "@lingui/vite-plugin";

export default defineConfig({
    plugins: [
        react({
            babel: {
                plugins: ["@lingui/babel-plugin-lingui-macro"],
            },
        }),
        lingui(),
    ],
    // When running Vite on WSL2, file system watching does not work when a file is edited by Windows applications (non-WSL2 process).
    server: {
        watch: {
            usePolling: true,
        },
    },
});
