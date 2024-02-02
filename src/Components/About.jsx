import delivery from "../assets/about/deliveryMan.jpg"
import vegetable from "../assets/about/vegetables.jpg"

const About = () => {
  return (
    <div>
      <div className="hero min-h-screen my-10">
        <div className="hero-content flex-col lg:flex-row">
         <div className="relative">
         <img
            src={vegetable}
            style={{width:"90vh"}}
            className="max-w-sm rounded-lg shadow-2xl"
          />
          <img
            src={delivery}
            style={{width:"86vh"}}
            className="max-w-sm rounded-lg absolute -bottom-5 -right-10 border-8"
          />
         </div>
          <div className="ml-10">
          <p className="py-6 text-success font-bold">
                About us
            </p>
            <h1 className="text-5xl font-bold">From field to your door step</h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
            <button className="btn btn-success text-white">For more details</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
