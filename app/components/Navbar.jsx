import Link from 'next/link'
import React from 'react'
import Image from 'next/image'
import logo from './todox.png'

export default function Navbar() {
  return (
         <nav>
            <Image src={logo} alt="todox" width={100}  placeholder='blur' />
            <Link href="/">Dashboard</Link>
            <Link href="/todos">Yapilacaklar</Link>
        </nav>
  )
}
