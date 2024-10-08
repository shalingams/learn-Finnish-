import {
  vitePlugin as remix,
  cloudflareDevProxyVitePlugin as remixCloudflareDevProxy,
} from "@remix-run/dev";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig({
  plugins: [
    remixCloudflareDevProxy(),
    remix({
      future: {
        v3_fetcherPersist: true,
        v3_relativeSplatPath: true,
        v3_throwAbortReason: true,
      },
      routes(defineRoutes) {
        return defineRoutes((route) => {
          route("/", "routes/home/index.tsx", { index: true });
          route("numbers", "routes/numbers/index.tsx");
          route("numbers/numbers", "routes/numbers/count.tsx");
          route("numbers/practice", "routes/numbers/practice.tsx");
          route("/numbers/practice/level", "routes/numbers/level.tsx");
          route("words", "routes/words/index.tsx");
          route("words/words", "routes/words/words.tsx");
        });
      },
    }),
    tsconfigPaths(),
  ],
});
