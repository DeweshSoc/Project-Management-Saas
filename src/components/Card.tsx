import CheckSvg from "@/assets/check.svg";
import { twMerge } from "tailwind-merge";

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
                    <div className="px-4 py-1.5 rounded-xl text-sm font-medium border border-[#ffffff]/20 bg-[linear-gradient(to_right,#DD7DFF_20%,#E1CD86_40%,#8BCB92_60%,#71C2EF_80%,#3BFFFF_90%,#DD7DFF_100%)] bg-clip-text text-transparent">
                        Most Popular
                    </div>
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
