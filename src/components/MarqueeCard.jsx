

const MarqueeCard = () => {
    return (
        <div className="flex flex-col w-[350px] ml-10 bg-white border shadow-sm rounded-xl dark:bg-neutral-900 dark:border-neutral-700 dark:shadow-neutral-700/70">
                        <img className="w-full h-auto rounded-t-xl" src="https://i.ibb.co/zbq9vK9/louis-hansel-K47107a-P8-UU-unsplash.jpg" alt="Image Description" />
                        <div className="p-2">
                            <h3 className="text-lg font-bold text-gray-800 dark:text-white">
                                Card title
                            </h3>
                        </div>
                    </div>
    );
};

export default MarqueeCard;