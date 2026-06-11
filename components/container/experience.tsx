'use client'

import { Calendar, MapPin } from 'lucide-react'
import SectionWrapper from '../shared/wrapper'
import { FadeImg } from '../ui/fade-img'
import { LinkPreview } from '../ui/link-preview'
import ArrowMessage from '../shared/arrow-message'

const experiences = [
  {
    id: 1,
    company: 'SOM Studiuo',
    role: 'Shopify Developer Intern',
    duration: 'Feb 2024 – May 2024',
    location: 'Germany, Berlin - Remote',
    company_url: 'https://somstudios.com/',
    techStack: ['Shopify', 'Liquid', 'JavaScript', 'HTML', 'CSS'],
    highlights: [
      'Built and customized Shopify stores from concept to deployment, creating responsive, user-friendly, and conversion-focused e-commerce experiences.',
      'Developed custom Shopify themes and sections using Liquid, HTML, CSS, and JavaScript, ensuring seamless functionality across desktop and mobile devices.',
      'Integrated third-party applications, payment gateways, and marketing tools while optimizing store performance, SEO, and overall customer experience.',
    ],
    side: 'left',
  },
   {
    id: 2,
    company: 'Technowebs',
    role: 'Full Stack Developer Intern',
        duration: 'Aug 2025 – Nov 2025',
    location: 'Siliguri - Remote',
    company_url: 'https://www.technowebs.in/',
    techStack: ['React', 'Node.js', 'MongoDB', 'JavaScript', 'Git'],
    highlights: [
      'Contributed to the development of custom software solutions and business websites, helping clients strengthen their digital presence.',
      'Designed responsive user interfaces and integrated REST APIs to create scalable and high-performance web applications.',
      'Participated in end-to-end development, including feature implementation, testing, debugging, deployment, and performance optimization.',
    ],
    side: 'right',
  },
  {
    id: 3,
    company: 'Linkrunner.io',
    role: 'Frontend Developer Intern',
    duration: 'Feb 2026 – May 2026',
    location: 'Bangalore - Remote',
    company_url: 'https://linkrunner.io/',
    techStack: ['React', 'TypeScript', 'Tailwind CSS', 'JavaScript', 'Git'],
    highlights: [
      'Developed and maintained responsive frontend interfaces, ensuring a seamless user experience across desktop and mobile platforms.',
      'Built reusable React components and integrated APIs to deliver scalable, high-performance web applications.',
      'Collaborated with designers and developers to implement new features, optimize application performance, and enhance overall usability.',
    ],
    side: 'left',
  },


    {
   id: 4,
    company: 'Thrine Media',
    role: 'Co - Founder',
    duration: 'Feb 2025 – Present',
    location: 'Siliguri, West Bengal',
    company_url: 'https://thrinemedia.com/',
    techStack: ['React', 'Next.js', 'Node.js', 'WordPress', 'AWS'],
    highlights: [
      'Founded Web agency specializing in web development, UI/UX design and SEO for startups and businesses.',
      'Led end-to-end project delivery, managing client acquisition, strategy, design, development, deployment, and ongoing support across multiple industries.',
      'Built and managed a cross-functional team of developers, designers, and marketers while establishing operational processes, sales pipelines, and long-term client relationships.',
      'Delivered custom websites, e-commerce solutions, and business automation systems that improved online presence, lead generation, and customer engagement for clients.',
      'Oversaw company growth, business development, partnerships, and brand positioning while maintaining high standards of product quality and client satisfaction.'
    ],
      side: 'right',
  }
 
]

function Experience() {
  return (
    <SectionWrapper className="relative h-full pt-44 pb-20">
      <div className="relative z-10 flex flex-col items-center justify-center">
        <ArrowMessage
          className="hidden md:flex absolute -top-15 right-1/5 w-80 text-right"
          isMobile
          message="Honestly, even I'm impressed. The server stayed calm the whole time."
          emoji="😎"
        />
        <h3 className="text-[#1C1C1C] items-center text-center font-bricolage-grotesque leading-8 md:leading-12 font-light text-2xl md:text-4xl">
          Built Stuff, Shipped It, <br />
          Didn’t Break Prod. <span className="italic">(surprisingly)</span>
        </h3>
        <FadeImg src="/images/underline.svg" alt="Experience" className="w-[20%] md:w-[10%] mt-3" />
      </div>
      <div className="relative mt-5 md:mt-10 px-5 md:px-0">
        <FadeImg
          className="hidden md:block absolute top-10 left-1/2 -translate-x-1/2 h-full"
          src={'/images/timeline3.svg'}
        />
        <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 h-full flex-col justify-around">
          {experiences.map((exp, index) => (
            <FadeImg
              key={`a-${index}`}
              src={'/images/star.svg'}
              className={`w-10 ${exp.side === 'left' ? 'left-0' : 'right-0'}`}
            />
          ))}
        </div>
        <div className="space-y-16 md:space-y-32 pt-8">
          {experiences.map((exp, index) => (
            <div
              key={exp.id}
              className={`flex items-center ${exp.side === 'left' ? 'md:justify-start' : 'md:justify-end'} relative`}
            >
              <div
                className={`w-full max-w-lg transform transition-all duration-300 cursor-pointer ${
                  exp.side === 'left' ? 'mr-0.5 md:mr-0.5 lg:mr-0.5 xl:mr-0.6' : 'ml-0.5 md:ml-5 lg:ml-5 xl:ml-7'
                }`}
              >
                <div className="relative overflow-hidden">
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex gap-1.5 items-center">
                      <FadeImg src={'/images/diamond.svg'} className="w-6" />
                      <h3 className="text-lg md:text-2xl font-istok-web font-normal text-primary-foreground">
                        "{exp.role}" -{' '}
                        <LinkPreview
                          url={exp.company_url}
                          className="text-base font-istok-web md:text-lg text-primary-foreground"
                        >
                          {exp.company}
                        </LinkPreview>
                      </h3>
                    </div>
                  </div>
                  {/* Duration & Location */}
                  <div className="flex items-center justify-between gap-2 mb-4 text-sm text-gray-600">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      <span className="text-xs md:text-sm">{exp.duration}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="w-4 h-4" />
                      <span className="text-xs md:text-sm">{exp.location}</span>
                    </div>
                  </div>
                  {/* Highlights */}
                  <div className="space-y-2">
                    {exp.highlights.map((highlight, highlightIndex) => (
                      <div key={highlightIndex} className="flex items-start gap-2 text-sm text-gray-700">
                        <div className="w-1.5 h-1.5 bg-primary-foreground rounded-full mt-2 flex-shrink-0"></div>
                        <p className="text-xs md:text-sm">{highlight}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  )
}

export default Experience
