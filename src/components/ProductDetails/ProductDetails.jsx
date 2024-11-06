import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { useGadgetContext } from '../context/GadgetContext';
import { AiOutlineHeart } from 'react-icons/ai';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ProductDetails = () => {
  const [product, setProduct] = useState(null);
  const [isWishlisted, setIsWishlisted] = useState(false);
  const { cart, wishlist, addToCart, addToWishlist } = useGadgetContext();
  const location = useLocation();
  const productId = location.pathname.split('/')[2];

  useEffect(() => {
    const fetchProductData = async () => {
      try {
        const response = await fetch('/ProductsData.json');
        const data = await response.json();
        const foundProduct = data.find((product) => product.product_id === parseInt(productId));
        setProduct(foundProduct);


        if (wishlist.some(item => item.product_id === foundProduct.product_id)) {
          setIsWishlisted(true);
        }
      } catch (error) {
        console.error('Error fetching product data:', error);
      }
    };

    fetchProductData();
  }, [productId, wishlist]);

  const handleAddToCart = () => {
    if (cart.some(item => item.product_id === product.product_id)) {
      toast.warning('Already in cart!', { position: "top-right" });
    } else {
      addToCart(product);
      toast.success('Added to cart 🛒', { position: "top-right" });
    }
  };

  const handleAddToWishlist = () => {
    if (!isWishlisted) {
      addToWishlist(product);
      setIsWishlisted(true);
      toast.info('Added to wishlist ', { position: "top-right" });
    } else {
      toast.warning('Already in wishlist!', { position: "top-right" });
    }
  };

  if (!product) return <div>Product not found.</div>;

  return (
    <div className="container mx-auto p-6 bg-purple-100">
      <h2 className="text-center text-3xl font-bold text-purple-700 mb-2">Product Details</h2>
      <ToastContainer /> 

      <div className="bg-white p-6 rounded-lg shadow-lg flex flex-col md:flex-row gap-6">
        <img
          src={product.product_image}
          alt={product.product_title}
          className="w-full md:w-1/3 h-72 object-cover rounded-lg"
        />

        <div className="w-full md:w-2/3">
          <h3 className="text-2xl font-semibold text-gray-800">{product.product_title}</h3>
          <p className="text-xl font-bold text-gray-700 mb-2">Price: ${product.price}</p>
          <p
            className={`mb-4 inline-block px-2 py-1 rounded-full text-white ${
              product.availability ? 'bg-green-500' : 'bg-red-500'
            }`}
          >
            {product.availability ? 'In Stock' : 'Out of Stock'}
          </p>
          <p className="text-gray-600 mb-4">{product.description}</p>
          <div className="flex items-center mb-4">
            <span className="text-yellow-500 mr-2">
              {'★'.repeat(Math.floor(product.rating))}{'☆'.repeat(5 - Math.floor(product.rating))}
            </span>
            <span className="text-gray-600">{product.rating}</span>
          </div>

          <p className="font-semibold mb-2">Product Specifications:</p>
          <ul className="list-disc list-inside mb-4 text-gray-700">
            {product.specification &&
              product.specification.map((spec, index) => (
                <li key={index}>{spec}</li>
              ))}
          </ul>

          <div className="flex ">
            <button
              onClick={handleAddToCart}
              className="bg-purple-600 text-white py-2 px-4 rounded hover:bg-purple-700 mr-2"
            >
              Add To Cart 🛒
            </button>
            <button
              onClick={handleAddToWishlist}
              className={`bg-gray-200 text-purple-600 py-2 px-4 rounded-xl flex items-center ${
                isWishlisted ? 'cursor-not-allowed opacity-50' : 'hover:bg-gray-300'
              }`}
              disabled={isWishlisted}
            >
              <AiOutlineHeart className="mr-1 rounded-xl" /> {isWishlisted ? 'Wishlisted' : 'Add to Wishlist'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
