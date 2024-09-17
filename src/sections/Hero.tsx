import ArrowIcon from "@/assets/arrow-right.svg";
import cogImage from "@/assets/cog.png";
import cylinder from "@/assets/cylinder.png";
import noodle from "@/assets/noodle.png";
import Image from "next/image";

export const Hero = () => {
    return (
        // radial gradient (shape_200%ofwidth_100%ofheight,center position, from, to , toAt)
        <section className="pt-8 pb-20 md:pt-5 md:pb-10 bg-[radial-gradient(ellipse_200%_100%_at_bottom_left,#183ec2,#eaeefe_100%)] overflow-x-clip">
            <div className="container">
                <div className="md:flex md:items-center">
                    <div className="md:w-[478px]">
                        <div className="tag">
                            Version 2.0 is here
                        </div>
                        <p className="mt-6 text-5xl md:text-7xl font-bold tracking-tighter bg-gradient-to-b from-black to-[#001E7F] bg-clip-text text-transparent">
                            Pathway to productivity
                        </p>
                        <p className="mt-6 text-xl tracking-tight text-[#010D3E]">
                            Celebrate the joy of accomplishment with an app
                            designed to track your progress, motivate your
                            efforts, and celebrate your successes.
                        </p>
                        <div className="flex mt-[30px] gap-1 items-center">
                            <button className="btn btn-primary">
                                Get for free
                            </button>
                            <button className="btn btn-text">
                                <span>Learn More</span>
                                <ArrowIcon className="h-5 w-5" />
                            </button>
                        </div>
                    </div>

                    <div className="mt-20 md:mt-0 md:h-[648px] md:flex-1 relative">
                        <Image
                            src={cogImage}
                            alt="gear"
                            className="md:absolute md:h-full md:w-auto md:max-w-none md:-left-6 lg:left-0"
                        />
                        <Image
                            src={cylinder}
                            alt="cylinder"
                            className="hidden md:block absolute -top-8 -left-32"
                            width={220}
                            height={220}
                        />
                        <Image
                          src={noodle}
                          width={220}
                          alt="noodle"
                          className="hidden lg:block absolute top-[524px] left-[448px] rotate-[30deg]"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};
