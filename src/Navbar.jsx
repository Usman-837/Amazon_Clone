import logo from "./assets/amazon_logo.png";
import flag from "./assets/USFlag.png";
const Navbar = () => {
    
    return (
        <>
        {/* Navbar  */}
        <nav className="flex justify-evenly items-center bg-[#0F1111] text-white text-sm">
            
            {/* logo */}
            <a href="#" className="border border-transparent p-1 hover:border-white">
                <img src= {logo} alt="" className="w-24 h-10 mt-2"/>
            </a>

            {/* Location */}
            <div className="border border-transparent p-1 hover:border-white">
                <p className="text-xs pl-1">Deliver to</p>
                <div className="flex items-center gap-1">
                    <span class="material-symbols-outlined">location_on</span>
                    <p className="bold">Pakistan</p>
                </div>
            </div>

            {/* Search Bar */}
            <div className="text-black flex h-12 p-1">
                <select className="bg-[#E6E6E6] px-2 rounded-lg rounded-r-none">
                    <option>All</option>
                </select>
                <input type="text" placeholder="Search Amazon" className="w-[680px] pl-2 text-base"/>
                <div className="bg-orange-300 rounded-lg rounded-l-none p-2">
                    <i class="fa-solid fa-magnifying-glass fa-xl"></i>
                </div>
            </div>

            {/* Country Session */}            
            <div className="flex border border-transparent p-1 hover:border-white mt-3">
                <img src={flag} className="h-4 w-5"/>
                <select className="bg-transparent font-bold">
                    <option>EN</option>
                </select>
            </div>

            {/* Login Session */}
            <div className="border border-transparent p-1 hover:border-white">
                <p className="text-xs pl-1">Hello,sign in</p>
                <select className="bg-transparent font-bold">
                    <option>Account & Lists</option>
                </select>
            </div>


        </nav>
        </>
    );
}

export default Navbar;