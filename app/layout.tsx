import type { Metadata } from 'next'
import { Plus_Jakarta_Sans } from 'next/font/google'
import './globals.css'

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-plus-jakarta',
})

export const metadata: Metadata = {
  title: 'DO Clinical | Precision Healthcare Placement',
  description:
    'A boutique partner for healthcare facilities and credentialed professionals. We focus on quality matches, not volume.',
  openGraph: {
    title: 'DO Clinical | Precision Healthcare Placement',
    description:
      'A boutique partner for healthcare facilities and credentialed professionals. We focus on quality matches, not volume.',
    url: 'https://doclinical.com',
    siteName: 'DO Clinical',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'DO Clinical | Precision Healthcare Placement',
    description:
      'A boutique partner for healthcare facilities and credentialed professionals. We focus on quality matches, not volume.',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={plusJakarta.variable}>
      <body className="font-sans bg-white text-slate-900 selection:bg-blue-100 selection:text-blue-900">
        {children}
      </body>
    </html>
  )
}
