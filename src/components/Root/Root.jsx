import { Outlet,useLocation } from "react-router-dom"
import Footer from "../Footer/Footer"
import Navbar from "../Navbar/Navbar"

const Root = () => {
  const location = useLocation();

  const isHomePage = location.pathname === "/";
  

  return (
    <div >
     
      <Navbar isHomePage={isHomePage}/>
      

      <Outlet />


    
      <Footer />
    </div>
  )
}

export default Root
