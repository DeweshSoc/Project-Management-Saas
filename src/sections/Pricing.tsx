import { Card } from "@/components/Card";

const pricingTiers = [
    {
        title: "Free",
        monthlyPrice: 0,
        buttonText: "Get for free",
        popular: false,
        inverse: false,
        features: [
            "Up to 5 project members",
            "Unlimited tasks and projects",
            "2GB storage",
            "Integrations",
            "Basic support",
        ],
    },
    {
        title: "Pro",
        monthlyPrice: 9,
        buttonText: "Sign up now",
        popular: true,
        inverse: true,
        features: [
            "Up to 50 project members",
            "Unlimited tasks and projects",
            "50GB storage",
            "Integrations",
            "Priority support",
            "Advanced support",
            "Export support",
        ],
    },
    {
        title: "Business",
        monthlyPrice: 19,
        buttonText: "Sign up now",
        popular: false,
        inverse: false,
        features: [
            "Up to 5 project members",
            "Unlimited tasks and projects",
            "200GB storage",
            "Integrations",
            "Dedicated account manager",
            "Custom fields",
            "Advanced analytics",
            "Export capabilities",
            "API access",
            "Advanced security features",
        ],
    },
];

export const Pricing = () => {
    return (
        <section className="py-24 bg-white">
            <div className="container flex flex-col items-center ">
                <div className=" text-center md:w-[540px]">
                    <h2 className="font-bold text-[30px] tracking-tighter bg-gradient-to-b from-black to-[#001E7F] text-transparent bg-clip-text">
                        Pricing
                    </h2>
                    <p className="mt-5 tracking-tight text-[22px] leading-[30px]">
                        Free forever. Upgrade for unlimited tasks, better
                        security, and exclusive features.
                    </p>
                </div>

                {/* cards */}
                <div className="w-full flex flex-col items-center gap-y-6 mt-10 lg:flex-row lg:justify-between lg:items-end">
                    {pricingTiers.map((tier) => (
                        <Card key={tier.title} {...tier} />
                    ))}
                </div>
            </div>
        </section>
    );
};
