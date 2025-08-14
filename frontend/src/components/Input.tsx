
export function Input({onChange,placeholder}: {placeholder:string;onChange:() => void}) {
    return (
        <input placeholder={placeholder} type="text" className="px-8 py-3 border-2 border-slate-300 shadow-md" />
    )
}