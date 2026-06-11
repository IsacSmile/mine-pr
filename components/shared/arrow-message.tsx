import React from 'react'
import { FadeImg } from '../ui/fade-img'
import { cn } from '@/lib/utils'

function ArrowMessage({
  message,
  emoji,
  extra,
  className,
  extraTextClassName,
  isMobile,
}: {
  message: string
  emoji?: string
  extra?: React.ReactNode
  className?: string
  extraTextClassName?: string
  isMobile?: boolean
}) {
  return (
    <div
      className={cn('flex flex-col gap-4 items-center justify-center w-64 text-secondary-foreground mt-10', className)}
    >
      {!isMobile && <FadeImg src="/images/arrow.svg" alt="About Me" className="w-8 opacity-85" />}
      <span
        className={`text-secondary-foreground/70 underline font-comic-neue text-center font-normal text-sm opacity-85 ${className}`}
      >
        "{message}"{emoji && ` ${emoji}`}
      </span>
      {extra && (
        <span
          className={`text-secondary-foreground/70 underline mt-3 font-comic-neue text-center font-normal text-sm opacity-85 ${extraTextClassName}`}
        >
          "{extra}" {emoji && ` ${emoji}`}
        </span>
      )}
      {isMobile && <FadeImg src="/images/down-arrow.svg" alt="About Me" className="w-8 opacity-85" />}
    </div>
  )
}

export default ArrowMessage
