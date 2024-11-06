import { Link, NavLink } from 'react-router-dom';
import { AiOutlineShoppingCart, AiOutlineHeart } from 'react-icons/ai'; 
import { useGadgetContext } from '../context/GadgetContext';

const Navbar = ({ isHomePage }) => {
  const { cart, wishlist } = useGadgetContext();

  return (
    <nav    className={`transition-all duration-500 ${
      isHomePage ? 'bg-purple-700 text-white' : 'bg-white text-black'
    } py-4 px-6`}>
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold">GadgetHaven</Link>

        <div className="flex space-x-4">
          <NavLink to="/" className={({ isActive }) => isActive ? 'text-orange-600' : ''}>Home</NavLink>
          <NavLink to="/dashboard" className={({ isActive }) => isActive ? 'text-orange-600' : ''}>Dashboard</NavLink>
          <NavLink to="/help-support" className={({ isActive }) => isActive ? 'text-orange-600' : ''}>Help & Support</NavLink>
          <NavLink to="/statistics" className={({ isActive }) => isActive ? 'text-orange-600' : ''}>Statistics</NavLink>
        </div>

        <div className="flex space-x-4">

          <Link to="/cart" className="relative">
            <AiOutlineShoppingCart className="mr-1 rounded-xl" />
            <span className="absolute -top-2 -right-2 bg-red-500 text-xs rounded-full px-1 py-0.5 text-white">
              {cart.length}
            </span>
          </Link>


          <Link to="/wishlist" className="relative">
            <AiOutlineHeart className="mr-1 rounded-xl" />
            <span className="absolute -top-2 -right-2 bg-red-500 text-xs rounded-full px-1 py-0.5 text-white">
              {wishlist.length}
            </span>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
