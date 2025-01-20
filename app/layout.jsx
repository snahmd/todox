import './globals.css'
import { Roboto_Mono } from 'next/font/google'

const roboto_mono = Roboto_Mono({ subsets: ['latin'], weights: [400, 700], style: ['normal', "italic"] })

export const metadata = {
  title: 'Todox App',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={roboto_mono.className}>
       
        {children}
      </body>
    </html>
  )
}
