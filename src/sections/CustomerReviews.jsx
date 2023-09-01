import Reviews from "../components/Reviews"
import { reviews } from "../constants"

function CustomerReviews() {
  return (
    <section className="bg-pale-blue padding flex flex-col max-container justify-center items-center font-montserrat gap-[150px]">
         <div className="flex items-center flex-col gap-5">
            <h2 className="text-4xl text-center">What Our <span className="text-coral-red">Customers</span> Say?</h2>
            <p className="text-center text-2xl w-[90%] ">Hear genuine stories from our satisfied customers
              about their exceptional experience with us.
            </p>
         </div>
         <div className="flex justify-between items-center">
          {reviews.map((review,index) =>(
            <Reviews key={index} {...review}/>
          ))}
         </div>
       </section>
  )
}

export default CustomerReviews