import Footer from '@/components/container/footer'
import Work from '@/components/container/work'
import GridBackground from '@/components/shared/grid-background'
import Header from '@/components/shared/header'
import React from 'react'

function page() {
  return (
    <main>
      <GridBackground>
        <div className="w-full md:w-[80%] border border-t-0 border-b-0 border-l border-r border-border mx-auto">
          <Header />
          <Footer />
        </div>
      </GridBackground>
    </main>
  )
}

export default page
