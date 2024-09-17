import LogoAcme from "@/assets/logo-acme.png";
import LogoApex from "@/assets/logo-apex.png";
import LogoCelestial from "@/assets/logo-celestial.png";
import LogoEcho from "@/assets/logo-echo.png";
import LogoPulse from "@/assets/logo-pulse.png";
import LogoQuantum from "@/assets/logo-quantum.png";

import Image from "next/image";

export const LogoTicker = () => {
    return (
        <div className="py-8 bg-white md:py-12">
            <div className="container ">
                <div className="overflow-hidden [mask-image:linear-gradient(to_right,transparent,black,transparent)]">
                    <div className="flex gap-14 flex-none">
                        <Image src={LogoAcme} className="h-8" alt="acme" />
                        <Image
                            src={LogoQuantum}
                            className="h-8"
                            alt="quantum"
                        />
                        <Image src={LogoEcho} className="h-8" alt="echo" />
                        <Image
                            src={LogoCelestial}
                            className="h-8"
                            alt="celestial"
                        />
                        <Image src={LogoPulse} className="h-8" alt="pulse" />
                        <Image src={LogoApex} className="h-8" alt="apex" />
                    </div>
                </div>
            </div>
        </div>
    );
};
