// app/components/ThemeSwitcher.tsx
"use client";

import { Spinner } from "@nextui-org/react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { Suspense, useEffect, useState } from "react";

export function ThemeSwitcher() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div>
      {theme === "dark" ? (
        <Sun onClick={() => setTheme("light")} />
      ) : (
        <Moon onClick={() => setTheme("dark")} />
      )}
    </div>
  );
}
