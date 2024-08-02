import { Footer, Information, Navbar, Product, Send } from "@/components"
import Head from "next/head"

function Misr() {
  return (
    <div>
      <Head>
        <title>Misr Page</title>
      </Head>
        <Navbar/>
        <Information/>
        <Product/>
      <div style={{display:"flex" , alignItems:"center" , justifyContent:"center", marginBottom:"20px"}}><Send/></div>
        <Footer/>
    </div>
  )
}

export default Misr
