import Header from "../components/Header/Header";
import headerImage from "../assets/1.webp";
import ProductList from "../components/ProductList/ProductList";
import { getProducts } from "../data/products";


function Home() {
  return (
    <>
      <Header image={headerImage}/>

      <ProductList products={getProducts()} />
    </>
  );
}

export default Home;