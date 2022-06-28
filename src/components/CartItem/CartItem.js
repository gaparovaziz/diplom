import { useDispatch } from "react-redux";
import { decrement, increment, remove } from "../../redux/cartSlice";

export default function CartItem({ product, actions, quantity }) {
 const dispatch = useDispatch();

 return (
  <div>
   <div className="row justify-content-center my-5" key={product.id}>
    <div className="col-md-4 p-auto">
     <img src={product.image} alt={product.title} height={200} width={180} />
    </div>
    <div className="col-md-4 p-auto">
     <h3>{product.title}</h3>
     <p className="lead fw-bold">
      {quantity} X ${product.price} = ${quantity * product.price}
     </p>

     {actions ? (
      <button
       className="btn btn-outline-dark me-3"
       onClick={() => dispatch(decrement(product.productId))}
      >
       <svg
        xmlns="http://www.w3.org/2000/svg"
        width="19"
        height="19"
        fill="currentColor"
        className="bi bi-dash-lg"
        viewBox="0 0 16 16"
       >
        <path
         fillRule="evenodd"
         d="M2 8a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11A.5.5 0 0 1 2 8Z"
        />
       </svg>
      </button>
     ) : null}

     {actions ? (
      <button
       className="btn btn-outline-dark me-3"
       onClick={() => dispatch(increment(product.productId))}
      >
       <svg
        xmlns="http://www.w3.org/2000/svg"
        width="19"
        height="19"
        fill="currentColor"
        className="bi bi-plus-lg"
        viewBox="0 0 16 16"
       >
        <path
         fillRule="evenodd"
         d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2Z"
        />
       </svg>
      </button>
     ) : null}

     {actions ? (
      <button
       className="btn btn-outline-dark me-3"
       onClick={() => dispatch(remove(product.productId))}
      >
       DEL
      </button>
     ) : null}
    </div>
   </div>
  </div>
 );
}
