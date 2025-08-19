import { useRef, useState } from "react"
import { CloseIcon } from "../icons/closeIcon"
import { Button } from "./Button"
import { Input } from "./Input"
import { BACKEND_URL } from "../config"
import axios from "axios"

enum ContentModal {
    Youtube = "youtube",
    Twitter = "twitter"
}

export const CreateContextModal = ({open, onClose}) => {
    const titleRef = useRef<HTMLInputElement>(null)
    const linkRef = useRef<HTMLInputElement>(null)
    const [type, setType] = useState(ContentModal.Youtube)

    async function addContent () {
        const title = titleRef.current?.value;
        const link = linkRef.current?.value;
        await axios.post(BACKEND_URL + "/api/v1/content", {
            link,
            title,
            type
        }, {
            headers: {
                "Authorization":localStorage.getItem("token")
            }
        })
    }
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
                    <Input reference={titleRef} placeholder="title" />
                    <Input reference={linkRef} placeholder="link" />
                    <div className="flex gap-2 items-center justify-center mt-5">
                        <Button text="youtube" variant={type === ContentModal.Youtube ? "primary" : "secondary"} onClick={() => {
                            setType(ContentModal.Youtube)
                        }} />
                        <Button text="twitter" variant={type === ContentModal.Twitter ? "primary" :"secondary"} onClick={() => {
                            setType(ContentModal.Twitter)
                        }} />
                    </div>
                </div>
                <div className="flex justify-center mt-2">
                    <Button onClick={addContent} variant="primary" text="submit" />
                </div>
                

            </div>

        </div>}
        </div>
    )
}

