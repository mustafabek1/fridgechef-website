import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "FridgeChef - AI-Powered Recipe Generator",
  description: "Turn your fridge ingredients into delicious recipes with AI. Snap a photo or enter ingredients manually to get personalized recipe suggestions.",
  keywords: ["recipe", "AI", "cooking", "ingredients", "food", "meal planning"],
  authors: [{ name: "FridgeChef" }],
  openGraph: {
    title: "FridgeChef - AI-Powered Recipe Generator",
    description: "Turn your fridge ingredients into delicious recipes with AI",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
