import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("All Products");
  const navigate = useNavigate();

  useEffect(() => {
    fetch('/ProductsData.json') 
      .then((response) => response.json())
      .then((data) => {
        setProducts(data);
        setFilteredProducts(data);
      })
      .catch((error) => console.error("Error fetching products:", error));
  }, []);

  const filterByCategory = (category) => {
    setSelectedCategory(category);
    setFilteredProducts(
      category === "All Products"
        ? products
        : category === "Laptops"
        ? products.filter((product) => product.category === "computers")
        : category === "Phones"
        ? products.filter((product) => product.category === "phones")
        : products.filter((product) => !["computers", "phones"].includes(product.category))
    );
  };

  const handleProductClick = (productId) => {
    navigate(`/product/${productId}`);
  };

  return (
    <div className="container mx-auto p-6 w-11/12">
      <h2 className="text-center text-2xl font-bold mb-4">Explore Cutting-Edge Gadgets</h2>

      <div className="flex space-x-4 mb-6">
        {["All Products", "Laptops", "Phones", "Accessories"].map((category) => (
          <button
            key={category}
            onClick={() => filterByCategory(category)}
            className={`py-2 px-4 rounded-lg ${selectedCategory === category ? 'bg-purple-600 text-white' : 'bg-gray-200 text-gray-800'}`}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {filteredProducts.map((product) => (
          <div
            key={product.product_id}
            className="bg-white rounded-lg shadow-md p-4 cursor-pointer hover:shadow-lg transition"
            onClick={() => handleProductClick(product.product_id)}
          >
            <img
              src={product.product_image}
              alt={product.product_title}
              className="w-full h-48 object-cover rounded-lg mb-4"
            />
            <h3 className="text-lg font-semibold text-gray-800">{product.product_title}</h3>
            <p className="text-gray-700 font-bold mb-2">${product.price}</p>
            <p className="text-gray-600 mb-2">{product.description}</p>
            <div className="flex items-center mb-2">
              <span className="text-yellow-500 mr-2">
                {"★".repeat(Math.floor(product.rating))}{"☆".repeat(5 - Math.floor(product.rating))}
              </span>
              <span className="text-gray-600">{product.rating}</span>
            </div>
            <button className='btn-outline border-2 px-4 my-4 btn-md rounded-xl'>View Product Details</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
