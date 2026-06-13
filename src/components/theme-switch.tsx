import { FC, useState, useEffect } from "react";
import clsx from "clsx";

import { useTheme } from "@/hooks/use-theme";
import { SunFilledIcon, MoonFilledIcon } from "@/components/icons";

export interface ThemeSwitchProps {
  className?: string;
}

export const ThemeSwitch: FC<ThemeSwitchProps> = ({ className }) => {
  const [isMounted, setIsMounted] = useState(false);

  const { theme, toggleTheme } = useTheme();

  const isLight = theme === "light";

  useEffect(() => {
    setIsMounted(true);
  }, [isMounted]);

  // Prevent Hydration Mismatch
  if (!isMounted) return <div className="h-6 w-6" />;

  return (
    <button
      aria-label={`Switch to ${isLight ? "dark" : "light"} mode`}
      className={clsx(
        "flex cursor-pointer items-center justify-center rounded-lg px-px text-default-500 transition-opacity hover:opacity-80",
        className,
      )}
      type="button"
      onClick={toggleTheme}
    >
      {isLight ? (
        <MoonFilledIcon size={22} />
      ) : (
        <SunFilledIcon size={22} />
      )}
    </button>
  );
};
