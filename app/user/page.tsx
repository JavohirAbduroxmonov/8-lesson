import Link from 'next/link'
import React from 'react'
import Navbar from "../../components/header"

const news = () => {
  return (
    <>
    <Navbar/>
    <div className='flex flex-col gap-5 px-20 pt-10'>
      <Link href="user/sardor">
        sardor
      </Link>
      <Link href="user/user2">
        user2
      </Link>
      <Link href="user/user3">
        user3
      </Link>
      <Link href="user/user4">
        user4
      </Link>
    </div>
    </>
  )
}

export default news