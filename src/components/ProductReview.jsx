import { FiSend } from 'react-icons/fi';
import { useParams } from 'react-router-dom';
import { useGetCommentQuery, usePostCommentMutation } from '../../Redux/Feature/product/productApi';



export default function ProductReview() {
    const { id } = useParams()
    const [postComment, { isLoading, isError, isSuccess }] = usePostCommentMutation()
    const { data } = useGetCommentQuery(id, {
        refetchOnMountOrArgChange: true,
        pollingInterval: 30000
    })


    const handleSubmit = (e) => {
        e.preventDefault()
        const form = e.target
        const message = form.message.value
        const options = {
            id: id,
            data: { comment: message }
        }
        postComment(options)
    }


    return (
        <div className=" mt-5">
            <form action="" onSubmit={handleSubmit}>
                <div className="flex gap-5 items-center">
                    <input
                        name='message'
                        className="min-h-[30px] w-full border" />
                    <button className="btn btn-sm btn-warning rounded-full h-10 w-10 p-2 text-[25px]">
                        <FiSend />
                    </button>
                </div>
            </form>
            <div className="mt-10">
                {data?.comments?.map((comment, index) => (
                    <div key={index} className="flex gap-3 items-center mb-5">
                        <img src="https://github.com/shadcn.png" alt="" className='w-10 h-10 rounded-full' />

                        <p>{comment}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}
