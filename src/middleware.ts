import { NextRequest, NextResponse } from "next/server";

const locales = ["vi", "en"];
const defaultLocale = "en";

export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname;
  // Đã có locale thì bỏ qua
  if (locales.some((l) => pathname.startsWith(`/${l}`))) {
    return;
  }

  // Lấy ngôn ngữ từ browser
  const lang =
    request.headers
      .get("accept-language")
      ?.split(",")[0]
      ?.split("-")[0] || defaultLocale;

  const locale = locales.includes(lang) ? lang : defaultLocale;

  return NextResponse.rewrite(
    new URL(`/${locale}${pathname}`, request.url)
  );
}

export const config = {
  matcher: ["/((?!_next|favicon.ico).*)"],
};
