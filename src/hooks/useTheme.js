import { useState, useEffect } from "react";

export default function useTheme() {
  const [theme, setTheme] = useState("standard");

  useEffect(() => {
    const saved = localStorage.getItem("savedTheme");
    setTheme(saved || "standard");
  }, []);

  useEffect(() => {
    document.body.className = theme;
    localStorage.setItem("savedTheme", theme);
  }, [theme]);

  return { theme, setTheme };
}
