import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ProductReview from '../components/ProductReview';
import Section from '../components/ui/sectionTemp';

export default function ProductDetails() {
    const { id } = useParams();

    //! Temporary code, should be replaced with redux
    const [data, setData] = useState([])
    useEffect(() => {
        fetch('./data.json')
            .then((res) => res.json())
            .then((data) => setData(data));
    }, []);

    const product = data?.find((item) => item._id === Number(id));

    //! Temporary code ends here

    return (
        <Section>
            <div className="flex  mx-auto items-center border-b border-gray-300">
                <div className="w-[50%]">
                    <img src={product?.image} alt="" />
                </div>
                <div className="w-[50%] space-y-3">
                    <h1 className="text-3xl font-semibold">{product?.name}</h1>
                    <p className="text-xl">Rating: {product?.rating}</p>
                    <ul className="space-y-1 text-lg">
                        {product?.features?.map((feature) => (
                            <li key={feature}>{feature}</li>
                        ))}
                    </ul>
                    <button className='btn btn-primary'>Add to cart</button>
                </div>
            </div>
            <ProductReview />
        </Section>
    );
}
