import type { ReactElement } from "react";

interface ButtonProps {
    variant:"primary" | "secondary";
    text:string;
    startIcon?:ReactElement
    onClick?:() => void
}


const variantClasses = {
    "primary":"bg-emerald-800 text-white",
    "secondary":"bg-emerald-200 text-purple"
}

const defaultStyles = "px-4 py-2 rounded-lg font-semibold flex items-center gap-2 shadow-md justify-center";
export function Button({variant, text, startIcon, onClick}:ButtonProps) {
return <button onClick={onClick} className={variantClasses[variant] + " " + defaultStyles}>
    {startIcon}
    {text}
</button>
}