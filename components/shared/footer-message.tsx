import React from 'react'

function FooterMessage({ message }: { message: string }) {
  return (
    <div className="absolute bottom-3 left-0 px-4">
      <span className="text-secondary-foreground/70 font-extralight font-inter text-xs md:text-sm">"{message}"</span>
    </div>
  )
}

export default FooterMessage
