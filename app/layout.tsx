import './globals.css'
import { Inter, DM_Sans } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })
const dmSans = DM_Sans({ 
  subsets: ['latin'],
  weight: ['400', '500', '700']
})

export const metadata = {
  title: 'Your Name - Portfolio',
  description: 'Personal portfolio showcasing experience and projects',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={dmSans.className}>{children}</body>
    </html>
  )
}

