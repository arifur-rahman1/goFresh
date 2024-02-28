import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Providers/AuthProvider";
import CartProduct from "./CartProduct";

const Cart = () => {
  const { user } = useContext(AuthContext);
  const [products, setProducts] = useState([]);
  // console.log(user);
  const url = `http://localhost:5000/orders?email=${user?.email}`;
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, [url]);

  const handleDelete = (id) => {
    const proceed = confirm("Are you sure you want to delete?");
    if (proceed) {
      fetch(`http://localhost:5000/orders/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          if (data.deletedCount > 0) {
            alert("Your data has been deleted successfully");
            const remaining = products.filter((product) => product._id !== id);
            setProducts(remaining);
          }
        });
    }
  };

  return (
    <div>
      <section className="container mx-auto p-6 font-mono">
        <div className="w-full mb-8 overflow-hidden rounded-lg shadow-lg">
          <div className="w-full overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="text-md font-semibold tracking-wide text-left text-gray-900 bg-gray-100 uppercase border-b border-gray-600">
                  <th className="px-4 py-3">Product</th>
                  <th className="px-4 py-3">Amount</th>
                  <th className="px-4 py-3">Status</th>
                  <th className="px-4 py-3">Price</th>
                  <th className="px-2 py-1"></th>
                </tr>
              </thead>
              <tbody className="bg-white">
                {products.map((product) => (
                  <CartProduct
                    key={product._id}
                    product={product}
                    handleDelete={handleDelete}
                  ></CartProduct>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Cart;
