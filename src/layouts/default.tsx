import { Link } from "@heroui/react";

import { Navbar } from "@/components/navbar";

export default function DefaultLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="relative flex flex-col h-screen">
      <Navbar />
      <main className="flex-1 container mx-auto max-w-7xl px-6 py-6 overflow-auto">
        {children}
      </main>
      <footer className="w-full flex items-center justify-center py-3">
        <Link
          className="flex items-center gap-1 text-current"
          href="https://nextui-docs-v2.vercel.app?utm_source=next-pages-template"
          aria-label="nextui.org homepage"
          rel="noopener noreferrer"
          target="_blank"
        >
          <span className="text-default-600">Powered by</span>
          <p className="text-primary">NextUI</p>
        </Link>
      </footer>
    </div>
  );
}
