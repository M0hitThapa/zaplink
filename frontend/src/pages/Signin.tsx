import { useRef } from "react";
import { Button } from "../components/Button";
import { Input } from "../components/Input";
import axios from "axios";
import { BACKEND_URL } from "../config";

export function SignIn() {
    const usernameRef = useRef<HTMLInputElement>(null)
    const passwordRef = useRef<HTMLInputElement>(null)
async function signin() {
    const username = usernameRef.current?.value;
    const password = passwordRef.current?.value;

    const response = await axios.post(BACKEND_URL + "/api/v1/signin", {
        username,
        password
    })
    const jwt = response.data.token;
    localStorage.setItem("token", jwt)
}
    return <div className="h-screen w-screen flex justify-center items-center bg-gray-200 ">
        <div className="bg-white shadow-md p-5 rounded-xl border border-gray-100 flex flex-col gap-2 ">
            <Input reference={usernameRef} placeholder="Username" />
            <Input reference={passwordRef} placeholder="Password" />
            <Button onClick={signin} text="SignIn" variant="primary" />

        </div>

    </div>
}