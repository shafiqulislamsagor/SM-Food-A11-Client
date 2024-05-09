import Marquee from "react-fast-marquee";
import MarqueeCard from "./MarqueeCard";

const Banner = () => {
    return (
        <div className="bannerImg mb-16">
            <div className="bg-black bg-opacity-50">
                <div className="max-w-5xl mx-auto px-4 xl:px-0 pt-14 lg:pt-32 pb-14">
                    <h1 className="font-semibold text-white text-4xl md:text-6xl">
                        It&#39;s the food and groceries <br /> <span className="text-[#ff0] ">you love and delivered</span>
                    </h1>
                    <div className="max-w-4xl">
                        <p className="mt-5 text-neutral-200 text-lg">
                            It&lsquo;s simple: we list your menu and product lists online, help you process orders, pick them up, and deliver them to hungry pandas – in a heartbeat!
                            Interested? Let&lsquo;s start our partnership today!
                        </p>
                    </div>
                </div>
                <h2 className="text-center text-4xl md:text-5xl text-white  font-medium  mb-6">Latest food news</h2>
                <Marquee>
                    <MarqueeCard />
                    <MarqueeCard />
                    <MarqueeCard />
                    <MarqueeCard />
                    <MarqueeCard />
                    <MarqueeCard />
                </Marquee>
                <div>


                </div>
            </div>
        </div>
    );
};

export default Banner;