import React from 'react'
import { Button } from '../ui/button'

function Hero() {
  return (
    <div className='hero'>
        <h1 className='font-extrabold text-[60px]'>
            <span>  Discover Your Next Adventure with AI:</span><br/> Personalized Itineraries at Your Fingertips
        </h1>
        <p className='para'>
            Your personal trip planner and travel curator, creating custom itineraries tailored to your interests and budget.
        </p>
        <Button className="start">Get Started, It's Free</Button>
    </div>
  )
}

export default Hero