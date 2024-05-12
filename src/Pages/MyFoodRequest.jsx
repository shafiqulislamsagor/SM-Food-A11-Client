import axios from "axios";
import RequestCard from "../components/RequestCard";
import UseAuth from "../hooks/UseAuth";
import { useQuery } from "@tanstack/react-query";

const MyFoodRequest = () => {
    const {user} = UseAuth()
    const requestData = async() =>{
        const {data} = await axios(`${import.meta.env.VITE_API_URL}/food-request/${user?.email}`,{withCredentials:true})
        return data
    }

    const { data, isLoading } = useQuery({
        queryFn: () => requestData(),
        queryKey: ['food']
    })

    if (isLoading) return <p>Loading now..........!!</p>
    return (
        <div className="my-10">
            <h1 className="text-3xl ml-5 my-6 text-white font-medium flex items-center gap-3">Food Request :- <div className="badge badge-secondary badge-outline text-xl  px-3 h-auto ">{data.length}</div></h1>
            <div className="relative overflow-x-auto shadow-md sm:rounded-lg ">
                <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="col" className="px-6 py-3">
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
                                Order Date
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            data.map(card => <RequestCard card={card} key={card._id}/> )
                        }
                        
                    </tbody>
                </table>
            </div>
        </div>

    );
};

export default MyFoodRequest;