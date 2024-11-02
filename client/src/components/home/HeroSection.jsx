import React from "react"

function HeroSection() {
  return (
    <div className="flex items-center justify-center max-h-64 rounded-lg overflow-hidden mt-24">
      <h2 className="absolute text-4xl font-serif text-slate-100">
        Create your own Blog!
      </h2>
      <img
        className="w-full object-cover select-none pointer-events-none"
        src="https://images.pexels.com/photos/9754/mountains-clouds-forest-fog.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        alt="Hero Section Background"
      />
    </div>
  )
}

export default HeroSection
