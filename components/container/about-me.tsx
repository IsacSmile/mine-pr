import React from 'react'
import SectionWrapper from '../shared/wrapper'
import { FadeImg } from '../ui/fade-img'
import FooterMessage from '../shared/footer-message'
import ArrowMessage from '../shared/arrow-message'

function AboutMe() {
  return (
    <SectionWrapper id="about-me" className="h-full md:h-screen py-16 px-5">
      <ArrowMessage
        className="flex items-end text-right md:hidden"
        message="Oh, look at that font strutting — someone’s in a showoff mood!"
        emoji="¬_¬"
        isMobile
      />
      <h3 className="text-[#1C1C1C] font-italiana leading-8 md:leading-12 font-normal text-2xl md:text-4xl underline">
        About Me (Spoiler: I’m Awesome… <br />
        or just awkwardly humble, who knows?)
      </h3>

      <ArrowMessage
        className="hidden md:flex items-center"
        message="Oh, look at that font strutting — someone’s in a showoff mood!"
        emoji="¬_¬"
      />

      <div className="w-full flex flex-col-reverse md:flex-row justify-between mt-20">
        <div className="w-full md:w-1/2 flex justify-start">
          <FadeImg
            className="scale-75 md:scale-100 relative -right-10 md:right-0"
            src="/images/cat.svg"
            alt="About Me"
          />
        </div>
        <div className="w-full md:w-1/2 flex flex-col gap-4">
          <span className="font-inter text-xs md:text-sm font-normal">
            I build web apps that not only work smoothly but make people go “Damn, this is clean.”
          </span>
          <span className="font-inter text-xs md:text-sm font-normal">
            I write code that’s so responsive, it loads faster than your weekend plans fall apart.
          </span>
          <span className="font-inter text-xs md:text-sm font-normal">
            I like to add a bit of personality, good UX, and maybe a nerdy joke here and there—because why build boring
            stuff when you can build something people actually enjoy using?
          </span>
        </div>
      </div>
      <FooterMessage message="Don’t stop now—there’s more magic just a scroll away! ^_~ ✨" />
    </SectionWrapper>
  )
}

export default AboutMe
