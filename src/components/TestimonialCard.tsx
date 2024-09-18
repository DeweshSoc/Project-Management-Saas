import CheckSvg from "@/assets/check.svg";
import Image from "next/image";
import { twMerge } from "tailwind-merge";

export function TestimonialCard({
    idx,
    text,
    imageSrc,
    name,
    username
}: TestimonialCardProps) {
    return (
        <div
            className={twMerge(
                "max-w-[325px] p-10 border border-[#222]/10 rounded-3xl shadow-[0_7px_14px_#eaeaea]",
                idx==='00' && 'mt-6'
            )}
        >
            <div className="">{text}</div>
            <div className="mt-5 flex items-end gap-2">
                <Image src={imageSrc} alt={name} width={40} height={40} />
                <div className="flex flex-col tracking-tight leading-5">
                    <p className="font-medium">{name}</p>
                    <p>{username}</p>
                </div>
            </div>
        </div>
    );
}
