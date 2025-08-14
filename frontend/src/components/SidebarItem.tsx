import type { ReactElement } from "react";

export const SidebarItems = ({text, icon}: {
    text:string;
    icon:ReactElement
}) => {
    return <div className="flex gap-2 items-center text-md">
        <div className="pl-2">
            {icon}
        </div>
        <div className="pl-2">
            {text}

        </div>

    </div>
}