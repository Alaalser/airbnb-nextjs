import "./globals.css";

export const metadata = {
  title: "Airbnb",
  description: "Book unique homes and experiences all over the world.",
};

import { Nunito } from "next/font/google";

const font = Nunito({
  subsets: ["latin"],
  weight: ["400", "700"],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={font.className}>{children}</body>
    </html>
  );
}
