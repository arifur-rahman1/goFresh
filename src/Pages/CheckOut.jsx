import { useLoaderData } from "react-router-dom";

const CheckOut = () => {
    const product= useLoaderData()
    const {title}=product;
    return (
        <div>
            <h2>this is checkout {title}</h2>            
        </div>
    );
};

export default CheckOut;