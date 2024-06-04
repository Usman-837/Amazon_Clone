const Banner = () => {
  return (
    <>  
        {/* Banner */}
        <div class="bg-[url('./assets/banner.jpg')] bg-cover h-80 flex justify-center items-end">
          <div class="bg-white text-sm h-10 flex justify-center items-center w-[1315px] mb-6">
            <p>You are on amazon.com. You can also shop on Amazon India for millions of products with fast local delivery.
              <a class="text-[#007185] hover:underline hover:text-orange-500">
                Click here to go to amazon.in
              </a>
            </p>
          </div>
        </div>
    </>
  );
};

export default Banner;