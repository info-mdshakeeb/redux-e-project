import { FiSend } from 'react-icons/fi';

const dummyComments = [
    'Bhalo na',
    'Ki shob ghori egula??',
    'Eta kono product holo ??',
    '200 taka dibo, hobe ??',
];

export default function ProductReview() {
    return (
        <div className=" mt-5">
            <div className="flex gap-5 items-center">
                <input className="min-h-[30px] w-full border" />
                <button className="btn btn-sm btn-warning rounded-full h-10 w-10 p-2 text-[25px]">
                    <FiSend />
                </button>
            </div>
            <div className="mt-10">
                {dummyComments.map((comment, index) => (
                    <div key={index} className="flex gap-3 items-center mb-5">
                        <img src="https://github.com/shadcn.png" alt="" className='w-10 h-10 rounded-full' />

                        <p>{comment}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}
