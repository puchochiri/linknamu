import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "링크나무 | 김개발",
  description: "김개발의 모든 링크를 한 곳에",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="ko" className="h-full antialiased">
      <head>
        {/* Pretendard: 한글을 포함한 가변 폰트 (사용하는 글자만 내려받는 dynamic subset) */}
        <link
          rel="stylesheet"
          crossOrigin="anonymous"
          href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/variable/pretendardvariable-dynamic-subset.min.css"
        />
      </head>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
