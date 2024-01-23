import egg from "../assets/Banner/BannerEgg.jpg"
import fruit from "../assets/Banner/BannerFruit.jpg"
import veg from "../assets/Banner/BannerVeg.jpg"
const Banner = () => {
    return (
        <div>
            <div className="carousel w-full h-[600px]">
  <div id="slide1" className="carousel-item relative w-full">
    <img src={veg} className="w-full" />
    <div className="absolute h-full flex items-center top-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)]">
      <div className="text-white pl-10 space-y-7">
      <h1 className=" font-extrabold text-6xl w-1/3">
      Affordable Price For Every Vegetables
      </h1>
      <h3>
      There are many variations of passages of  available, but the majority have suffered alteration in some form
      </h3>
      <div>
     <button className="btn btn-success mr-8 ">Descover More</button>
      {/* <button className="btn btn-success btn-outline">Primary</button> */}
     </div>
      </div>
     
    </div>
    <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
      <div>
      <a href="#slide3" className="btn mr-5 btn-circle btn-outline btn-success">❮</a> 
      <a href="#slide2" className="btn btn-circle btn-outline btn-success">❯</a>
      </div>
    </div>
  </div> 
  <div id="slide2" className="carousel-item relative w-full">
    <img src={egg} className="w-full" />
    <div className="absolute h-full flex items-center top-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)]">
      <div className="text-white pl-10 space-y-7">
      <h1 className=" font-extrabold text-6xl w-1/3">
      Affordable Price For Every Eggs
      </h1>
      <h3>
      There are many variations of passages of  available, but the majority have suffered alteration in some form
      </h3>
      <div>
     <button className="btn btn-success mr-8 ">Descover More</button>
      {/* <button className="btn btn-success btn-outline">Primary</button> */}
     </div>
      </div>
     
    </div>
    <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
      <div>
      <a href="#slide1" className="btn mr-5 btn-circle btn-outline btn-success">❮</a> 
      <a href="#slide3" className="btn btn-circle btn-outline btn-success">❯</a>
      </div>
    </div>
  </div> 
  <div id="slide3" className="carousel-item relative w-full">
    <img src={fruit} className="w-full" />
    <div className="absolute h-full flex items-center top-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)]">
      <div className="text-white pl-10 space-y-7">
      <h1 className=" font-extrabold text-6xl w-1/3">
      Affordable Price For Every Fruits
      </h1>
      <h3>
      There are many variations of passages of  available, but the majority have suffered alteration in some form
      </h3>
      <div>
     <button className="btn btn-success mr-8 ">Descover More</button>
      {/* <button className="btn btn-success btn-outline">Primary</button> */}
     </div>
      </div>
     
    </div>
    <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
      <div>
      <a href="#slide2" className="btn mr-5 btn-circle btn-outline btn-success">❮</a> 
      <a href="#slide1" className="btn btn-circle btn-outline btn-success">❯</a>
      </div>
    </div>
  </div> 

</div>
        </div>
    );
};

export default Banner;