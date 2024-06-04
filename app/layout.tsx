import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { store } from "./(main)/redux-toolkit/store";
import { Provider } from 'react-redux';

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Beginners Projects",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Provider store={store}>
          {children}
        </Provider>
      </body>
    </html>
  );
}
