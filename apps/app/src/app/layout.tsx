import "./globals.css";
import "@repo/ui/styles.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "App web",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
