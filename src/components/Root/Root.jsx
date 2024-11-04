import { Outlet } from "react-router-dom"
import Footer from "../Footer/Footer"
import Navbar from "../Navbar/Navbar"

const Root = () => {
  return (
    <div>
      <h3>Hello From Root</h3>
      <Navbar />

      <Outlet />
      <Footer />
    </div>
  )
}

export default Root
