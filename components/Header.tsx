"use client"

import Image from "next/image"
import Link from "next/link"

function Header() {
  return (
    <header>
      <Link href="/">
        <Image
          src="https://links.papareact.com/208"
          alt="logo"
          width={150}
          height={150}
          className="object-contain mr-10"
        ></Image>
      </Link>
    </header>
  )
}

export default Header
