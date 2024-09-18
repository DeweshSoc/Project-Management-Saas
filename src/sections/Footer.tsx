import logo from "@/assets/logosaas.png";
import Insta from "@/assets/social-insta.svg";
import Youtube from "@/assets/social-youtube.svg";
import Linkedin from "@/assets/social-linkedin.svg";
import Pinterest from "@/assets/social-pin.svg";
import X from "@/assets/social-x.svg";
import Image from "next/image";

export const Footer = () => {
    return (
        <footer className="bg-black text-[#bcbcbc] py-10">
            <div className="container">
                <div className="flex flex-col items-center gap-6">
                    <Image src={logo} alt="logo" width={40} height={40} />
                    <div>
                        <ul className="flex flex-col gap-6 md:flex-row">
                            <li className="text-center">About</li>
                            <li className="text-center">Features</li>
                            <li className="text-center">Customers</li>
                            <li className="text-center">Pricing</li>
                            <li className="text-center">Help</li>
                            <li className="text-center">Careers</li>
                        </ul>
                    </div>
                    <div className="flex gap-4">
                        <X />
                        <Insta />
                        <Linkedin />
                        <Pinterest />
                        <Youtube />
                    </div>
                    <p className="text-center text-sm">© 2024 Aikido, Inc. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};
