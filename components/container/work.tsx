import React from 'react'
import SectionWrapper from '../shared/wrapper'
import ArrowMessage from '../shared/arrow-message'
import { FadeImg } from '../ui/fade-img'
import FooterMessage from '../shared/footer-message'
import { cn } from '@/lib/utils'
import Link from 'next/link'
import { encode } from 'qss'

function Work() {
  return (
    <SectionWrapper id="my-work" className="py-5 md:py-16 px-5 h-full">
      <h3 className="text-[#1C1C1C] flex leading-8 md:leading-12 font-major-mono-display font-normal text-2xl md:text-4xl underline pt-36">
        Featured Work <br /> (AKA My Greatest <br /> Hits)*
      </h3>

      <ArrowMessage
        className="w-80 text-left"
        message="Whoa, did the font just go undercover? I can't read this spy code!"
        extra={
          <>
            Just read it! <br /> This font needs a translator!
          </>
        }
        extraTextClassName="flex float-end text-right"
        emoji="😂"
      />
      <WorkCard
        image="/images/work-1.svg"
        heading="Fit With Khansa – Wellness Coach"
        projectUrl="https://fitwithkhansa.com/"
        staticImage="/images/fitwithkhansa.png"
        description="Helping busy individuals lose weight, build healthy habits, and regain confidence through personalized nutrition coaching and ongoing support. 🌿💚"
      />
      <WorkCard
        image="/images/work-2.svg"
        heading="Sky Drops Technology"
        projectUrl="https://skydropstechnologies.com/"
        description="A modern SaaS platform that helps businesses manage subscriptions, automate billing, track renewals, and streamline customer lifecycle management—all from a single dashboard. 💳📈"
        staticImage="/images/skydroptech.png"
        className="flex-row-reverse"
      />
      <WorkCard
        image="/images/work-3.svg"
        heading="Thrinemedia – A Web + Video Agency"
        projectUrl="https://thrinemedia.com/"
        staticImage="/images/thrine.png"
        description="Helping brands scale with high-performance websites, engaging video content, and data-driven digital solutions. 🌐🎥"
      />
      <WorkCard
        image="/images/work-2.svg"
        heading="AKS Home – Co-Living & Property Rentals"
        projectUrl="https://aks-home.vercel.app/"
        staticImage="/images/aks-home.png"
        description="A sleek property management and co-living platform based in the UAE, designed for working professionals seeking seamless room enquiries, tenant trust verification, and hassle-free rental experiences. 🏠✨"
        className="flex-row-reverse"
      />
      <WorkCard
        image="/images/work-1.svg"
        heading="Brightshade Consultancy – Enterprise Business Solutions"
        projectUrl="https://bright-shade.vercel.app/"
        staticImage="/images/bright-shade.png"
        description="An interactive business consultancy portal based in Ernakulam, Kerala — featuring direct service CMS, real-time enquiry tracking, and comprehensive legal compliance tools for growing enterprises. 💼📊"
      />
      <WorkCard
        image="/images/work-3.svg"
        heading="My Homely Cakes – Custom Artisanal Bakery"
        projectUrl="https://www.myhomelycakes.com/"
        staticImage="/images/my-homely-caker.png"
        description="A full end-to-end online bakery platform based in Trivandrum, Kerala — offering custom cake ordering, real-time admin order management, and handcrafted dessert selections. 🎂🍰"
        className="flex-row-reverse"
      />
      <WorkCard
        image="/images/work-1.svg"
        heading="Travel Halt – Immersive Travel & Tour Experiences"
        projectUrl="https://www.travelandhalt.com/"
        staticImage="/images/travle-halt.png"
        description="A full end-to-end travel platform based in Sikkim — featuring interactive seat selection, custom trip itineraries, destination guides, theme-based tour packages, and dynamic booking enquiries. ✈️🌴"
      />
      <FooterMessage message="Take the leap, scroll a bit, and discover where ideas come to life! ^_~ ✨" />
    </SectionWrapper>
  )
}

function WorkCard(props: {
  image: string
  heading: string
  description: string
  className?: string
  projectUrl: string
  staticImage?: string
}) {
  return (
    <div className={` w-full flex justify-between mt-24 gap-10 md:gap-20 ${props.className}`}>
      <div className="hidden md:flex w-full md:w-1/3 flex-col items-center justify-center  gap-3">
        <FadeImg src={props.image} alt="Work" />
      </div>
      <div className="w-full md:w-2/3 flex flex-col gap-3">
        <h3 className="text-xl md:text-3xl font-istok-web font-normal text-primary-foreground">"{props.heading}"</h3>
        <p className="font-istok-web text-xs md:text-lg font-normal text-primary-foreground">{props.description}</p>
        <div className="group">
          {/* <FadeImg
            src="/images/project-preview.svg"
            alt="underline"
            className=""
          /> */}
          <div
            style={{ borderWidth: '3px' }}
            className="hidden md:flex justify-center items-center group-hover:hidden transition-all duration-700 w-full md:h-100 h-50 border bg-[#D7D7D7] border-border/20 border-dashed"
          >
            <p className="text-center font-istok-web text-xl font-light text-primary-foreground/30">
              hover to see the preview
            </p>
          </div>
          <ProjectPreview
            projectUrl={props.projectUrl}
            className="block md:hidden group-hover:block transition-all duration-700"
            staticImage={props.staticImage}
            url={props.projectUrl}
          />
        </div>
      </div>
    </div>
  )
}

const ProjectPreview = (props: { staticImage?: string; className?: string; projectUrl: string; url: string }) => {
  let src
  const params = encode({
    url: props.url,
    screenshot: true,
    meta: false,
    embed: 'screenshot.url',
    colorScheme: 'dark',
    'viewport.isMobile': true,
    'viewport.deviceScaleFactor': 1,
    'viewport.width': 300 * 3,
    'viewport.height': 200 * 3,
    'screenshot.waitFor': 5000,
  })
  src = `https://api.microlink.io/?${params}`
  return (
    <Link href={props.projectUrl} target="_blank">
      <div
        className={cn(
          'overflow-hidden cursor-pointer rounded-xl h-full md:h-100 border bg-background',
          props.className,
        )}
      >
        <div className="p-2 bg-slate-100 border-b">
          <div className="flex items-center gap-2">
            <div className="h-3 w-3 rounded-full bg-red-500"></div>
            <div className="h-3 w-3 rounded-full bg-yellow-500"></div>
            <div className="h-3 w-3 rounded-full bg-green-500"></div>
          </div>
        </div>
        <FadeImg
          src={props.staticImage ? props.staticImage : src}
          alt="Analytics Dashboard"
          className="w-full object-cover"
        />
      </div>
    </Link>
  )
}

export default Work
