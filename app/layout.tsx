import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Open for Product — Build something that matters. Together.",
    template: "%s | Open for Product",
  },
  description:
    "Open for Product connects people to meaningful projects where they can contribute what they can, when they can, and receive fair credit for the value they help create.",
  metadataBase: new URL("https://openforproduct.com"),
  icons: {
    icon: [
      { url: "/images/favicon.jpg", type: "image/jpeg" },
      { url: "/favicon.ico", sizes: "any" },
    ],
    shortcut: "/images/favicon.jpg",
    apple: "/images/favicon.jpg",
  },
  openGraph: {
    siteName: "Open for Product",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body suppressHydrationWarning>{children}</body>
    </html>
  );
}
