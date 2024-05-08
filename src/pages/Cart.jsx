import { useSelector, useDispatch } from "react-redux";
import { remove } from "../store/cartSlice";

function Cart() {
  const dispatch = useDispatch()
  const products = useSelector((state) => state.cart)

  const handleRemove = (productId) =>{
    dispatch(remove(productId))
  }

    return (
      <>
        <h1 className="cart-title">Items in Cart</h1>
        <div className="card-container">
            {products.map(product => (
              <div className="card" key={product.id}>
                <img src={product.image} alt={product.title} />
                <div className="project-details">
                  <h2>{product.title}</h2>
                  <h3>Price - ${product.price}</h3>
                  <button className="btn" onClick={() => handleRemove(product.id)}>Remove from Cart</button>
                </div>
              </div>
          ))}
        </div>
      </>
    )
  }
  
  export default Cart;