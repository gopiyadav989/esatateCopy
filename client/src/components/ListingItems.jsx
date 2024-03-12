import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from "react-router-dom";
import { MdLocationOn } from "react-icons/md";
import { addLikedProduct, removeLikedProduct } from '../redux/products/productsSlice';

export default function ListingItems({ listing }) {
    const dispatch = useDispatch();
    const currentUser = useSelector(state => state.user.currentUser);
    const likedProducts = useSelector(state => state.products.likedProducts);

    // Check if the listing is already liked by the current user
    const isLiked = likedProducts.some(product => product._id === listing._id);
  
    const handleLikeClick = () => {
      if (isLiked) {
        dispatch(removeLikedProduct(listing._id)); // Remove from liked products
      } else {
        dispatch(addLikedProduct(listing)); // Add to liked products
      }
    };
  
    return (
      <div className="bg-white shadow-md hover:shadow-lg transition-shadow overflow-hidden rounded-lg w-full sm:w-[330px]">
        <Link to={`/listing/${listing._id}`}>
          <img className="h-[320px] sm:h-[220px] w-full object-cover hover:scale-105 transition-scale duration-300" src={listing.imageUrls[0]} alt={"listing cover"} />
          <div className="p-3 flex flex-col gap-2 w-full">
            <p className="truncate text-lg font-semibold text-slate-700">{listing.name}</p>
            <div className="flex items-center gap-1">
              <MdLocationOn className="h-4 w-4 text-green-700" />
              <p className="text-sm text-gray-600 truncate w-full">{listing.address}</p>
            </div>
            <p className="text-sm text-gray-600 line-clamp-2">{listing.description}</p>
            <p className="text-slate-500 mt-2 font-semibold ">
              ₹{' '}
              {listing.offer ? listing.discountPrice.toLocaleString('en-IN') : listing.regularPrice.toLocaleString('en-IN')}
              {listing.type === 'rent' && ' / month'}
            </p>
            <div className="text-slate-700 flex gap-4">
              <div className="font-bold text-xs">{listing.bedrooms > 1 ? `${listing.bedrooms} beds` : `${listing.bedrooms} bed`}</div>
              <div className="font-bold text-xs">{listing.bathrooms > 1 ? `${listing.bathrooms} baths` : `${listing.bedrooms} baths`}</div>
            </div>
          </div>
        </Link>
        <button className= " w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-2 " onClick={handleLikeClick}>
          {isLiked ? 'Remove from Liked' : 'Add to Liked'}
        </button>
      </div>
    );
}



// object-cover to keep the aspect-ratio of the image, truncate remove the extra letters by putting dot there
// p tag pushes the icon make it width full
