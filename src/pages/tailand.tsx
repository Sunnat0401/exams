import { Collections, Footer, Interpretation, Navbar, Send } from '@/components'
import Head from 'next/head'
import React from 'react'

function Tailand() {
  return (
    <div>
      <Head>
        <title>Tailand Page</title>
      </Head>
      <Navbar/>
      <Interpretation/>
      <Collections/>
      <div style={{display:"flex" , alignItems:"center" , justifyContent:"center", marginBottom:"20px"}}><Send/></div>
      <Footer/>
    </div>
  )
}

export default Tailand
