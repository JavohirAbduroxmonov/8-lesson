"use client"
import React from 'react'
import { useParams } from 'next/navigation'
import Navbar from "../../../components/header"
import Link from 'next/link'  
import { useRouter } from 'next/navigation'


const page = () => {
  const {user} = useParams()
  console.log(user);

  const router = useRouter()

  return (
    <>
    <Navbar/>
    <section>
      <div className='px-20 pt-10'>
        <div className='pb-10'>
          <button className='btn border px-3 py-1' onClick={()=>router.back()}>Back</button>
        </div> 
        <p className='text-red-700 text-[32px]'>{user}</p>
      </div>
    </section>
    </>
  )
}

export default page