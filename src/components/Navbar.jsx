import {Link} from "react-router-dom"
import { useSelector } from "react-redux";

import { FaHome } from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";
import { LuListTodo } from "react-icons/lu";
import { FaShoppingBag } from "react-icons/fa";
import { IoStorefrontOutline } from "react-icons/io5";
import { MdLightMode } from "react-icons/md";
import { MdDarkMode } from "react-icons/md";


function Navbar() {
  const items = useSelector((state) => state.cart )

    return (
      <>
        <div className="navbar">
            <div className="logo protest-riot-regular"><IoStorefrontOutline className="logo-icon"/>Redux Store</div>
            <div className="link">
                <Link to="/" className="link-home" ><FaHome className="icon"/>Home</Link>
                <Link to="/cart" className="link-cart"><FaCartShopping className="icon"/>Cart</Link>
                <Link to="/todo" className="link-todo"><LuListTodo className="icon"/>ToDo</Link>
            </div>
            {items && <span className="cart-item"><FaShoppingBag className="icon"/>Cart Items: {items.length}</span>}
            <div><MdLightMode className="lightMode-icon"/></div>
            {/* <MdDarkMode/> */}
        </div>
      </>
    )
  }
  
  export default Navbar;