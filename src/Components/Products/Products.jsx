import { useEffect } from "react";
import { useState } from "react";
import Product from "./Product";

const Products = () => {
    const [products,setProducts]=useState([]);
    useEffect(()=>{
        fetch('http://localhost:5000/products')
        .then(res=>res.json())
        .then(data=>setProducts(data))
    },[])
    // console.log(products);
    return (
        <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-4 ">
            {products.map(product=><Product
            key={product._id}
            product={product}
            ></Product>)}
        </div>
    );
};

export default Products;