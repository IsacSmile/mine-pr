import { cn } from '@/lib/utils'

const SectionWrapper = ({
  children,
  className,
  id,
}: {
  children: React.ReactNode
  className?: string
  id?: string
}) => {
  return (
    <div id={id} className={cn('h-screen relative z-20', className)}>
      {children}
    </div>
  )
}

export default SectionWrapper
