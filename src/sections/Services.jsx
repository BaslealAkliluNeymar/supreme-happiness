import { truckFast } from "../assets/icons"


const Services = () => {
  return (
    <section className="mt-10 flex flex-1 justify-around rounded-full  items-center p-16 ">
      <div className="flex flex-col justify-betweens gap-5 items-start shadow-lg border-b-slate-600 p-10 rounded-lg">
        <img src={truckFast} alt="Chevron" className="bg-coral-red p-3 w-15 h-15 rounded-full"/>
        <h1 className="text-4xl flex justify-start items-center">Free Shipping</h1>
        <p>Enjoy seamsfsless shopping with our complimentary shipping service</p>
      </div>
      <div className="flex flex-col justify-betweens gap-5 items-start shadow-lg border-b-slate-600 p-10 rounded-lg">
        <img src={truckFast} alt="Chevron" className="bg-coral-red p-3 w-15 h-15 rounded-full"/>
        <h1 className="text-4xl flex justify-start items-center">Free Shipping</h1>
        <p>Enjoy seamsfsless shopping with our complimentary shipping service</p>
      </div>
      <div className="flex flex-col justify-betweens gap-5 items-start shadow-lg border-b-slate-600 p-10 rounded-lg">
        <img src={truckFast} alt="Chevron" className="bg-coral-red p-3 w-15 h-15 rounded-full"/>
        <h1 className="text-4xl flex justify-start items-center">Free Shipping</h1>
        <p>Enjoy seamsfsless shopping with our complimentary shipping service</p>
      </div>
    </section>
  )
}

export default Services