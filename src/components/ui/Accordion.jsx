import * as React from 'react'
import { ChevronDown } from 'lucide-react'

export function Accordion({ items }) {
  const [openIndex, setOpenIndex] = React.useState(null)
  return (
    <div className="divide-y divide-[#141414] border border-[#141414] rounded-[16px] bg-black">
      {items.map((item, i) => {
        const open = openIndex === i
        return (
          <div key={i} className="group">
            <button
              onClick={() => setOpenIndex(open ? null : i)}
              className="w-full flex items-center justify-between text-left px-6 py-5 text-white"
            >
              <span className="text-base font-semibold">{item.question}</span>
              <ChevronDown
                className={`h-5 w-5 transition-transform ${open ? 'rotate-180 text-[#C1FF02]' : ''}`}
              />
            </button>
            <div
              className={`overflow-hidden transition-[max-height,border-color] duration-300 ${
                open ? 'max-h-64 border-t border-[#C1FF02]' : 'max-h-0 border-t border-transparent'
              }`}
            >
              <div className="px-6 py-5 text-white/80 text-sm">
                {item.answer}
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}
