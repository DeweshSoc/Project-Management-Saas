import pyramidImage from "@/assets/pyramid.png";
import tubeImage from "@/assets/tube.png";
import productImage from "@/assets/product-image.png";
import Image from "next/image";

export const ProductShowcase = () => {
    return (
        <section className="py-24 bg-gradient-to-t from-[#D2DCFF] to-[#ffffff] overflow-x-clip">
            <div className="container">
                <div className="flex flex-col justify-center items-center">
                    <div className="max-w-[540px]  text-center">
                        <div className="tag">Boost your productivity</div>
                        <h2 className="mt-5 text-[30px] md:text-[54px] tracking-tighter font-bold leading-9 md:leading-[60px] bg-gradient-to-b from-black to-[#001e7f] bg-clip-text text-transparent">
                            A more effective way to track progress
                        </h2>
                        <p className="mt-5 text-[22px] tracking-tight text-[#010D3E] leading-[30px]">
                            Celebrate the joy of accomplishment with an app
                            designed to track your progress and motivate your
                            efforts.
                        </p>
                    </div>
                    <div className="relative">
                        <Image
                            className="mt-10"
                            src={productImage}
                            alt="product"
                        />
                        <Image
                            src={pyramidImage}
                            alt="pyramid"
                            width={262}
                            height={262}
                            className="hidden md:block absolute -right-36 -top-20"
                        />
                        <Image
                            src={tubeImage}
                            alt="tube"
                            width={248}
                            className="hidden md:block absolute bottom-20 -left-36"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};
