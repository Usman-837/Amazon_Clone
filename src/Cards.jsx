import img1 from "./assets/1.jpg";
import img2 from "./assets/2.jpg";
import img3 from "./assets/3.jpg";
import img4 from "./assets/4.jpg";
import img5 from "./assets/5.jpg";
import img6 from "./assets/6.jpg";
import img7 from "./assets/7.jpg";
import img8 from "./assets/8.jpg";

const Cards = () => {
    return(
        <>
            <div className="grid grid-cols-4 grid-rows-2 gap-2 px-4 bg-[#E6E6E6] pb-5">
                    <div className="bg-white p-4">
                        <h1 className="text-xl font-bold">Shop school essentials</h1>
                        <img src={img1} alt="" className="my-3"/>
                        <p className="text-[#007185] text-xs">See more</p>
                    </div>
                    <div className="bg-white p-4">
                        <h1 className="text-xl font-bold">Shop school essentials</h1>
                        <img src={img2} alt="" className="my-3"/>
                        <p className="text-[#007185] text-xs">See more</p>
                    </div>
                    <div className="bg-white p-4">
                        <h1 className="text-xl font-bold">Shop school essentials</h1>
                        <img src={img3} alt="" className="my-3"/>
                        <p className="text-[#007185] text-xs">See more</p>
                    </div>
                    <div className="bg-white p-4">
                        <h1 className="text-xl font-bold">Shop school essentials</h1>
                        <img src={img4} alt="" className="my-3"/>
                        <p className="text-[#007185] text-xs">See more</p>
                    </div>
                    <div className="bg-white p-4">
                        <h1 className="text-xl font-bold">Shop school essentials</h1>
                        <img src={img5} alt="" className="my-3"/>
                        <p className="text-[#007185] text-xs">See more</p>
                    </div>
                    <div className="bg-white p-4">
                        <h1 className="text-xl font-bold">Shop school essentials</h1>
                        <img src={img6} alt="" className="my-3"/>
                        <p className="text-[#007185] text-xs">See more</p>
                    </div>
                    <div className="bg-white p-4">
                        <h1 className="text-xl font-bold">Shop school essentials</h1>
                        <img src={img7} alt="" className="my-3"/>
                        <p className="text-[#007185] text-xs">See more</p>
                    </div>
                    <div className="bg-white p-4">
                        <h1 className="text-xl font-bold">Shop school essentials</h1>
                        <img src={img8} alt="" className="my-3"/>
                        <p className="text-[#007185] text-xs">See more</p>
                    </div>
            </div>
        </>
    );
};

export default Cards;