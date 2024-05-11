import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import ManageCard from "../components/ManageCard";
import UseAuth from './../hooks/UseAuth';

const ManageMyFood = () => {

    const { user } = UseAuth()

    const getFood = async () => {
        const foodData = await axios(`${import.meta.env.VITE_API_URL}/foods/${user?.email}`, { withCredentials: true })
        return foodData.data
    }

    const { data, isLoading } = useQuery({
        queryFn: () => getFood(),
        queryKey: ['food']
    })

    if (isLoading) return <p>Loading now..........!!</p>

    return (
        <div className="w-full mx-auto mb-16 mt-8">
            <h3 className="text-4xl font-bold text-center mb-7 text-[#ff0]">Manage Card</h3>
            <div className="relative overflow-x-auto shadow-md sm:rounded-lg ">
                <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="col" className="px-6 pl-20 py-3">
                                Food name
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Status
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Expired Date
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Quantity
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Action
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                    {
                    data.map((single, id) => <ManageCard key={id} card={single} />)
                }
                    </tbody>
                </table>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                
            </div>
        </div>
    );
};

export default ManageMyFood;