import { cn } from '@/lib/utils'
import React, { PropsWithChildren } from 'react'

function GridBackground({ children }: PropsWithChildren) {
  return (
    <div className="relative flex h-full w-full items-center justify-center ">
      <div
        className={cn(
          'absolute inset-0',
          '[background-size:10px_10px]',
          '[background-image:linear-gradient(to_right,#3333331A_1px,transparent_1px),linear-gradient(to_bottom,#3333331A_1px,transparent_1px),linear-gradient(to_right,#3333331A_1px,transparent_1px),linear-gradient(to_bottom,#3333331A_1px,transparent_1px)]',
          '[background-size:10px_10px,10px_10px,200px_200px,200px_200px]',
        )}
      />
      {/* Radial gradient for the container to give a faded look */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-primary [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] dark:bg-black"></div>
      {children}
    </div>
  )
}

export default GridBackground
