import { offer } from "../assets/images"
import Button from "../components/Button"

const SpecialOffers = () => {
  return (
    <section className="max-container flex flex-1 justify-between items-center mb-[100px]" >
          <div>
            <img src={offer} alt="" />
          </div>
          <div className="flex flex-1 flex-col justify-center items-start border-red gap-10">
            <h2 className="text-4xl font-bold leading-4"><span className="text-coral-red">Special</span> Offer</h2>
            <p className="font-montserrat text-2xl leading-9">
               Embark on a shopping journey that redefines your experience with unbeatable deals.
               From premier selections to incredible savings,
               we offer unparalleled value that sets us apart.</p>
            <p className="font-montserrat text-2xl leading-9">
                Navigate a realm of possibilities designed to fulfill your unique desires,
                surpassing the loftiest expectations.
                Your journey with us is nothing short of exceptional.</p>
            <div className="flex justify-center items-center gap-5">
              <Button label="View Details" iconURL=""/>
              <button className="flex justify-center items-center gap-2
    px-7 py-4 border font-montserrat text-lg leading-none
    bg-transparent rounded-full text-white">
                    <p className="font-montserrat text-xl text-black">Learn More</p>
              </button>
            </div>
          </div>
       </section>
  )
}

export default SpecialOffers