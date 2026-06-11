import React from 'react'
import SectionWrapper from '../shared/wrapper'
import { FadeImg } from '../ui/fade-img'
import FooterMessage from '../shared/footer-message'

function Cooking() {
  return (
    <SectionWrapper className="h-full md:h-screen py-16 px-5">
      <h3 className="text-[#1C1C1C] flex float-start md:float-end leading-8 md:leading-12 font-italiana font-normal text-2xl md:text-4xl underline">
        What I Bring to the Stack <br />
        (Besides Coffee) *
      </h3>

      <div className="w-full flex flex-col md:flex-row justify-between mt-24">
        <div className="w-full md:w-1/2 flex flex-col items-center justify-center  gap-3">
          <span className="font-istok-web  text-xs md:text-sm font-normal">
            <strong className="font-bold">Frontend so clean it shows –</strong> You're literally using it right now.
            From smooth transitions to pixel-perfect layouts, I build UIs that look good and feel fast. Tailwind, React,
            Shadcn, you name it— I make it shine.
          </span>
          <span className="font-istok-web text-xs md:text-sm font-normal">
            <strong className="font-bold">Backend APIs that don’t cry under load –</strong> Whether it’s handling user
            auth, data crunching, or AI workflows, my APIs are rock solid. Add in NGINX + smart scaling, and they’re
            ready for the real world (not just localhost:3000).
          </span>
          <span className="font-istok-web text-xs md:text-sm font-normal">
            <strong className="font-bold">DevOps when needed, no stress –</strong> I set up my own servers, deploy with
            CI/CD, configure reverse proxies, and know when to scale up or shut things down to save cost. Cloud
            services? Been there, configured that.
          </span>
          <span className="font-istok-web text-xs md:text-sm font-normal">
            <strong className="font-bold">Built for users, not for tutorials –</strong> My projects solve real problems
            and are actually used by real people. From mental health tools to AI chatbots, I build, test, ship, and
            maintain—end to end.
          </span>
          
        </div>
        <div className="relative bottom-0 w-full md:w-1/2">
          <FadeImg className="relative scale-75 -right-10 md:right-0" src="/images/cook.svg" alt="cooking" />
        </div>
      </div>
      <FooterMessage message="Keep going—there’s a treasure trove of awesomeness waiting just below! ^_~ 🚀" />
    </SectionWrapper>
  )
}

export default Cooking
