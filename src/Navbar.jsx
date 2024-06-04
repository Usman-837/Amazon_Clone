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

        </nav>
        </>
    );
}

export default Navbar;