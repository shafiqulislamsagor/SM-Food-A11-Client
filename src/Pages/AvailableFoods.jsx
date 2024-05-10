import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import AvailableCard from "../components/AvailableCard";


const AvailableFoods = () => {
    const FoodData = async () => {
        const { data } = await axios(`${import.meta.env.VITE_API_URL}/food`)
        return data
    }

    const { data: AllFood = [], isLoading } = useQuery({
        queryFn: () => FoodData(),
        queryKey: 'food'
    })

    if (isLoading) return <p>Loading........!</p>
    return (
        <div>
            <div className="flex flex-col md:flex-row justify-evenly items-center gap-10 my-8">
                <div >
                    <div className="w-80 border rounded-lg">
                        <div className="relative" >
                            <div className="relative">
                                <div className="absolute inset-y-0 start-0 flex items-center pointer-events-none z-20 ps-3.5">
                                    <svg className="flex-shrink-0 size-4 text-gray-400 dark:text-white/60" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <circle cx="11" cy="11" r="8"></circle>
                                        <path d="m21 21-4.3-4.3"></path>
                                    </svg>
                                </div>
                                <input className="py-3 ps-10 pe-4 block text-white w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-white dark:placeholder-neutral-500 dark:focus:ring-neutral-600" type="text" placeholder="Type a Food name" />
                            </div>
                        </div>
                    </div>
                </div>
                <select
                    name="filter"
                    className='border p-3 w-80  rounded-lg'
                >
                    <option value='' >Filter By Expired Date</option>
                    <option value='less time'>Expire Date Less time</option>
                    <option value='more time'>Expire Date more time</option>
                </select>
            </div>
            <div className="w-[95%] mx-auto">
                <h2 className="text-4xl font-medium"><span className="text-[#ff0] textLayer"> Available</span> Foods</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-10">
                    {
                        AllFood.map((single, id) => <AvailableCard card={single} key={id} />)
                    }
                </div>
                <div className="mb-20 flex justify-center">
                    <nav aria-label="Pagination" className="inline-flex -space-x-px rounded-md shadow-sm bg-gray-800 text-gray-100 ">
                        <button type="button" className="inline-flex items-center px-2 py-2 text-sm font-semibold border rounded-l-md border-gray-700">
                            <span className="sr-only">Previous</span>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" className="w-5 h-5">
                                <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd"></path>
                            </svg>
                        </button>
                        <button type="button" aria-current="page" className="inline-flex items-center px-4 py-2 text-sm font-semibold border bg-blue-400 text-gray-900 border-gray-700">1</button>
                        <button type="button" className="inline-flex items-center px-4 py-2 text-sm font-semibold border border-gray-700">2</button>
                        <button type="button" className="inline-flex items-center px-4 py-2 text-sm font-semibold border border-gray-700">3</button>
                        <button type="button" className="inline-flex items-center px-4 py-2 text-sm font-semibold border border-gray-700">...</button>
                        <button type="button" className="inline-flex items-center px-4 py-2 text-sm font-semibold border border-gray-700">7</button>
                        <button type="button" className="inline-flex items-center px-4 py-2 text-sm font-semibold border border-gray-700">8</button>
                        <button type="button" className="inline-flex items-center px-4 py-2 text-sm font-semibold border border-gray-700">9</button>
                        <button type="button" className="inline-flex items-center px-2 py-2 text-sm font-semibold border rounded-r-md border-gray-700">
                            <span className="sr-only">Next</span>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" className="w-5 h-5">
                                <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd"></path>
                            </svg>
                        </button>
                    </nav>
                </div>
            </div>
        </div>
    );
};

export default AvailableFoods;