import { CloseIcon } from "../icons/closeIcon"
import { Button } from "./Button"

export const CreateContextModal = ({open, onClose}) => {
    return (
        <div>
            {open && <div className="h-screen w-screen fixed bg-gray-500/60 flex items-center justify-center z-[100]">
            <div className=" bg-white px-4 py-2 ">
                <div className="flex justify-end">
                    <div onClick={onClose} className="cursor-pointer">
                        <CloseIcon />
                    </div>
                </div>
                <div className="flex flex-col gap-2 mt-3">
                    <Input placeholder="title" />
                    <Input placeholder="link" />
                </div>
                <div className="flex justify-center mt-2">
                    <Button variant="primary" text="submit" />
                </div>
                

            </div>

        </div>}
        </div>
    )
}


function Input({onChange,placeholder}: {onChange:() => void}) {
    return (
        <input placeholder={placeholder} type="text" className="px-8 py-3 border-2 border-slate-300 shadow-md" />
    )
}