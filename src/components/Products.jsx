import {useState, useEffect} from "react";
import { useDispatch } from "react-redux";
import {add} from '../store/cartSlice';

function Products() {
    const dispatch = useDispatch();
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    
    const handleAdd = (product) => {
      dispatch(add(product));
    }

    useEffect(()=>{
        const fetchProducts = async() => {
            const resp = await fetch("https://fakestoreapi.com/products")
            const data = await resp.json();
            console.log(data);
            setLoading(false);
            setProducts(data)
        }
        fetchProducts();
    },[])
    return (
        <>
          {loading ? (
            <div className="loading-state">Loading...</div>
          ) : (
            <>
              <div className="card-container">
                {products.map(product => (
                  <div className="card" key={product.id}>
                    <img src={product.image} alt={product.title} />
                    <div className="project-details">
                      <h2>{product.title}</h2>
                      <h3>Price - ${product.price}</h3>
                      <button className="btn" onClick={() => handleAdd(product)}>Add to Cart</button>
                    </div>
                  </div>
                ))}
              </div>
            </>
          )}
        </>
      );
      
  }
  
  export default Products;