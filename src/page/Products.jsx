import { useDispatch, useSelector } from "react-redux";
import { price, toggleStatus } from "../../Redux/Feature/Quary/querySlice";

import { useGetProductsQuery } from "../../Redux/Feature/product/productApi";
import ProductCard from "../components/ProductCard";
import Section from "../components/ui/sectionTemp";

const Products = () => {

    const { data } = useGetProductsQuery(undefined)

    const { status, priceRange } = useSelector(state => state.query)
    const dispatch = useDispatch()

    let productsData;

    if (status) {
        productsData = data?.data?.filter(
            (item) => item.status === true && item.price < priceRange
        );
    } else if (priceRange > 0) {
        productsData = data?.data?.filter((item) => item.price < priceRange);
    } else {
        productsData = data?.data;
    }

    return (
        <div>
            <Section>

                <div className="grid grid-cols-12  mx-auto relative ">
                    <div className="col-span-3 -mt-3  p-5  sticky top-16 h-[calc(100vh-80px)]">
                        <div>
                            <h1 className="text-2xl uppercase">Availability</h1>
                            <div className="flex items-center space-x-2 mt-3">
                                {/* <Switch id="in-stock" /> */}
                                <label htmlFor="in-stock">In stock</label>
                                <div className="form-control">
                                    <label className="label cursor-pointer ">

                                        <input
                                            checked={status ? true : false}
                                            onClick={() => dispatch(toggleStatus())}
                                            type="checkbox" className="toggle " />
                                    </label>
                                </div>
                            </div>
                        </div>
                        <div className="space-y-3 ">
                            <h1 className="text-2xl uppercase">Price Range</h1>
                            <div className="max-w-xl">
                                <input
                                    onChange={(e) => dispatch(price(Number(e.target.value)))}

                                    type="range" min={0} max="150" className="range range-sm"
                                // eslint-disable-next-line react/no-unknown-property

                                />

                            </div>
                            <div>From 0$ To {priceRange}$</div>
                        </div>
                    </div>
                    <div className="col-span-9 grid grid-cols-3 gap-6 pb-20 pt-4">
                        {productsData?.map((product) => (
                            <div className="" key={product?._id}>

                                <ProductCard product={product} />
                            </div>
                        ))}
                    </div>
                </div>
            </Section>
        </div>
    );
};

export default Products;