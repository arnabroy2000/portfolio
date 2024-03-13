"use client"

import React from 'react'
import Title from './Title'
import { HoverEffect } from '@/components/ui/card hover effect'
import { FaReact, FaJava,FaNodeJs } from "react-icons/fa";
import { SiNextdotjs,SiTailwindcss } from "react-icons/si";
import { BiLogoSpringBoot } from "react-icons/bi";
import { DiJavascript1 } from "react-icons/di";
export default function Skills() {
    const skills =[
        {text: "React",
         Icon:  FaReact,     
        },
        {text: "Next.js",
         Icon:  SiNextdotjs,     
        },
        {text: "Java",
         Icon:  FaJava,     
        },
        {text: "Spring",
         Icon:  BiLogoSpringBoot  ,     
        },
        {text: "JavaScript",
         Icon:  DiJavascript1  ,     
        },
        {text: "Tailwind",
         Icon:  SiTailwindcss  ,     
        },
        {text:"Node.js",
         Icon:  FaNodeJs,
        },


    ]
  
    return (
    <div className="max-w-5xl mx-auto px-8">
        <Title 
            text="Skills 💡" 
            className="flex flex-col items-center justify-center -rotate-6"/>

        <HoverEffect items={skills} />
    </div>
    
  )
}
