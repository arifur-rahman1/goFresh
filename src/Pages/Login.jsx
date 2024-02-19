import { Link } from "react-router-dom";
import logo from "../assets/Banner/Banner.png"
import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";
const Login = () => {
    const {signIn}=useContext(AuthContext)
    const handleLogin=(event)=>{
        event.preventDefault();
        const form =event.target;
        const email=form.email.value;
        const password=form.password.value
        // console.log(email,password);
        signIn(email,password).then(result=>
            {const user=result.user
                console.log(user);
            }).catch(error=>console.log(error))

    }
    return (
        <div>
            
<div className="relative py-16 bg-gradient-to-br from-sky-50 to-gray-200">  
    <div className="relative container m-auto px-6 text-gray-500 md:px-12 xl:px-40">
        <div className="m-auto md:w-8/12 lg:w-7/12 xl:w-6/12">
            <div className="rounded-xl bg-white shadow-xl">
                <div className="p-6 sm:p-16">
                    <div className="space-y-4">
                        <img src={logo}loading="lazy" className="w-10" alt="tailus logo"/>
                        <h2 className="mb-8 text-2xl text-green-900 font-bold">Sign in to purchase <br/> best and fresh products.</h2>
                    </div>
                    {/* form  */}
                    <div className="mt-10">
                    <form className="bg-white" onSubmit={handleLogin}>
					<div className="flex items-center border-2 py-2 px-3 rounded-2xl mb-4">
						<svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" fill="none"
							viewBox="0 0 24 24" stroke="currentColor">
							<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
								d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
						</svg>
						<input className="pl-2 outline-none border-none" type="text" name="email" id="" placeholder="Email Address" />
      </div>
						<div className="flex items-center border-2 py-2 px-3 rounded-2xl">
							<svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" viewBox="0 0 20 20"
								fill="currentColor">
								<path fillRule="evenodd"
									d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
									clipRule="evenodd" />
							</svg>
							<input className="pl-2 outline-none border-none" type="text" name="password" id="" placeholder="Password" />
      </div>
							<button type="submit" className="block w-full bg-green-800 hover:bg-green-600 mt-4 py-2 rounded-2xl text-white font-semibold mb-2">Login</button>
                            <p className="text-sm ml-2">{`Don't have account?`}</p>
							<Link to={'/register'}><span className="text-sm ml-2 hover:text-green-500 cursor-pointer">Please register</span></Link>
		</form>
                    </div>
                    {/* form  */}
                    <div className="mt-10 grid space-y-4">
                        <button className="group h-12 px-6 border-2 border-gray-300 rounded-full transition duration-300 
                         hover:border-green-400 focus:bg-green-50 active:bg-green-100">
                            <div className="relative flex items-center space-x-4 justify-center">
                                <img src="https://tailus.io/sources/blocks/social/preview/images/google.svg" className="absolute left-0 w-5" alt="google logo"/>
                                <span className="block w-max font-semibold tracking-wide text-gray-700 text-sm transition duration-300  group-hover:text-green-600 sm:text-base">Continue with Google</span>
                            </div>
                        </button>
                        
                    </div>

                    <div className="mt-5 space-y-4 text-gray-600 text-center sm:-mb-8">
                        <p className="text-xs">By proceeding, you agree to our <a href="#" className="underline hover:text-green-500">Terms of Use</a> and confirm you have read our <a href="#" className="underline hover:text-green-500">Privacy and Cookie Statement</a>.</p>
                        <p className="text-xs">This site is protected by reCAPTCHA and the <a href="#" className="underline hover:text-green-500">Google Privacy Policy</a> and <a href="#" className="underline hover:text-green-500">Terms of Service</a> apply.</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
        </div>
    );
};

export default Login;