import Link from 'next/link'
import React from 'react'

function Header() {
  return (
    <header className="relative z-20 py-4 md:py-8 px-4 border-b border-border">
      <div className="flex justify-between">
        <div className="gap-4 hidden md:flex">
          <Link
            className="font-inter  border-b !border-[#333333] pb-[1px] text-primary-foreground font-extralight leading-relaxed"
            href="/#about-me"
          >
            About Me **
          </Link>
          <Link
            className="font-inter border-b !border-[#333333] pb-[1px] text-primary-foreground font-extralight"
            href="/#my-work"
          >
            My Work **
          </Link>
        </div>

        <div className="flex justify-between">
          <Link
            className="font-inter !border-[#333333] border-b pb-[1px] text-primary-foreground font-bold md:font-extralight"
            href="mailto:itsfaizimam@gmail.com?subject=Let's Work together Faiz, You are Awesome!"
          >
            Let's Work{' '}
          </Link>
        </div>
      </div>
    </header>
  )
}

export default Header
