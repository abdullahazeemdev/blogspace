import React from 'react'
import Navbar  from './components/Navbar';
import HomeHeroSection from './components/homeHeroSection'
import FeaturedBlogs from './components/FeaturedBlogs'
import CreateBlogBanner from './components/CreateBlogBanner'
import Footer from './components/Footer';


const page = () => {
  return (
    <>
    <Navbar/>
    <HomeHeroSection/>
    <FeaturedBlogs/>
    <CreateBlogBanner/>
    <Footer/>
    </>
  )
}

export default page