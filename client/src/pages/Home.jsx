import React from 'react'
//Phir Hero naam ka component import kiya gaya hai jo ek alag file mein bana hoga 
import Hero from '../components/Hero'
import FeaturedDestination from '../components/FeaturedDestination'
import ExclusiveOffers from '../components/ExclusiveOffers'
import Testimonial from '../components/Testimonial'
import NewsLetter from '../components/Newsletter'

const Home = () => {
  return (
    <>
        <Hero /> {/*jo batata hai ki jab Home page load hoga, tab Hero component bhi usmein dikhai dega. */}
        <FeaturedDestination />  {/* FeaturedDestination component, jisme best jagah ya hotels dikhaye jayenge */}
        <ExclusiveOffers />  {/* ExclusiveOffers component jisme limited-time offers dikhte hain */}
        <Testimonial />  {/* Testimonial component jisme customers ke feedback dikhaye jate hain */}
        <NewsLetter />  {/* Newsletter component jisme user apna email daal ke subscribe kar sakta hai */}
    </>
  )
}

export default Home