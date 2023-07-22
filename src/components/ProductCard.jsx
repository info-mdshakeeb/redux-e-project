import { useDispatch } from 'react-redux';
/* eslint-disable react/prop-types */
import { Link } from 'react-router-dom';
import { addtoCard } from '../Redux/feature/AddtoCard/cardSlice';


const ProductCard = ({ product }) => {
    const dispatch = useDispatch()
    const handleAddProduct = (product) => {
        dispatch(addtoCard(product))
    };
    return (
        <div>
            <div className="rounded-2xl h-[420px] flex flex-col items-start justify-between p-3 overflow-hidden shadow-md border border-gray-100 hover:shadow-2xl hover:scale-[102%] transition-all gap-2">
                <Link to={`/product-details/${product?._id}`} className="w-full">
                    <img src={product?.image} alt="product" />
                    <h1 className="text-xl font-semibold">{product?.name}</h1>
                </Link>
                <p>Rating: {product?.rating}</p>
                <p className="text-sm">
                    Availability: {product?.status ? 'In stock' : 'Out of stock'}
                </p>
                <p className="text-sm">Price: {product?.price}</p>
                <button className='btn btn-sm btn-warning' onClick={() => handleAddProduct(product)}>
                    Add to cart
                </button>
            </div>
        </div>
    );
};

export default ProductCard;