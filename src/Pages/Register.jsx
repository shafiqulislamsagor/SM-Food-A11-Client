import { IoPersonCircleOutline } from "react-icons/io5";
import { MdAddPhotoAlternate } from "react-icons/md";
import { MdOutlineMarkEmailRead } from "react-icons/md";
import { TbPasswordUser } from "react-icons/tb";
import { Link } from "react-router-dom";
import RegisterAnimation from "../animation/RegisterAnimation";


const Register = () => {
    return (
        <div className="hero register_img min-h-screen bg-base-200">
            <div className="hero-content w-[95%] md:w-4/5 mx-auto flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left text-white">
                    <div
                        className="">
                        <RegisterAnimation/>
                    </div>
                </div>
                <div className="card shrink-0 w-full lg:max-w-[50%] shadow-2xl bg-base-100">
                    
                    <form className="card-body pt-10">
                        <div>
                            <h2 className="text-center text-3xl text-white font-bold">Register Now</h2>
                        </div>
                        <div>
                            <label className="text-xs block mb-2">Full Name</label>
                            <div className="relative flex items-center">
                                <input name="name" type="text" required className="w-full bg-transparent text-sm border-b border-gray-300 focus:border-yellow-400 px-2 py-3 outline-none" placeholder="Enter Your Name" />
                                <IoPersonCircleOutline className="text-3xl absolute right-2 opacity-80" />
                            </div>
                        </div>
                        <div>
                            <label className="text-xs block mb-2">Photo URL</label>
                            <div className="relative flex items-center">
                                <input name="photo" type="text" required className="w-full bg-transparent text-sm border-b border-gray-300 focus:border-yellow-400 px-2 py-3 outline-none" placeholder="Enter Your Photo" />
                                <MdAddPhotoAlternate className="text-3xl absolute right-2 opacity-80" />
                            </div>
                        </div>
                        <div>
                            <label className="text-xs block mb-2">Email</label>
                            <div className="relative flex items-center">
                                <input name="email" type="email" required className="w-full bg-transparent text-sm border-b border-gray-300 focus:border-yellow-400 px-2 py-3 outline-none" placeholder="Enter Your Email" />
                                <MdOutlineMarkEmailRead className="text-3xl absolute right-2 opacity-80" />
                            </div>
                        </div>
                        <div>
                            <label className="text-xs block mb-2">Password</label>
                            <div className="relative flex items-center">
                                <input name="password" type="password" required className="w-full bg-transparent text-sm border-b border-gray-300 focus:border-yellow-400 px-2 py-3 outline-none" placeholder="Enter Your Password" />
                                <TbPasswordUser className="text-3xl absolute right-2 opacity-80" />
                            </div>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Register</button>
                        </div>
                        <p className="mb-0 mt-2 pt-1 text-sm font-semibold">
                            Already have an account?
                            <Link to='/login'
                                className="text-danger underline transition duration-150 ease-in-out hover:text-danger-600 focus:text-danger-600 active:text-danger-700"
                            > Log-In</Link>
                        </p>
                    </form>
                </div>
            </div>
        </div>

    );
};

export default Register;