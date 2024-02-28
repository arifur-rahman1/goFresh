const CartProduct = ({ product, handleDelete }) => {
  const { _id, title, img, amount, updatedPrice } = product;

  return (
    <tr className="text-gray-700">
      <td className="px-4 py-3 border">
        <div className="flex items-center text-sm">
          <div className="relative w-8 h-8 mr-3 rounded-full md:block">
            <img
              className="object-cover w-full h-full rounded-full"
              src={img}
              alt=""
              loading="lazy"
            />
            <div
              className="absolute inset-0 rounded-full shadow-inner"
              aria-hidden="true"
            ></div>
          </div>
          <div>
            <p className="font-semibold text-black">{title}</p>
          </div>
        </div>
      </td>
      <td className="px-4 py-3 text-ms font-semibold border">{amount}</td>
      <td className="px-4 py-3 text-xs border">
        <span className="px-2 py-1 font-semibold leading-tight text-green-700 bg-green-100 rounded-sm">
          {" "}
          Acceptable{" "}
        </span>
      </td>
      <td className="px-4 py-3 text-sm border">{updatedPrice}</td>
      <td className="px-2 py-1 text-sm border flex justify-center">
        {" "}
        <button
          onClick={() => handleDelete(_id)}
          className="inline-flex items-center px-4 py-2 bg-red-600 hover:bg-red-700 text-white text-sm font-medium rounded-md"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-3 w-3"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
            />
          </svg>
          Delete
        </button>
      </td>
    </tr>
  );
};

export default CartProduct;
