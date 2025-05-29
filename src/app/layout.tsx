import "@/app/globals.css";
import { Inter } from "next/font/google";
import { ThemeProvider } from "next-themes";
import TopTabs from "@/components/TopTabs";
import Sidebar from "@/components/Sidebar";
import ThemeToggle from "@/components/ThemeToggle";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Spaces",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="zh-Hant" suppressHydrationWarning>
      <body className={`${inter.className} antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <div className="flex flex-col">
            <div className="flex items-center justify-between">
              <TopTabs />
              <div className="pr-4 pt-2">
                <ThemeToggle />
              </div>
            </div>
            <div className="flex min-h-screen">
              <Sidebar />
              <main className="flex-1 p-6">{children}</main>
            </div>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
