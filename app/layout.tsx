import type { Metadata } from 'next'
import {
  Splash,
  Inter,
  Italiana,
  Comic_Neue,
  Istok_Web,
  Major_Mono_Display,
  Saira_Extra_Condensed,
  Bricolage_Grotesque,
} from 'next/font/google'
import './globals.css'

export const metadata: Metadata = {
  title: "Faiz Imam's Portfolio",
  description: "Faiz Imam's Portfolio",
}

const splash = Splash({
  variable: '--font-splash',
  subsets: ['latin'],
  weight: ['400'],
})

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
})

const italiana = Italiana({
  variable: '--font-italiana',
  subsets: ['latin'],
  weight: ['400'],
})

const comicNeue = Comic_Neue({
  variable: '--font-comic-neue',
  subsets: ['latin'],
  weight: ['400', '700'],
})

const istokWeb = Istok_Web({
  variable: '--font-istok-web',
  subsets: ['latin'],
  weight: ['400', '700'],
})

const majorMonoDisplay = Major_Mono_Display({
  variable: '--font-major-mono-display',
  subsets: ['latin'],
  weight: ['400'],
})

const sairaExtraCondensed = Saira_Extra_Condensed({
  variable: '--font-saira-extra-condensed',
  subsets: ['latin'],
  weight: ['400', '700'],
})

const bricolageGrotesque = Bricolage_Grotesque({
  variable: '--font-bricolage-grotesque',
  subsets: ['latin'],
  weight: ['200', '300', '400', '500', '600', '700', '800'],
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${splash.variable} ${italiana.variable} ${comicNeue.variable} ${istokWeb.variable} ${majorMonoDisplay.variable} ${sairaExtraCondensed.variable} ${bricolageGrotesque.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  )
}
