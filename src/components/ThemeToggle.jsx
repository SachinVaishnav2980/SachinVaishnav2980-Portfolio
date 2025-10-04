// import { Moon, Sun } from "lucide-react";
// import { useEffect, useState } from "react";
// import {cn} from "@/lib/utils";

// export const ThemeToggle = () => {
//   const [isDarkMode, setIsDarkMode] = useState(false);

//   useEffect(() => {
//   const storedTheme = localStorage.getItem("theme");
//   if (storedTheme) {
//     if (storedTheme === "dark") {
//       setIsDarkMode(true);
//       document.documentElement.classList.add("dark");
//     } else {
//       setIsDarkMode(false);
//       document.documentElement.classList.remove("dark");
//     }
//   } else {
//     const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
//     setIsDarkMode(prefersDark);
//     if (prefersDark) {
//       document.documentElement.classList.add("dark");
//     } else {
//       document.documentElement.classList.remove("dark");
//     }
//   }
// }, []);

//   const toggleTheme = () => {
//     if (isDarkMode) {
//       document.documentElement.classList.remove("dark");
//       localStorage.setItem("theme", "light");
//       setIsDarkMode(false);
//     } else {
//       document.documentElement.classList.add("dark");
//       localStorage.setItem("theme", "dark");
//       setIsDarkMode(true);
//     }
//   };

//   return (
//     <button
//       onClick={toggleTheme}
//       className={cn(
//         "fixed max-sm:hidden top-5 right-5 p-2 rounded-full transition-colors duration-300",
//         "focus:outline-none"
//       )}
//       aria-label="Toggle Theme">
//       {isDarkMode ? (
//         <Sun className="h-6 w-6 text-yellow-300" />
//       ) : (
//         <Moon className="h-6 w-6 text-blue-900" />
//       )}
//     </button>
//   );
// };

import { Moon, Sun } from "lucide-react";
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

export const ThemeToggle = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    setIsDarkMode(document.documentElement.classList.contains("dark"));
  }, []);

  const toggleTheme = () => {
    if (document.documentElement.classList.contains("dark")) {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
      setIsDarkMode(false);
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
      setIsDarkMode(true);
    }
  };

  return (
    <button
      onClick={toggleTheme}
      className={cn(
        "fixed max-sm:hidden top-5 right-5 p-2 rounded-full transition-colors duration-300",
        "focus:outline-none"
      )}
      aria-label="Toggle Theme"
    >
      {isDarkMode ? (
        <Sun className="h-6 w-6 text-yellow-300" />
      ) : (
        <Moon className="h-6 w-6 text-blue-900" />
      )}
    </button>
  );
};

