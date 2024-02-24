import { useContext, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../Providers/AuthProvider";

const CheckOut = () => {
  const product = useLoaderData();
  const { title, img, description, price, _id } = product;
  const {user}=useContext(AuthContext);

  const email=user?.email;
  const name=user?.displayName
  

  const [counter, setCounter] = useState(1);

  // Function is called everytime increment button is clicked
  const handleClick1 = () => {
    // Counter state is incremented
    setCounter(counter + 1);
  };

  // Function is called everytime decrement button is clicked
  const handleClick2 = () => {
    // Counter state is decremented
    if (counter > 1) {
      setCounter(counter - 1);
    }
  };
  const updatedPrice = price * counter;
  const handleCartProduct=()=>{
    const order={
        productID:_id,
        email,
        title,
        img,
        amount:counter,
        updatedPrice,
        userName:name,
      }
      console.log(order);
      fetch('http://localhost:5000/orders',{
        method:'POST',
        headers:{
            'content-type':'application/json'
        },
        body: JSON.stringify(order)
      })
      .then(res=>res.json())
      .then(data=>console.log(data))
  }

  

  return (
    <div>
      <div className="min-w-screen min-h-screen bg-primary-bg flex items-center p-5 lg:p-10 overflow-hidden relative">
        <div className="w-full max-w-6xl rounded bg-white shadow-xl p-10 lg:p-20 mx-auto text-gray-800 relative md:text-left">
          <div className="md:flex items-center -mx-10">
            <div className="w-full md:w-1/2 px-10 mb-10 md:mb-0">
              <div className="relative">
                <img src={img} className="w-full relative z-10" alt="" />
              </div>
            </div>
            <div className="w-full md:w-1/2 px-10">
              <div className="mb-10">
                <h1 className="font-bold uppercase text-2xl mb-5">{title}</h1>
                <p className="text-sm">{description}</p>
              </div>
              {/* adding counter per kg  */}
              <div>
                <div className="mb-10">
                  <h1 className="font-bold">Amount/KG</h1>
                  <div
                    style={{
                      fontSize: "120%",

                      fontWeight: "bold",
                    }}
                  >
                    {counter} KG
                  </div>
                  <div className="buttons">
                    <div className="flex">
                      <button
                        className="text-base  rounded-r-none  hover:scale-110 focus:outline-none flex justify-center px-4 py-2 rounded font-bold cursor-pointer 
        hover:bg-teal-200  
        bg-teal-100 
        text-teal-700 
        border duration-200 ease-in-out 
        border-teal-600 transition"
                        onClick={handleClick1}
                      >
                        <div className="flex leading-5">+</div>
                      </button>
                      <button
                        className="text-base  rounded-l-none border-l-0  hover:scale-110 focus:outline-none flex justify-center px-4 py-2 rounded font-bold cursor-pointer 
        hover:bg-red-200  
        bg-red-100 
        text-red-700 
        border duration-200 ease-in-out 
        border-red-600 transition"
                        onClick={handleClick2}
                      >
                        <div className="flex leading-5"> -</div>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <div className="inline-block align-bottom mr-5">
                  <span className="text-2xl leading-none align-baseline">
                    $
                  </span>
                  <span className="font-bold text-3xl leading-none align-baseline">
                    {updatedPrice}
                  </span>
                </div>
                <div className="inline-block align-bottom">
                  <button onClick={handleCartProduct} className="bg-green-400 opacity-75 hover:opacity-100 text-green-900 hover:text-gray-900 rounded-full px-10 py-2 font-semibold">
                    <i className="mdi mdi-cart -ml-2 mr-2"></i> BUY NOW
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckOut;
