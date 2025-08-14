import { Button } from "../components/Button";
import { Input } from "../components/Input";

export function SignUp() {
    return <div className="h-screen w-screen flex justify-center items-center bg-gray-200 ">
        <div className="bg-white shadow-md p-5 rounded-xl border border-gray-100 flex flex-col gap-2 ">
            <Input placeholder="Username" />
            <Input placeholder="Password" />
            <Button text="SignUp" variant="primary" />

        </div>

    </div>
}