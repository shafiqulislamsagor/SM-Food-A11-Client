import { Link, NavLink } from 'react-router-dom'

const Navbar = () => {
    const menuNavLink = <>
        <div className="flex flex-col gap-y-4 gap-x-0 mt-5 md:flex-row md:justify-center md:items-center md:gap-y-0 md:gap-x-7 md:mt-0">
            <div>
                <NavLink to='/login' className="inline-block text-black hover:text-gray-600 dark:text-white dark:hover:text-neutral-300" href="#" aria-current="page">Home</NavLink>
            </div>
            <div>
                <NavLink className="inline-block text-black hover:text-gray-600 dark:text-white dark:hover:text-neutral-300" href="#"> Available Foods</NavLink>
            </div>
            <div>
                <NavLink className="inline-block text-black hover:text-gray-600 dark:text-white dark:hover:text-neutral-300" href="#">Add Food</NavLink>
            </div>
            <div>
                <NavLink className="inline-block text-black hover:text-gray-600 dark:text-white dark:hover:text-neutral-300" href="#"> Manage My Foods</NavLink>
            </div>
            <div>
                <NavLink className="inline-block text-black hover:text-gray-600 dark:text-white dark:hover:text-neutral-300" href="#">My Food Request</NavLink>
            </div>
        </div>
    </>
    return (
        <div className=' bg-gray-900 sticky top-0 z-50'>
            <div className="navbar md:w-[95%] mx-auto">
                <div className="navbar-start w-full lg:w-1/2">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] pt-0 p-5 shadow bg-base-100 rounded-box w-48">
                            {menuNavLink}
                        </ul>
                    </div>
                    <Link to='/' className="text-xl lg:text-3xl font-bold text-white flex items-center gap-2 cursor-pointer">
                        <img className='w-9 md:w-12' src="/—Pngtree—food logo_8366734.png" alt="" />
                        <span className="text-[#ff0] textLayer">SM</span> Food
                    </Link>
                </div>
                <div className="navbar-center hidden lg:flex ml-14">
                    <ul className="menu menu-horizontal px-1">
                        {menuNavLink}
                    </ul>
                </div>
                <div className="navbar-end w-1/3">
                    <Link to='/login' type="button" className="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-xl border border-gray-200 text-black hover:btnHoverColor  btnColor  disabled:pointer-events-none dark:border-neutral-700 dark:hover:bg-[#e48413] dark:text-white dark:hover:text-white">
                        Log in
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Navbar;