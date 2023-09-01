import CustomerReviews from "./sections/CustomerReviews";
import Footer from "./sections/Footer";
import Hero from "./sections/Hero";
import PopularProducts from "./sections/PopularProducts";
import Services from "./sections/Services";
import SpecialOffers from "./sections/SpecialOffers";
import Subscribe from "./sections/Subscribe";
import SuperQuality from "./sections/SuperQuality";

import Nav from "./components/Nav";

export default function App() {
  return (
    <main className="relative">
       <Nav />
       <Hero />
       <PopularProducts />
       <SuperQuality />
       <Services />
       <SpecialOffers />
       <CustomerReviews />
       <Subscribe />
       <Footer />  
    </main>
  )
}