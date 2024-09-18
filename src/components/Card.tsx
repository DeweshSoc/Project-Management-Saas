"use client"

import CheckSvg from "@/assets/check.svg";
import { twMerge } from "tailwind-merge";
import {motion} from "framer-motion";

export function Card({
    title,
    monthlyPrice,
    inverse,
    features,
    buttonText,
    popular
}: CardProps) {
    return (
        <div
            className={twMerge(
                "flex flex-col rounded-3xl p-10 w-full max-w-[320px] border-[1px] border-[#f1f1f] shadow-[0_7px_14px_#eaeaea]",
                inverse && "bg-black text-white"
            )}
        >
            <div className="flex items-baseline justify-between">
                <h3
                    className={twMerge(
                        "tracking-tighter font-bold text-black/50 text-lg leading-7",
                        inverse && "text-white"
                    )}
                >
                    {title}
                </h3>
                {popular && (
                    <motion.div 
                    animate={{
                        backgroundPositionX:"-100%"
                    }}
                    transition={{
                        duration:1.5,
                        repeatType:"loop",
                        repeat:Infinity,
                        ease:'linear'
                    }}
                    className="px-4 py-1.5 rounded-xl text-sm font-medium border border-[#ffffff]/20 bg-[linear-gradient(to_right,#DD7DFF,#E1CD86,#8BCB92,#71C2EF,#3BFFFF,#DD7DFF,#E1CD86,#8BCB92,#71C2EF,#3BFFFF,#DD7DFF)] [background-size:200%] bg-clip-text text-transparent">
                        Most Popular
                    </motion.div>
                )}
            </div>
            <div className="mt-[30px] flex items-baseline gap-1">
                <p
                    className={twMerge(
                        "text-black tracking-tighter text-4xl leading-none font-bold",
                        inverse && "text-white"
                    )}
                >
                    ${monthlyPrice}
                </p>
                <p
                    className={twMerge(
                        "text-base font-bold text-black/50",
                        inverse && "text-white/50"
                    )}
                >
                    /month
                </p>
            </div>
            <button
                className={twMerge(
                    "mt-[30px] btn btn-primary w-full",
                    inverse && "bg-white text-black"
                )}
            >
                {buttonText}
            </button>
            <ul className="mt-[30px] flex flex-col gap-5">
                {features.map((feature) => (
                    <li key={feature} className="flex items-center gap-4">
                        <CheckSvg className="w-6 h-6" />
                        <p className="text-sm">{feature}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
}
