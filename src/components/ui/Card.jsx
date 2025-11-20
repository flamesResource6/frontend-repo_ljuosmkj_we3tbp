import React from 'react'
import { cn } from '../../lib/utils'

export function DarkCard({ className = '', children }) {
  return (
    <div className={cn(
      'bg-[#0D0D0D] text-white rounded-[16px] border border-[#141414] relative overflow-hidden',
      'transition-transform duration-200 hover:-translate-y-0.5',
      className
    )}>
      {/* micro accent */}
      <div className="absolute top-0 left-0 h-1 w-16 bg-[#FC18E9]" />
      {children}
    </div>
  )
}
