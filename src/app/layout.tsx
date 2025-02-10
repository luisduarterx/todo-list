import type { Metadata } from "next";
import "./global.css";
export const metadata: Metadata = {
  title: "todo List",
  description: "anote suas tarefas diarias",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
