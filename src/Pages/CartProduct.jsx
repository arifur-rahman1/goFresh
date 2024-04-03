const CartProduct = ({ product, handleDelete,handleConfirm }) => {
  const { _id, title, img, amount, updatedPrice ,status} = product;

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
        {/* <span className="px-2 py-1 font-semibold leading-tight text-green-700 bg-green-100 rounded-sm">
          {" "}
          Acceptable{" "}
        </span> */}
        {/* Status button */}
        {
        status=='confirm'? <button
        // onClick={() => handleConfirm(_id)}
        className="inline-flex items-center px-4 py-2 bg-green-600 hover:bg-green-700 text-white text-sm font-medium rounded-md"
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-3 h-3">
  <path fillRule="evenodd" d="M8.603 3.799A4.49 4.49 0 0 1 12 2.25c1.357 0 2.573.6 3.397 1.549a4.49 4.49 0 0 1 3.498 1.307 4.491 4.491 0 0 1 1.307 3.497A4.49 4.49 0 0 1 21.75 12a4.49 4.49 0 0 1-1.549 3.397 4.491 4.491 0 0 1-1.307 3.497 4.491 4.491 0 0 1-3.497 1.307A4.49 4.49 0 0 1 12 21.75a4.49 4.49 0 0 1-3.397-1.549 4.49 4.49 0 0 1-3.498-1.306 4.491 4.491 0 0 1-1.307-3.498A4.49 4.49 0 0 1 2.25 12c0-1.357.6-2.573 1.549-3.397a4.49 4.49 0 0 1 1.307-3.497 4.49 4.49 0 0 1 3.497-1.307Zm7.007 6.387a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z" clipRule="evenodd" />
</svg>


        Confirmed
      </button> :
          <button
          onClick={() => handleConfirm(_id)}
          className="inline-flex items-center px-4 py-2 bg-slate-200 hover:bg-slate-300 text-black text-sm font-medium rounded-md"
        >
          {/* <svg
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
          </svg> */}
          Pending...
        </button>}
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
