import RequestCard from "../components/RequestCard";

const MyFoodRequest = () => {
    return (
        <div className="my-10">
            <h1 className="text-3xl ml-5 my-6 text-white font-medium flex items-center gap-3">Food Request :- <div className="badge badge-secondary badge-outline text-xl  px-3 h-auto ">20</div></h1>
            <div className="relative overflow-x-auto shadow-md sm:rounded-lg ">
                <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="col" className="px-6 py-3">
                                Product name
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Color
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Category
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Price
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Action
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <RequestCard />
                    </tbody>
                </table>
            </div>
        </div>

    );
};

export default MyFoodRequest;