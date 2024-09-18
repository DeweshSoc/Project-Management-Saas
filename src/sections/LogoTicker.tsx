"use client";

import LogoAcme from "@/assets/logo-acme.png";
import LogoApex from "@/assets/logo-apex.png";
import LogoCelestial from "@/assets/logo-celestial.png";
import LogoEcho from "@/assets/logo-echo.png";
import LogoPulse from "@/assets/logo-pulse.png";
import LogoQuantum from "@/assets/logo-quantum.png";
import { calcLength, motion } from "framer-motion";

import Image from "next/image";

export const LogoTicker = () => {
    return (
        <div className="py-8 bg-white md:py-12">
            <div className="container ">
                <div className="overflow-hidden ">
                    <motion.div className="flex gap-14 flex-none mr-14"
                        animate={{
                            translateX:"-116.25%"
                        }}
                        transition={{
                            duration:10,
                            repeat:Infinity,
                            repeatType:"loop",
                            ease:"linear"
                        }}
                    >
                        <Image src={LogoAcme} className="h-8" alt="acme logo" />
                        <Image src={LogoQuantum} className="h-8" alt="quant" />
                        <Image src={LogoEcho} className="h-8" alt="echo" />
                        <Image src={LogoCelestial} className="h-8" alt="cele" />
                        <Image src={LogoPulse} className="h-8" alt="pulse" />
                        <Image src={LogoApex} className="h-8" alt="apex" />
                        <Image src={LogoAcme} className="h-8" alt="acme logo" />
                        <Image src={LogoQuantum} className="h-8" alt="quant" />
                        <Image src={LogoEcho} className="h-8" alt="echo" />
                        <Image src={LogoCelestial} className="h-8" alt="cele" />
                        <Image src={LogoPulse} className="h-8" alt="pulse" />
                        <Image src={LogoApex} className="h-8" alt="apex" />
                      
                    </motion.div>
                </div>
            </div>
        </div>
    );
};
