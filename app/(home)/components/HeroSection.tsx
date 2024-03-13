import { MovingbBorderBtn } from '@/components/ui/moving border'
import Link from 'next/link'
import React from 'react'
import Title from './Title'

export default function HeroSection() {
  return (
    <div className="min-h-[60vh] flex flex-col-reverse lg:flex-row gap-14 lg:gap-0 items-center justify-between">
        <div className="space-y-10 text-center lg:text-left">
            <h1 className="text-4xl lg:text-7xl font-bold">Nice to meet you! 🖐
                <br /> <span className=" underline underline-offset-8 decoration-green-500">{"I'm Arnab"}</span>
            </h1>
            <p className="md:w-96 text-lg text-gray-300"> 
                {"Welcome to my corner of the web, where creativity thrives and digital experiences come to life. As a passionate web developer, I'm committed to crafting immersive online journeys that captivate and inspire. Let's embark on this journey together and create something truly remarkable!"}
            </p>
            <Link href={"mailto:royarnab056@gmail.com"} className="inline-block">
                <Title text="Contact Me 📧" />
            </Link>
        </div>
        <div className="relative"> 
            <div className="w-72 h-72 space-y-3 -rotate-[30deg] relative">
                <div className="flex gap-3 translate-x-8">
                    <div className="w-32 h-32 rounded-2xl bg-green-500"></div>
                    <div className="w-32 h-32 rounded-full bg-indigo-500"></div>
                </div>
                <div className="flex gap-3 -translate-x-8">
                    <div className="w-32 h-32 rounded-2xl bg-indigo-500"></div>
                    <div className="w-32 h-32 rounded-full bg-green-500"></div>
                </div>
                <div className="glow absolute top-[40%] right-1/2 -z-10"></div>
            </div>
            <div className="bottom-5 sm:bottom-14 left-2 sm:-left-10">
                <MovingbBorderBtn borderRadius="0.5rem" className="p-3 font-semibold">
                    <p>📢 Available for Work</p>
                </MovingbBorderBtn>
            </div>
            
        </div>
    </div>
  )
}
