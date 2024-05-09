import { NavLink } from 'react-router-dom'

const Navbar = () => {
    const menuNavLink = <>
        <div className="flex flex-col gap-y-4 gap-x-0 mt-5 md:flex-row md:justify-center md:items-center md:gap-y-0 md:gap-x-7 md:mt-0">
            <div>
                <NavLink to='/login' className="inline-block text-black hover:text-gray-600 dark:text-white dark:hover:text-neutral-300" href="#" aria-current="page">Work</NavLink>
            </div>
            <div>
                <NavLink className="inline-block text-black hover:text-gray-600 dark:text-white dark:hover:text-neutral-300" href="#">Services</NavLink>
            </div>
            <div>
                <NavLink className="inline-block text-black hover:text-gray-600 dark:text-white dark:hover:text-neutral-300" href="#">About</NavLink>
            </div>
            <div>
                <NavLink className="inline-block text-black hover:text-gray-600 dark:text-white dark:hover:text-neutral-300" href="#">Careers</NavLink>
            </div>
            <div>
                <NavLink className="inline-block text-black hover:text-gray-600 dark:text-white dark:hover:text-neutral-300" href="#">Blog</NavLink>
            </div>
        </div>
    </>
    return (
        <div className='w-[95%] mx-auto'>
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {menuNavLink}
                        </ul>
                    </div>
                    <a className="text-3xl flex items-center gap-2">
                        <img className='w-12' src="/—Pngtree—food logo_8366734.png" alt="" />
                        SM Food
                    </a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {menuNavLink}
                    </ul>
                </div>
                <div className="navbar-end">
                    <button type="button" className="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-xl border border-gray-200 text-black hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:border-neutral-700 dark:hover:bg-white/10 dark:text-white dark:hover:text-white">
                        Sign in
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Navbar;