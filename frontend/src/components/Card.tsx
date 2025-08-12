import { ShareIcon } from "../icons/ShareIcon";

interface ButtonProps {
    link:string;
    title:string;
    type:"youtube" | "twitter"
}



export const Card = ({link, title, type}: ButtonProps) => {
    return <div className="border p-4 border-slate-200 rounded-2xl min-h-80 min-w-56 h-fit shadow-md items-center ml-4 bg-white ">
        <div className="flex justify-between">
            <div className="flex gap-2 items-center">
                <ShareIcon />
                {title}
            </div>
            <div className="flex gap-2 items-center">
                <ShareIcon />
                <ShareIcon />
            </div>
        </div>
        <div className="bg-emerald-800 m-2 p-2 rounded-2xl">
           {type === "youtube" && <iframe className="w-full " src={link.replace("watch", "embed").replace("?v=", "/")} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>}
           {type === "twitter" && <blockquote className="twitter-tweet">
    <a href={link.replace("x.com", "twitter.com")}></a></blockquote>}


        </div>
    </div>
}