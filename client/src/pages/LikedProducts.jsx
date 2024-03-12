import { useSelector } from 'react-redux';
import ListingItems from '../components/ListingItems';

export default function LikedProducts() {
    const likedProducts = useSelector(state => state.products.likedProducts);

  return <div >
    <h1 className='text-4xl font-bold text-slate-600 text-center mt-6'>Liked Products</h1>

    {likedProducts.length > 0 ? <div className='flex flex-wrap gap-7 max-w-6xl mx-auto my-10'>
        {
            likedProducts.map((listing) => (
                <ListingItems listing={listing} key={listing._id}/>
            ))
        }
    </div> : <div className='font-semibold text-2xl text-slate-800 text-center mt-7'>Lo ji aapko to kuch pasand hi nahi hai.</div> }
  </div>
}
