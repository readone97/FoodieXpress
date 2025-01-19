import React, { useContext } from 'react';
import { assets } from '../../assets/assets';
import { StoreContext } from '../../Context/StoreContext';

const url = "http://localhost:4000";

const FoodItem = ({ id, name, price, description, image }) => {
  const demImg = image;
  const imageUrl = `${url}/images/${demImg}`;

  const { cartItems, addToCart, removeFromCart } = useContext(StoreContext);

  return (
    <div className="w-full mx-auto rounded-lg shadow-md hover:shadow-lg transition-transform transform hover:scale-105 animate-fadeIn">
      {/* Image Container */}
      <div className="relative">
        <img
          className="w-full rounded-t-lg"
          src={imageUrl}
          alt="food item"
        />
        {!cartItems[id] ? (
          <img
            className="w-9 absolute bottom-4 right-4 cursor-pointer bg-blue-600 p-1 rounded-full"
            onClick={() => addToCart(id)}
            src={assets.add_icon_white}
            alt="Add"
          />
        ) : (
          <div className="absolute bottom-4 right-4 flex items-center gap-2 p-2 bg-white rounded-full shadow-md">
            <img
              className="w-7 cursor-pointer"
              onClick={() => removeFromCart(id)}
              src={assets.remove_icon_red}
              alt="Remove"
            />
            <p className="text-gray-800 font-medium">{cartItems[id]}</p>
            <img
              className="w-7 cursor-pointer"
              onClick={() => addToCart(id)}
              src={assets.add_icon_green}
              alt="Add More"
            />
          </div>
        )}
      </div>

      {/* Food Info Section */}
      <div className="p-5">
        <div className="flex justify-between items-center mb-2">
          <p className="text-lg font-medium">{name}</p>
          <img className="w-16" src={assets.rating_starts} alt="Rating" />
        </div>
        <p className="text-sm text-gray-500">{description}</p>
        <p className="text-lg font-semibold text-tomato mt-2">${price}</p>
      </div>
    </div>
  );
};

export default FoodItem;
