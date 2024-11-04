
import { Link, NavLink } from 'react-router-dom';

const Navbar = () => {

  
  
  
  

  return (
    <nav className="navbar bg-gray-800 text-white">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold">
          GadgetHaven
        </Link>
        <div className="flex space-x-4">
          <NavLink to="/" className={({ isActive }) => isActive ? 'text-yellow-500' : ''}>Home</NavLink>
          <NavLink to="/dashboard" className={({ isActive }) => isActive ? 'text-yellow-500' : ''}>Dashboard</NavLink>
          <NavLink to="/statistics" className={({ isActive }) => isActive ? 'text-yellow-500' : ''}>Stats</NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
