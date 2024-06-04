const Menubar = () => {
    return  (
        <>
            <div className="bg-[#222F3D] h-10 flex items-center text-white text-sm pl-4">
                <div className="flex items-center gap-1 border border-transparent p-2 hover:border-white">
                    <i class="fa-solid fa-bars fa-lg"></i>
                    <p className="font-bold">ALL</p>
                </div>
                <ul className="flex items-center">
                    <li className="border border-transparent p-2 hover:border-white">Today's Deals</li>
                    <li className="border border-transparent p-2 hover:border-white">Customer Service</li>
                    <li className="border border-transparent p-2 hover:border-white">Registry</li>
                    <li className="border border-transparent p-2 hover:border-white">Gift Cards</li>
                    <li className="border border-transparent p-2 hover:border-white">Sell</li>
                </ul>
            </div>
        </>
    );
}

export default Menubar;