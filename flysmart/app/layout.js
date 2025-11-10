import "./globals.css";

export const metadata = { title: "FlySmart", description: "AI-powered flight booking" };

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
