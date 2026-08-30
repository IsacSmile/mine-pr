'use client'
import { AnimatePresence, motion } from 'motion/react'
import { encode } from 'qss'
function ProjectPreview({ url, staticImage, className }: { url: string; staticImage?: string; className?: string }) {
  let src
  const params = encode({
    url,
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
    <div className={className}>
      <AnimatePresence>
        {
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.6 }}
            animate={{
              opacity: 1,
              y: 0,
              scale: 1,
              transition: {
                type: 'spring',
                stiffness: 260,
                damping: 20,
              },
            }}
            exit={{ opacity: 0, y: 20, scale: 0.6 }}
            className="shadow-none rounded-none"
          >
            <a
              target="_blank"
              href={url}
              className="block p-1 bg-none border-2 border-[#313131]/30 border-dashed rounded-none"
              style={{
                fontSize: 0,
              }}
            >
              <img
                src={staticImage ? staticImage : src}
                className="rounded-none w-full max-h-150"
                alt="preview image"
              />
            </a>
          </motion.div>
        }
      </AnimatePresence>
    </div>
  )
}

export default ProjectPreview
