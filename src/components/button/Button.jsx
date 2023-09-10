"use client";
import { useTheme } from "next-themes";
import React from "react";

const Button = () => {
  const { systemTheme, theme, setTheme } = useTheme();
  const currentTheme = theme === "system" ? systemTheme : theme;

  const handleClick = () => {
    theme == "dark" ? setTheme("light") : setTheme("dark");
  };

    return (
      <div className="cursor-pointer bg-slate-500 w-10 h-5 text-sm flex items-center justify-center hover:bg-slate-900 relative rounded-md" onClick={handleClick}>
        <span>☀️</span>
        <span>🌙</span>
        <div className="w-5 h-full rounded-full bg-green-700 absolute transition-all duration-75 ease-linear" style={theme=="dark" ? {left:20} : {left:0}}/>
      </div>
    )
};

export default Button;
