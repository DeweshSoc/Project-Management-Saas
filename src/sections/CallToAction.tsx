"use client"

import starImage from "@/assets/star.png";
import springImage from "@/assets/spring.png";
import ArrowIcon from "@/assets/arrow-right.svg";
import Image from "next/image";
import { useRef } from "react";
import { motion,useScroll, useTransform } from "framer-motion";



export const CallToAction = () => {
    const ctaRef = useRef(null);
    const { scrollYProgress } = useScroll({ 
        target: ctaRef,
        offset: ["start end", "end start"],
    });

    const translateY = useTransform(scrollYProgress, [0, 1], [-150, 150]);

    return (
        <section ref={ctaRef} className="py-24 bg-gradient-to-t from-[#d2dcff] to-white overflow-x-clip">
            <div className="container flex flex-col justify-center items-center relative">
                <div className="text-center md:w-[540px]">
                    <h2 className="font-bold text-[30px] tracking-tighter bg-gradient-to-b from-black to-[#001E7F] text-transparent bg-clip-text">
                        Sign up for free today
                    </h2>
                    <p className="mt-5 tracking-tight text-[22px] leading-[30px]">
                        Celebrate the joy of accomplishment with an app designed
                        to track your progress and motivate your efforts.
                    </p>
                    <motion.img
                        src={starImage.src}
                        alt="star"
                        width={360}
                        className="hidden md:block absolute -top-[137px] -left-[220px] lg:-left-[10px]"
                        style={{
                            translateY
                        }}
                    />
                    <motion.img
                        src={springImage.src}
                        alt="spring"
                        width={360}
                        className="hidden md:block absolute -right-[220px] -top-[36px] lg:-right-[10px]"
                        style={{
                            translateY
                        }}
                    />
                </div>
                <div className="flex mt-[30px] gap-1 justify-center items-center">
                    <button className="btn btn-primary">Get for free</button>
                    <button className="btn btn-text">
                        <span>Learn More</span>
                        <ArrowIcon className="h-5 w-5" />
                    </button>
                </div>
            </div>
        </section>
    );
};
