import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "별의문 (Stargate Corp)",
  description: "AI 소프트웨어로 지도·데이터·자동화를 잇는 별의문의 프로젝트",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  );
}
