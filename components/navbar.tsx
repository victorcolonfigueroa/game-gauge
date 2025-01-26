import Link from 'next/link'
import React from 'react'

export const Navbar = () => {
  return (
   <nav className="w-full flex justify-center border-b border-b-foreground/10 h-16">
                <div className="w-full max-w-5xl flex justify-between items-center p-3 px-5 text-sm">
                  <div className="flex gap-5 items-center font-semibold">
                    <Link href={"/"}>Volleyball Stats Tracker</Link>
                    
                  </div>
                  <div className="flex gap-5 items-center font-semibold">
                    <Link href={"/"}>Home</Link>
                    <Link href={"/users"}>Users</Link>
                    <Link href={"/players"}>Players</Link>
                  </div>

                </div>
              </nav>
  )
}

