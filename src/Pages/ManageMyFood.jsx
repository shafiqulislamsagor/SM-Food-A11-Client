import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import ManageCard from "../components/ManageCard";

const ManageMyFood = () => {

    const getFood = async() =>{
        const foodData = await axios(`${import.meta.env.VITE_API_URL}/food`, { withCredentials: true })
        return foodData.data
    }

    const {data,isLoading} = useQuery({
        queryFn:()=> getFood(),
        queryKey:'food'
    })

    if(isLoading) return <p>Loading now..........!!</p>

    return (
        <div className="w-[95%] mx-auto my-16">
            <h3 className="text-4xl font-bold text-center mb-7 text-[#ff0]">Manage Card</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                {
                    data.map((single,id)=> <ManageCard key={id} card={single}/>)
                }
            </div>
        </div>
    );
};

export default ManageMyFood;