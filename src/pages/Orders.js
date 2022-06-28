import axios from 'axios'
import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { getProducts } from '../data/products';

function Orders() {
  const [ orders, setOrders ] = useState(null)
  
  const { localId } = useSelector(store => store.auth);

  const allProducts = getProducts()

  let showProducts = []
  
  useEffect(() => {
    axios.get('https://diplom-5a77d-default-rtdb.firebaseio.com/orders.json')
      .then(({ data }) => {
        const newItems = Object.keys(data).map(id => {
          return {id, ...data[id]}
        })
        setOrders(newItems)
      })
  }, [])
  
  let output = <h1>Loading...</h1>
  if (orders !== null) {
    output = orders.filter(idLocal => idLocal.localId === localId).map(order => {
      return(
        Object.keys(order.items).map(item => {
          return(
            showProducts.push(allProducts[allProducts.findIndex(product => product.productId === item)])
          )
        })
      )
    })
  }
  console.log(showProducts)
  return ( 
    <div>
      {output}
    </div>
   );
}

export default Orders;