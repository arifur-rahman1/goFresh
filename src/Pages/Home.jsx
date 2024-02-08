import About from "../Components/About";
import Emailsubscription from "../Components/Emailsubscription";
import Products from "../Components/Products/Products";
import Banner from "../Components/banner";

const Home = () => {
    return (
        <div>
            <Banner></Banner>     
            <div className=" container mx-auto">
            <About></About>  
            <div className="my-10">
                <h4 className="text-center font-extrabold text-3xl mb-10 ">Our Products</h4>
                <Products></Products>
            </div>

            </div> 
            <Emailsubscription></Emailsubscription>
        </div>
    );
};

export default Home;