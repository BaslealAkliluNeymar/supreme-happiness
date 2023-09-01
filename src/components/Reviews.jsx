import { star } from "../assets/icons"


const Reviews = ({imgURL,customerName,rating,feedback}) => {
  return (
    <div className="">
        <div className="flex flex-col justify-center">
            <div className="flex flex-col justify-center items-center gap-10">
                <img src={imgURL} className='w-[170px] h-[170px] rounded-full object-contain' alt="Customer1" />
                <p className="text-center leading-7 text-2xl w-[90%] text-gray-500">{feedback}</p>
            </div>
            <div className="flex items-center justify-center mt-3 gap-2">
                <img src={star} alt="Star" className="text-coral-red w-5 h-5" />
                <p className="text-2xl">{(rating)}</p>
            </div>
            <h2 className="text-center text-3xl font-bold">{customerName}</h2>
        </div>
    </div>
  )
}

export default Reviews