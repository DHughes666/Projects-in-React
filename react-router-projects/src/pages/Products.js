import { Link } from "react-router-dom";

const Products = () => {
  return (
    <>
      <section className='section'>
        <h2>products</h2>
        <Link to="/" className="btn">Home</Link>
      </section>
    </>
  );
};

export default Products;
