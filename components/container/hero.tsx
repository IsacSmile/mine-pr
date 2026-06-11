import React from 'react'
import { FadeImg } from '../ui/fade-img'
import Link from 'next/link'
import { RESUME_URL } from '@/constants/urls'
import FooterMessage from '../shared/footer-message'
import SectionWrapper from '../shared/wrapper'

function Hero() {
  return (
    <SectionWrapper id="hero" className="!relative flex flex-col items-center justify-center">
      <FadeImg
        src="/images/hello.svg"
        alt="Hero"
        className="absolute top-[20%] left-1/2 -translate-x-1/2 scale-50 md:scale-75 -translate-y-14"
      />
      <h1 className="text-[5rem] md:text-[10rem] font-medium font-splash -translate-y-14 md:-translate-y-0">
        I'm Faiz
      </h1>
      <div className="w-full md:w-3/5 float-end flex flex-col md:flex-row gap-3.5 md:gap-5 items-center-safe">
        <div className="px-5">
          <span className="text-primary-foreground font-inter text-md font-medium border-b border-[#333333] pb-[1px]">
            This Portfolio?*
          </span>
          <p className="text-xs md:text-sm text-primary-foreground mt-4 font-istok-web">
            It’s kind of like me: straightforward, charming, and packed with personality—if you hang around long enough,
            you might even catch a joke or two! ^_~ 🎉
          </p>
        </div>
        <div className="px-5 md:p-0">
          <p className="text-xs md:text-sm text-primary-foreground font-istok-web">
            Hi, I’m Faiz Imam I let my code do the talking—and it’s got some solid stories to tell. As a full-stack
            developer, I obsess over clean logic, smooth user flows, and building things that actually work (and scale).
            Let’s build something cool together, shall we?
          </p>
        </div>
      </div>
      <div className="absolute bottom-28 -right-10 md:right-10 -translate-x-1/2 md:-translate-x-0 text-right">
        <Link
          href={RESUME_URL}
          target="_blank"
          className="text-sm md:text-md text-primary-foreground text-right font-inter font-semibold text-md border-b border-[#333333] pb-[1px]"
        >
          "Need a resume that <br /> dazzles?
        </Link>
      </div>
      <FooterMessage message="Keep those fingers busy and scroll down—there’s more awesomeness waiting! ^_~ 🚀" />
    </SectionWrapper>
  )
}

export default Hero
