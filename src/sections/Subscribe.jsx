

const Subscribe = () => {
  return (
    <section className="padding-x sm:py-32 py-16 w-full max-container flex items-center justify-between">
          <h1 className="text-4xl font-bold">Sign up from <span className="text-coral-red">Updates</span> & Newsletter</h1>
          <div className="border-coral-red border-4 p-4 rounded-full w-[400px]">
            <input type="text" className="outline-none" placeholder="subscribe@nike.com"/>
            <button className="bg-coral-red text-white p-3 w-[120px] rounded-full">Sign Up</button>
          </div>
       </section>
  )
}

export default Subscribe