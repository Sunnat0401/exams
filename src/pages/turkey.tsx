import { Description, Footer, Info, Navbar, Program, Send } from '@/components'
import Head from 'next/head'
import React from 'react'

const Turkey = () => {
  return (
    <div>
      <Head>
        <title>Turkey Page</title>
      </Head>
      <Navbar />
      <Info />
      <Program />
      <Description/>
      <Program />
      <div style={{display:"flex" , alignItems:"center" , justifyContent:"center", marginBottom:"20px"}}><Send/></div>
     <Footer/>
    </div>
  )
}

export default Turkey
