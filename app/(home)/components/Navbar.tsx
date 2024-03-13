import { cn } from '@/lib/utils';
import Link from 'next/link';
import React from 'react'
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
export default function Navbar({className}:{className?:string}) {
    const socials = [
        {
            Link: "https://www.linkedin.com/in/arnab-roy-25b21b193/",
            label: "Linkedin",
            Icon: FaLinkedin,
        },
        {
            Link: "https://github.com/arnabroy2000",
            label: "Github",
            Icon: FaGithub,
        },
    ]
 
 
    return (
    <nav className={cn(" py-10 flex justify-between items-center",className)}>
        <h1 className="text-2xl font-bold underline underline-offset-8 decoration-green-500 -rotate-2">
            Arnab Roy 🧑🏻‍💻
        </h1>
        <div className="flex items-center gap-5">
            {socials.map((social,index)=> {
                const Icon =social.Icon

                return (
                    <Link   href={social.Link}
                            key={index}
                            aria-label={social.label}>
                        <Icon className="w-5 h-5 hover:scale-125 transition-all" />
                    </Link>
                )
}           )}
        </div>
    </nav>
  )
}
