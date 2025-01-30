'use client'

import { useState } from 'react'
import Image from 'next/image'

interface CardProps {
  logo: string
  title: string
  company: string
  period: string
  description: string
  link: string
}

export default function Card({ logo, title, company, period, description, link }: CardProps) {
  const [isExpanded, setIsExpanded] = useState(false)

  return (
    <div 
      className="card-bg rounded-xl p-4 transition-all duration-300 shadow-md hover:-translate-y-0.5 hover:scale-[1.04] hover:shadow-md cursor-pointer"
      onClick={() => setIsExpanded(!isExpanded)}
    >
      <div className="flex items-center gap-4">
        <div className="flex-shrink-0">
          <Image 
            src={logo} 
            alt={`${company} logo`} 
            width={40} 
            height={40} 
            className="rounded-lg"
          />
        </div>
        <div className="flex-grow">
          <h3 className="text-[#333] text-sm font-medium">
            {title} <span className="text-gray-600 font-normal">@ {company}</span>
          </h3>
        </div>
        <div className="flex-shrink-0">
          <p className="text-xs text-black-500">{period}</p>
        </div>
      </div>
      {isExpanded && (
        <div className="mt-4 pl-14">
          <p className="text-sm text-gray-600 mb-2">{description}</p>
          <a 
            href={link} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-xs text-[#063970] hover:underline"
            onClick={(e) => e.stopPropagation()}
          >
            Learn more
          </a>
        </div>
      )}
    </div>
  )
}

