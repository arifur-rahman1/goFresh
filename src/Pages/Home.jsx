import About from "../Components/About";
import Banner from "../Components/banner";

const Home = () => {
    return (
        <div>
            <Banner></Banner>     
            <div className=" container mx-auto">
            <About></About>  
            </div> 
        </div>
    );
};

export default Home;