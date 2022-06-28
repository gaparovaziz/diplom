import { useState } from "react";
import ProductItem from "./ProductItem/ProductItem";

function ProductList({ products }) {

 const [newList, setNewList] = useState(products);
 const filterProduct = (cat) => {
  const updatedList = products.filter((x) => x.category === cat);
  setNewList(updatedList);
 };

 const productItems = newList.map((product) => (
  <ProductItem key={product.productId} product={product} />
 ));

 return (
  <div>
   <div className="row">
    <div className="col-12 my-5">
     <h1 className="display-6 fw-bolder text-center">Latest Products </h1>
     <hr />
    </div>
   </div>

   <div className="buttons d-flex justify-content-center mb-5 pb-5">
     <button className="btn btn-outline-dark me-2" onClick={()=>setNewList(products)}>All</button>
     <button className="btn btn-outline-dark me-2" onClick={()=>filterProduct("men's clothing")}>Men's Clothing</button>
     <button className="btn btn-outline-dark me-2" onClick={()=>filterProduct("women's clothing")}>Women's Clothing</button>
     <button className="btn btn-outline-dark me-2" onClick={()=>filterProduct("jewelery")}>Jewelery</button>
     <button className="btn btn-outline-dark me-2" onClick={()=>filterProduct("electronics")}>Electronic</button>
    </div>

   <div className="row">{productItems}</div>
  </div>
 );
}

export default ProductList;
