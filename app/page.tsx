import AboutMe from '@/components/container/about-me'
import Cooking from '@/components/container/cooking'
import Experience from '@/components/container/experience'
import Footer from '@/components/container/footer'
import Hero from '@/components/container/hero'
import Skills from '@/components/container/skills'
import Work from '@/components/container/work'
import GridBackground from '@/components/shared/grid-background'
import Header from '@/components/shared/header'

export default function Home() {
  return (
    <main>
      <GridBackground>
        <div className="w-full md:w-[80%] border border-t-0 border-b-0 border-l border-r border-border mx-auto">
          <Header />
          <Hero />
          <AboutMe />
          <Cooking />
          <Skills />
          <Work />
          <Experience />
          <Footer />
        </div>
      </GridBackground>
    </main>
  )
}
