import React, { useState,useEffect } from 'react';
import { useGadgetContext } from '../context/GadgetContext';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Dashboard = () => {
  useEffect(() => {
    document.title = "Dashboard-GadgetHaven";
  }, []);
  const {
    cart,
    wishlist,
    addToCart,
    removeFromCart,
    removeFromWishlist,
    purchaseItems,
    sortCartByPrice, 
  } = useGadgetContext();
  const [activeTab, setActiveTab] = useState('cart');

  const handleTabSwitch = (tab) => {
    setActiveTab(tab);
  };

  const handlePurchase = () => {
    if (cart.length > 0) {
      purchaseItems();
      toast.success('🎉 Congratulations! Your purchase was successful!');
    }
  };

  const totalCost = cart.reduce((total, product) => total + product.price, 0).toFixed(2);

  return (
    
    <div className="">
    
    <div className='bg-purple-700 text-center text-white'>
  
  <h2 className="text-3xl font-bold  mb-6 py-4">Dashboard</h2>
  <p>Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest 
accessories, we have it all!</p>

   <div className="mb-4 flex space-x-4 container   mx-auto p-6 items-center justify-center">
     <button
       onClick={() => handleTabSwitch('cart')}
       className={`px-4 py-2 rounded ${
         activeTab === 'cart' ? 'bg-purple-600 text-white' : 'bg-gray-200 text-purple-600'
       }`}
     >
       Cart {cart.length > 0 && <span className="ml-2 bg-red-500 text-white rounded-full px-2 py-1 text-xs">{cart.
length}</span>}
     </button>
     <button
       onClick={() => handleTabSwitch('wishlist')}
       className={`px-4 py-2 rounded ${
         activeTab === 'wishlist' ? 'bg-purple-600 text-white' : 'bg-gray-200 text-purple-600'
       }`}
     >
       Wishlist {wishlist.length > 0 && <span className="ml-2 bg-blue-500 text-white rounded-full px-2 py-1 text-xs">
{wishlist.length}</span>}
     </button>
   </div>
  </div>
    
    
    
    <div className='container   mx-auto p-6'>

 
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   

      {/* Cart Section */}
      {activeTab === 'cart' && (
        <div className="mb-6">
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">Shopping Cart</h3>
          
          {/* Sort, Total Cost, and Purchase buttons aligned in a flex container */}
          <div className="flex justify-between items-center mb-4">
            <button
              onClick={sortCartByPrice}
              className="bg-purple-600 text-white px-4 py-2 rounded"
            >
              Sort by Price
            </button>
            <p className="font-semibold text-xl text-gray-800">
              Total Cost: ${totalCost}
            </p>
            {cart.length > 0 && (
              <button
                onClick={handlePurchase}
                className="bg-green-600 text-white px-4 py-2 rounded"
              >
                Purchase
              </button>
            )}
          </div>

          <ul className="mt-4">
            {cart.length === 0 ? (
              <li className="text-gray-500 text-lg">No items in the cart.</li>
            ) : (
              cart.map((item) => (
                <li key={item.product_id} className="flex justify-between items-center mb-4 p-4 border border-gray-300 rounded-lg shadow-sm hover:shadow-md">
                  <div className="flex items-center">
                    <img
                      src={item.product_image}
                      alt={item.product_title}
                      className="w-20 h-20 object-cover rounded"
                    />
                    <div className="ml-4">
                      <h4 className="text-lg font-semibold">{item.product_title}</h4>
                      <p className="text-sm text-gray-600">{item.description}</p>
                      <p className="text-gray-800 font-semibold">${item.price}</p>
                    </div>
                  </div>
                  <button
                    onClick={() => removeFromCart(item.product_id)}
                    className="bg-red-600 text-white py-1 px-4 rounded ml-4"
                  >
                    Remove
                  </button>
                </li>
              ))
            )}
          </ul>
        </div>
      )}

      {/* Wishlist Section */}
      {activeTab === 'wishlist' && (
        <div className="mb-6">
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">Wishlist</h3>
          <ul>
            {wishlist.length === 0 ? (
              <li className="text-gray-500 text-lg">No items in the wishlist.</li>
            ) : (
              wishlist.map((item) => (
                <li key={item.product_id} className="flex justify-between items-center mb-4 p-4 border border-gray-300 rounded-lg shadow-sm hover:shadow-md">
                  <div className="flex items-center">
                    <img
                      src={item.product_image}
                      alt={item.product_title}
                      className="w-20 h-20 object-cover rounded"
                    />
                    <div className="ml-4">
                      <h4 className="text-lg font-semibold">{item.product_title}</h4>
                      <p className="text-sm text-gray-600">{item.description}</p>
                      <p className="text-gray-800 font-semibold">${item.price}</p>
                    </div>
                  </div>
                  <div className="flex space-x-2">
                    <button
                      onClick={() => removeFromWishlist(item.product_id)}
                      className="bg-red-600 text-white py-1 px-4 rounded"
                    >
                      Remove
                    </button>
                    <button
                      onClick={() => addToCart(item)}
                      className="bg-blue-600 text-white py-1 px-4 rounded"
                    >
                      Add to Cart
                    </button>
                  </div>
                </li>
              ))
            )}
          </ul>
        </div>
      )}
   </div>
      {/* Toast container */}
      <ToastContainer />
    </div>
  );
};

export default Dashboard;
