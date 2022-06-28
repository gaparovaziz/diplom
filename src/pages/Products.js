
import ProductList from "../components/ProductList/ProductList";
import { getProducts } from "../data/products";

function Products() {
  return (
    <>
      <ProductList products={getProducts()} />
    </>
  );
}

export default Products;