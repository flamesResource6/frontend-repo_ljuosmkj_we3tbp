import React from 'react'
import { cn } from '../../lib/utils'

export function Button({ variant = 'primary', className = '', children, ...props }) {
  const base = 'inline-flex items-center justify-center font-semibold transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#C1FF02] disabled:opacity-60 disabled:cursor-not-allowed'
  const styles = {
    primary: 'bg-[#C1FF02] text-black rounded-[12px] shadow-[0_0_14px_rgba(193,255,2,0.45)] hover:shadow-[0_0_22px_rgba(193,255,2,0.6)] hover:translate-y-[-1px] active:translate-y-0',
    secondary: 'bg-transparent text-white rounded-[12px] border border-[#C1FF02] hover:bg-[#0D0D0D] hover:translate-y-[-1px] active:translate-y-0',
    ghost: 'bg-transparent text-white hover:bg-[#0D0D0D] rounded-[12px]'
  }
  return (
    <button className={cn(base, styles[variant], 'px-5 py-3', className)} {...props}>
      {children}
    </button>
  )
}
