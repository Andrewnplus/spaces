import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <section className="flex flex-col gap-10 items-center justify-center min-h-[calc(100vh-4rem)] p-8">
      {/* Hero */}
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-bold tracking-tight">
          歡迎來到 <span className="text-primary">Spaces</span>
        </h1>
        <p className="max-w-xl text-muted-foreground">
          這裡是一個 Next.js + Tailwind + shadcn/ui
          的展示站，可切換主題並顯示不同 Space 內容。
        </p>
      </div>

      {/* Action buttons */}
      <div className="flex flex-wrap gap-4 justify-center">
        <Link
          href="https://github.com/your-repo/spaces"
          className="inline-flex items-center rounded-md border border-input bg-background px-6 py-2 text-sm font-medium shadow hover:bg-accent hover:text-accent-foreground transition-colors"
          target="_blank"
        >
          <Image
            src="/next.svg"
            alt="Next.js"
            width={18}
            height={18}
            className="mr-2 dark:invert"
          />
          原始碼
        </Link>

        <Link
          href="https://vercel.com/new"
          className="inline-flex items-center rounded-md bg-primary px-6 py-2 text-sm font-medium text-primary-foreground shadow hover:bg-primary/90 transition-colors"
          target="_blank"
        >
          部署到 Vercel
        </Link>
      </div>
    </section>
  );
}
