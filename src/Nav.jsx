import { NavLink } from "react-router-dom"


function Nav() {

    const NavZ = <>

        <li><NavLink to='/'>Home</NavLink></li>
        <li><NavLink to='/challenges'>Challenges</NavLink></li>
        <li><NavLink to='/registration'>registration</NavLink></li>
        <li><NavLink to='/login'>login</NavLink></li>
        <li><NavLink to='/contact'>Contact</NavLink></li>
        <li><NavLink to='/creator'>Creator</NavLink></li>
        <li><NavLink to='/effect'>useEffect</NavLink></li>
        <li><NavLink to='/infinite'>infinite</NavLink></li>
        <li><NavLink to='/pokemon'>pokemon</NavLink></li>

    </>

    return (
        <div>
            <div className="navbar bg-base-100 p-5 shadow">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                            {NavZ}
                        </ul>
                    </div>
                    <div className=" flex items-center gap-2">
                        <img className=" h-[50px] " src="https://miro.medium.com/v2/resize:fit:1166/1*bqtyARlwzJtp9XTWjM3quQ.png" alt="" />
                        <a className=" text-xs md:text-xl">React Hooks rules</a>
                    </div>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {NavZ}
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Nav
