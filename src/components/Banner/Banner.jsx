import { useNavigate } from 'react-router-dom';
import bannerImage from '../../assets/banner.jpg';

const Banner = () => {

    const navigate = useNavigate();

    const handleShopNowClick = () => {
      navigate('/dashboard'); 
    };
  
    return (
      <>
      <div className="bg-purple-700 text-white text-center py-20 px-4 my-4">
        <h2 className="text-3xl md:text-5xl font-bold mb-4">
          Upgrade Your Tech Accessorize with Gadget Heaven Accessories
        </h2>
        <p className="text-lg md:text-xl mb-6">
          Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!
        </p>
        <button  onClick={handleShopNowClick}  className="bg-white text-purple-600 font-semibold py-2 px-6 rounded-full shadow-md hover:bg-gray-200 transition">
          Shop Now
        </button>
      </div>
      <div className="flex items-center justify-center w-2/4 mx-auto border-2 border-gray-300 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 group p-4">
  <img 
    src={bannerImage} 
    alt="Banner" 
    className="object-cover w-full h-80 rounded-lg "
  />
</div>



     
      </>
    );
  };
  
  export default Banner;
  