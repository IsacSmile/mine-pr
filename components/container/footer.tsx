import React from 'react'
import SectionWrapper from '../shared/wrapper'
import ArrowMessage from '../shared/arrow-message'
import Link from 'next/link'
import { LINKEDIN_URL, GITHUB_URL, X_URL, RESUME_URL } from '@/constants/urls'

function Footer() {
  return (
    <SectionWrapper className="flex flex-col pt-44 h-full px-5">
      <div className="flex flex-col items-end">
        <h2 className="text-2xl md:text-3xl flex float-end text-right font-normal font-saira-extra-condensed underline">
          Let’s Build Something Amazing Together 🚀
        </h2>
        <ArrowMessage
          className="relative right-0 flex float-end text-left items-baseline-last"
          message="Oh no, the fonts are back at it again —someone call a stylist!"
          emoji="😂"
        />
      </div>
      <div className="max-w-md pt-20 md:mt-0">
        <span className="font-istok-web text-sm md:text-md text-primary-foreground">
          Whether you need a fresh website, a sleek design, or just someone to make you laugh with quirky code jokes,
          I’m here for it. Reach out and let’s create magic!&nbsp;
        </span>
        <Link href="mailto:itsfaizimam@gmail.com?subject=Let's Work together Faiz, You are Awesome!">
          <span className="font-istok-web font-bold">[Contact Me]</span>
        </Link>
      </div>

      <div className="w-full flex flex-row mt-10 gap-5">
        <div className="w-full md:w-1/2">
          <h5 className="font-istok-web text-sm md:text-md font-bold">Find Me Online : </h5>

          <div className="flex flex-col space-y-1 mt-5">
            <p className="font-istok-web text-xs md:text-sm text-primary-foreground">
              <Link target="_blank" href={LINKEDIN_URL} className="font-normal md:font-bold underline">
                LinkedIn
              </Link>{' '}
              <span className="hidden md:inline">: Let’s connect and talk ideas.</span>
            </p>
            <p className="font-istok-web text-xs md:text-sm text-primary-foreground">
              <Link target="_blank" href={GITHUB_URL} className="font-normal md:font-bold underline">
                GitHub
              </Link>{' '}
              <span className="hidden md:inline">: Where all the coding magic happens—step into my nerdy kingdom.</span>
            </p>
            <p className="font-istok-web text-xs md:text-sm text-primary-foreground">
              <Link target="_blank" href={X_URL} className="font-normal md:font-bold underline">
                X
              </Link>{' '}
              <span className="hidden md:inline">: Where I share my code and projects.</span>
            </p>
          </div>
        </div>
        <div className="w-full md:w-1/2">
          <h5 className="font-istok-web text-sm md:text-md font-bold">Quick Links : </h5>

          <div className="flex flex-col space-y-1 mt-5">
            <p className="font-istok-web text-xs md:text-sm text-primary-foreground">
              <Link target="_blank" href={RESUME_URL} className="font-normal md:font-bold underline">
                My Resume
              </Link>{' '}
              <span className="hidden md:inline">: Check out my resume and let’s connect.</span>
            </p>
            <p className="font-istok-web text-xs md:text-sm text-primary-foreground">
              <Link href="/#about-me" className="font-normal md:font-bold underline">
                About Me
              </Link>{' '}
              <span className="hidden md:inline">: Warning: Personality overload ahead. Proceed with curiosity.</span>
            </p>{' '}
            <p className="font-istok-web text-xs md:text-sm text-primary-foreground">
              <Link
                href="mailto:itsfaizimam@gmail.com?subject=Opportunity to Collaborate with Faiz"
                className="font-normal md:font-bold underline"
              >
                Hire Me
              </Link>{' '}
              <span className="hidden md:inline">: Let’s team up and make internet magic happen!</span>
            </p>
          </div>
        </div>
      </div>
      <div className="w-full flex flex-col md:flex-row justify-between item-start md:items-center mt-10 p-0 gap-1.5 md:p-5">
        <span className="font-inter text-xs text-primary-foreground/50 text-extralight ">
          &copy; {new Date().getFullYear()} Faiz All rights reserved.
        </span>
        <span className="text-extralight font-inter text-xs text-left md:text-right text-primary-foreground/50">
          Developed with 🖤 using Next.js, Tailwind CSS, and TypeScript. (Yes, I coded this footer too!)
        </span>
      </div>
    </SectionWrapper>
  )
}

export default Footer
