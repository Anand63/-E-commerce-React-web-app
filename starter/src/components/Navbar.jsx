import { FaShoppingCart } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";

const Navbar = () => {
  const {cart}=useSelector((state)=>state);
  return (
    <div>
       <nav className="flex justify-between h-20 max-w-5xl items-center mx-auto">
          <NavLink to="/">
          <div className="ml-5">
             <img src="../logo.png" className="h-14"/>
          </div>
             </NavLink>

          <div className="flex items-center font-medium text-slate-100 mr-5 space-x-6">

            <NavLink to="/">
              <p>Home</p>
            </NavLink>
          
            <NavLink to="/cart">
              <div className="relative">
                 <FaShoppingCart className="text-2xl"/>
                 {
                   cart.length>0 &&
                   <span
                   className="absolute -top-1 -right-2 w-5 h-5 bg-green-600 rounded-full
                   item-center justify-center animate-bounce text-xs flex text-white "
                   >{cart.length}</span>
                 }
              </div>
            </NavLink>
          
        </div>
       </nav>
    </div>
  );
};

export default Navbar;
