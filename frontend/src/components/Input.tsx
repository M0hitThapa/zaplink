
export function Input({reference,placeholder}: {placeholder:string;reference:any}) {
    return (
        <input ref={reference} placeholder={placeholder} type="text" className="px-8 py-3 border-2 border-slate-300 shadow-md" />
    )
}