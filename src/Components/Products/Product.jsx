import { Link } from "react-router-dom";

const Product = ({product}) => {
    const {_id,title,img,price}=product;
    return (
        <div data-aos="fade-up" data-aos-duration="2000" >
{/* trying new one */}

<div className="flex flex-col justify-center items-center max-w-sm mx-auto my-4">
  <div style={{backgroundImage: `url(${img})`}}
       className="bg-green-300 h-64 w-full rounded-lg shadow-md bg-cover bg-center transition ease-in-out delay-150 hover:-translate-y-10 hover:scale-100 duration-700"></div>
  <div className="w-56 md:w-64 bg-white -mt-10 shadow-lg rounded-lg overflow-hidden">
    <div className="py-2 text-center font-bold uppercase tracking-wide text-gray-800 ">{title}</div>
    <div className="flex items-center justify-between py-2 px-3 bg-primary-bg">
      <h1 className="text-gray-800 font-bold ">Price: ${price}</h1>
      <Link to={`/checkout/${_id}`}>
      <button className=" bg-green-800 text-xs text-white px-2 py-1 font-semibold rounded uppercase hover:bg-green-700">Buy</button>
      </Link>
    </div>
  </div>
</div>
{/* trying new one */}
        </div>
    );
};

export default Product;