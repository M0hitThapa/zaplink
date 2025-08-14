import { LogoIcon } from "../icons/logoIcon";
import { TwitterIcon } from "../icons/twitterIcon";
import { YoutubeIcon } from "../icons/youtubeIcon";
import { SidebarItems } from "./SidebarItem";

export function Sidebar() {
    return <div className="h-screen w-72 fixed  bg-white border-r-2 border-gray-100 pl-5 ">
        <div className="flex gap-2 items-center p-3 font-semibold text-2xl border-b border-gray-100">
            <LogoIcon />
            ZapLink
        </div>
       <div className="flex flex-col gap-5 font-medium mt-5">
        <SidebarItems text="Twitter" icon={<TwitterIcon />} />
       <SidebarItems text="Youtube" icon={<YoutubeIcon />} />
       </div>
    </div>
}