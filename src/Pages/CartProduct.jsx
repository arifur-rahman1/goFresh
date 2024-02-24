const CartProduct = ({product}) => {
    const {title,img,amount,updatedPrice}=product;
    return (
        <tr className="text-gray-700">
            <td className="px-4 py-3 border">
              <div className="flex items-center text-sm">
                <div className="relative w-8 h-8 mr-3 rounded-full md:block">
                  <img className="object-cover w-full h-full rounded-full" src={img} alt="" loading="lazy" />
                  <div className="absolute inset-0 rounded-full shadow-inner" aria-hidden="true"></div>
                </div>
                <div>
                  <p className="font-semibold text-black">{title}</p>
                </div>
              </div>
            </td>
            <td className="px-4 py-3 text-ms font-semibold border">{amount}</td>
            <td className="px-4 py-3 text-xs border">
              <span className="px-2 py-1 font-semibold leading-tight text-green-700 bg-green-100 rounded-sm"> Acceptable </span>
            </td>
            <td className="px-4 py-3 text-sm border">{updatedPrice}</td>
          </tr>
    );
};

export default CartProduct;