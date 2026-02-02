import { defineRouting } from "next-intl/routing"

export const routing = defineRouting({
   locales: ["en", "vi"],
   defaultLocale: "en",
   localePrefix: "as-needed",
   localeDetection: true,
   pathnames: {
      "/": {
         vi: "/",
      },
      "/artist": {
         vi: "/nghe-si",
      },
      "/news": {
         vi: "/tin-tuc",
      },
      "/news/[slug]": {
         vi: "/tin-tuc/[slug]",
      },
      "/gallery": {
         vi: "/bo-suu-tap",
      }
   },
})
