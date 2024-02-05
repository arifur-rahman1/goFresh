import vegetable from '../assets/items/vegetablesEmail.png'
const Emailsubscription = () => {
    return (
        <div className="flex flex-row justify-center items-center bg-primary-bg">
            <div data-aos="fade-right" data-aos-duration="1000">
            <form action="" className="py-48 flex flex-row flex-1">
            <input type="text" name="price" id="price" className="block w-full rounded-l-2xl border-0 py-1.5 pl-7 pr-20 text-gray-900  placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:text-green-700 sm:text-sm sm:leading-6" placeholder="Enter your email"/>
            <input type="button" value="Subscribe" className="bg-green-700 hover:bg-green-400 border-0 rounded-r-2xl px-4 text-white" />
                </form> 
                </div>  
                <div data-aos="fade-left" data-aos-duration="1000">
                <img style={{width:"25vw"}} src={vegetable} alt="" className='ml-24' /> 
                    </div>        
        </div>
    );
};

export default Emailsubscription;