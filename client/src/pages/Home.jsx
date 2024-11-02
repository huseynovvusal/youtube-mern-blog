import React from "react"
import Navbar from "../components/layout/Navbar"
import HeroSection from "../components/home/HeroSection"
import Blogs from "../components/home/Blogs"

function Home() {
  return (
    <>
      <Navbar />
      <main className="lg:max-w-4xl md:max-w-2xl sm:max-w-xl  mx-auto py-6 px-2">
        <HeroSection />

        <Blogs />
      </main>
    </>
  )
}

export default Home
