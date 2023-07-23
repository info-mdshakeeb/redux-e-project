import { useDispatch, useSelector } from "react-redux";
import { addToCart, deleteItem, removeQuantity } from "../../Redux/Feature/cart/cartSlice";

export default function Cart() {
    const dispatch = useDispatch()
    const { products, total } = useSelector(state => state.cart)


    return (


        <div className="overflow-auto relative">
            <div>
                <p>Cart</p>
                <h1>Total: {total.toFixed(2)}</h1>
            </div>
            <div className="">
                {products.map((product) => (
                    <div
                        className="border  flex justify-between rounded-md my-2"
                        key={product.name}
                    >
                        <div className="border-r pr-5 w-20 h-20 shrink-0">
                            <img src={product?.image} alt="" className="h-full" />
                        </div>
                        <div className="px-2 w-full flex flex-col gap-3">
                            <h1 className=" self-center">{product?.name}</h1>
                            <p>Quantity: {product.quantity}</p>
                            <p className="">
                                Total Price: {(product.price * product.quantity).toFixed(2)}{' '}
                                $
                            </p>
                        </div>
                        <div className="border-l pl-5 flex flex-col justify-between">

                            <button
                                onClick={() => dispatch(addToCart(product))}
                                className="btn btn-sm">+ </button>
                            <button
                                onClick={() => dispatch(removeQuantity(product))}
                                className="btn btn-sm">_ </button>
                            <button
                                onClick={() => dispatch(deleteItem(product))}
                                className="btn btn-sm">D</button>
                        </div>
                    </div>
                ))}
            </div>
        </div>

    );
}
