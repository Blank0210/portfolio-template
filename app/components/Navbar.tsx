import Link from 'next/link'
import React from 'react'

interface NavItem {
  title: string
  link: string
}

const inputs: NavItem[] = [
  {
    title: "[h] home",
    link: "/home",
  },
  {
    title: "[w] works",
    link: "/works",
  },
]

const Navbar = () => {
  return (
    <nav className="flex w-full items-start tracking-wide justify-start gap-8 text-sm">
      {inputs.map((item) => (
        <Link
          key={item.link}
          href={item.link}
          className="text-neutral-300 hover:text-emerald-600 transition-colors duration-300"
        >
          {item.title}
        </Link>
      ))}
    </nav>
  )
}

export default Navbar
