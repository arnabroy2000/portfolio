import React from 'react'
import { SiChakraui ,SiTailwindcss,SiRedis} from "react-icons/si";
import { TbBrandNextjs } from "react-icons/tb";
import Title from './Title';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import { DirectionAwareHover } from '@/components/ui/direction-aware-hover';
export default function Project() {
    const project =[
        {
            title:"Whatsapp-Web Clone",
            tech:[SiChakraui, SiTailwindcss,TbBrandNextjs],
            link: "https://github.com/arnabroy2000/WhatsApp-Web-Clone-Using-Chakra",
            cover:"/whatsapp-Web.png",
            background:"bg-indigo-500"
        },
        {
            title:"Analytic Dashboard",
            tech:[SiTailwindcss,TbBrandNextjs,SiRedis],
            link: "https://github.com/arnabroy2000/analytics-dashboard",
            cover:"/analytic-dashboard.png",
            background:"bg-green-500"
        },

    ]
  
    return (
    <div className="py-10 p-5 sm:p-0">
        <Title 
            text="Projects 🚀" 
            className="flex flex-col items-center justify-center rotate-6"/>

        <div className="grid grid-cols-1 sm:grid-cols-2 pt-20 gap-5 ">
            {project.map((project, index)=> {
                return <Link href={project.link} key={index}>
                    <div className={cn("p-5 rounded-md",project.background)}>
                        <DirectionAwareHover imageUrl={project.cover} className="w-full space-y-5 cursor-pointer">
                           <div className="space-y-5">
                            <h1 className="text-2xl font-bold">{project.title}</h1>
                                <div className="flex items-center gap-5">
                                    {project.tech.map((Icon,index)=>{
                                        return <Icon className="w-8 h-8" key={index}/>
                                    })}
                                </div>
                           </div>
                        </DirectionAwareHover>
                    </div>
                </Link>
            })}
        </div>
    </div>
  )
}
