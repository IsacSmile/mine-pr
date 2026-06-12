import React from 'react'
import SectionWrapper from '../shared/wrapper'
import { FadeImg } from '../ui/fade-img'

function Skills() {
  return (
    <SectionWrapper className="h-screen flex flex-col justify-between py-16 px-5">
      <h3 className="text-[#1C1C1C] font-italiana leading-8 md:leading-12 font-normal text-2xl md:text-4xl underline">
        -- My Digital Toolbox
      </h3>
      <div className="w-full flex flex-col md:flex-row justify-between mt-24">
        <div className="w-full md:w-1/2 flex flex-col items-center justify-center gap-3"></div>
        <div className="w-full md:w-1/2 flex flex-col gap-3">
          <ul className="list-disc space-y-1">
            <li className="font-istok-web text-xs md:text-sm">
              <span className="font-bold">Frontend:</span> React.js, Next.js, JavaScript, TypeScript, Tailwind, Shadcn
            </li>
            <li className="font-istok-web text-xs md:text-sm">
              <span className="font-bold">Backend:</span> Node.js, Express, MongoDB, REST APIs, Auth (JWT, Clerk)
            </li>
            <li className="font-istok-web text-xs md:text-sm">
              <span className="font-bold">AI / GenAI:</span> OpenAI, Langchain
            </li>
            <li className="font-istok-web text-xs md:text-sm">
              <span className="font-bold">Tools:</span> Git, VS Code, Postman, Vercel, Render, Cursor Ai
            </li>
            <li className="font-istok-web text-xs md:text-sm">
              <span className="font-bold">Bonus Stack:</span> Framer, EJS, Mongoose, Docker, Nginx, CI/CD (learning
              phase)
            </li>
          </ul>
        </div>
      </div>
      <FadeImg className="relative bottom-0" src="/images/skill.svg" alt="skills" />
    </SectionWrapper>
  )
}

export default Skills
