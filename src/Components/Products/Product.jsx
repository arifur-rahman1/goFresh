
const Product = ({product}) => {
    const {title,img}=product;
    return (
        <div data-aos="fade-up" data-aos-duration="2000" >
          <div className="card bg-base-100 shadow-xl">
  <figure className="px-10 pt-10">
    <img src={img} style={{height:"60vh",width:"20vw"}} alt="Shoes" className="rounded-xl" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title">{title}</h2>
    <p>If a dog chews shoes whose shoes does he choose?</p>
    <div className="card-actions">
      <button className="btn btn-primary">Buy Now</button>
    </div>
  </div>
</div>
        </div>
    );
};

export default Product;