import { Link } from "@heroui/react";

import { siteConfig } from "@/config/site";
import { ThemeSwitch } from "@/components/theme-switch";
import { Logo } from "@/components/icons";

export const Navbar = () => {
  return (
    <nav className="w-full border-b border-separator bg-background">
      <header className="container mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        <div className="flex max-w-fit items-center gap-3">
          <Link
            className="flex items-center justify-start gap-1 text-foreground"
            href="/"
          >
            <Logo />
            <p className="font-bold text-inherit">ACME</p>
          </Link>
          <ul className="ml-2 hidden justify-start gap-4 lg:flex">
            {siteConfig.navItems.map((item) => (
              <li key={item.href}>
                <Link
                  className="text-foreground hover:underline data-[active=true]:font-medium data-[active=true]:text-accent"
                  href={item.href}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex items-center gap-4">
          <ThemeSwitch />
        </div>
      </header>
    </nav>
  );
};
