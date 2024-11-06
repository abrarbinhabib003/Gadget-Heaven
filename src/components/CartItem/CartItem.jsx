
import React from 'react';

const CartItem = ({ item, onRemove }) => (
  <div className="cart-item bg-white rounded-lg shadow-md p-4 flex justify-between items-center mb-4">
    <div className="flex items-center">
      <img src={item.product_image} alt={item.product_title} className="w-20 h-20 object-cover rounded-lg mr-4" />
      <div>
        <h3 className="text-lg font-semibold">{item.product_title}</h3>
        <p className="text-gray-600">{item.description}</p>
        <p className="font-bold">${item.price}</p>
      </div>
    </div>
    <button onClick={onRemove} className="text-red-500 text-lg font-bold">X</button>
  </div>
);

export default CartItem;
