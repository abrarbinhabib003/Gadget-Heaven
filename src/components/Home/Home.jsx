import React from 'react'
import { useEffect } from 'react'
import Banner from '../Banner/Banner'
import ProductList from '../ProductList/ProductList'


const Home = () => {
  useEffect(() => {
    document.title = "Home-GadgetHaven";
  }, []);
  return (
    <div>
<Banner />
<ProductList />
    </div>
  )
}

export default Home
