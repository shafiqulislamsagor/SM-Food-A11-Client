import DateObject from "react-date-object";
import { MdDeleteForever } from "react-icons/md";
import { CiEdit } from "react-icons/ci";
import axios from "axios";
import { toast } from "react-toastify";
import { useState } from "react";

const ManageCard = ({ card }) => {
    const { _id, FoodName, FoodImage, FoodQuantity, ExpiredDateTime, AdditionalNotes, status } = card
    // console.log(card);
    const [newDate , setNewDate]  = useState(ExpiredDateTime)
    const [newNotes , setnewNotes]  = useState(AdditionalNotes)
    const [newQuantity , setnewQuantity]  = useState(FoodQuantity)



    const today = new Date().toISOString().split('T')[0];
    const update = e => {
        const date = e.target.date.value
        const notes = e.target.Notes.value
        const quantity = e.target.quantity.value

        const update = { date, notes, quantity }

        axios.put(`${import.meta.env.VITE_API_URL}/foods/${_id}`, update)
            .then(() => {
                toast.success('Your Food information updated ...!')
                setNewDate(date)
                setnewNotes(notes)
                setnewQuantity(quantity)
                e.target.reset()
            })
            .catch(() => {
                toast.error('try again.!')
            })
            
        }
        
    return (
        <tr className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
            <th scope="row" className="px-6 pl-20 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                {FoodName}
            </th>
            <td className="px-6 py-4">
                {newNotes}
            </td>
            <td className="px-6 py-4">
                {new DateObject(newDate).format('DD/MM/YYYY')}
            </td>
            <td className="px-6 py-4">
                {newQuantity}
            </td>
            <td className="px-6 py-4 flex gap-5">
                <button onClick={() => document.getElementById(_id).showModal()} className="text-xl border p-2 rounded-full bg-green-800 hover:bg-black hover:text-white text-white"><CiEdit /></button>
                <button className="text-xl border p-2 rounded-full bg-red-800 hover:bg-black hover:text-white text-white"><MdDeleteForever /></button>
            </td>
            <dialog id={_id} className="modal">
                <div className="modal-box">
                    <h3 className="font-bold text-lg">Food Request Now !</h3>
                    <p className="py-4">Clicking on the Request Confirm button will confirm the request</p>
                    <form method="dialog">
                        <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                    </form>
                    <div className="modal-action block">
                        <form onSubmit={update} method="dialog" className="">
                            <div className="">
                                <div className="pt-6">
                                    <div className="mx-auto mt-6 lg:px-8">

                                        <div className="w-60 mx-auto sm:overflow-hidden sm:rounded-lg">
                                            <img src={FoodImage} alt="Model wearing plain white basic tee." className="h-full w-full  object-cover object-center" />
                                        </div>
                                    </div>
                                    <div className="mx-auto  px-4 pt-10 sm:px-6 ">
                                        <div className="">
                                            <h1 className="text-2xl font-bold tracking-tight text-white sm:text-3xl">{FoodName}</h1>
                                            <div className="badge badge-secondary badge-outline my-2">{status}</div>
                                            <p className="text-sm mt-4">Additional Notes : {newNotes}</p>
                                            <h3 className="text-white mt-5">Food Quantity : {newQuantity} person by served</h3>
                                            <p className="text-white mt-5">Expired Date : {new DateObject(newDate).format('DD/MM/YYYY')}</p>
                                        </div>

                                    </div>
                                </div>
                            </div>
                            <div className="relative z-0 w-full mb-5 mt-7 group">
                                <input
                                    // defaultValue={user.email}

                                    type="text"
                                    name="quantity"
                                    id="userName"
                                    className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                                    placeholder=" "
                                    required
                                />
                                <label
                                    htmlFor="userName"
                                    className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                                >
                                    Food Quantity
                                </label>
                            </div>
                            <div className="relative z-0 w-full mb-5 group">
                                <input
                                    type="text"
                                    name="Notes"
                                    id="Notes"
                                    className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                                    placeholder=" "
                                    required

                                />
                                <label
                                    htmlFor="Notes"
                                    className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                                >
                                    Additional Notes
                                </label>
                            </div>

                            <div className="relative z-0 w-full mb-5 group">
                                <label htmlFor="countries" className="block mb-2 text-sm font-medium text-gray-500 dark:text-gray-400">Expired Date</label>
                                <div className="relative w-full">

                                    <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                                        <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                            <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
                                        </svg>
                                    </div>
                                    <input type="date" min={today} required name="date" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Select date" />
                                </div>

                            </div>
                            <button className="btn">Update</button>
                        </form>
                    </div>
                </div>
            </dialog>
        </tr>
    );
};

export default ManageCard;