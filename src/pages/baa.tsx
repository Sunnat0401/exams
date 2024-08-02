import { Footer, Items, List, Navbar, Send } from "@/components"
import Head from "next/head"

function Baa() {
  return (
    <div>
        <Head>
            <title>Baa page</title>
        </Head>
        <Navbar/>
        <List/>
        <Items/>
      <div style={{display:"flex" , alignItems:"center" , justifyContent:"center", marginBottom:"20px"}}><Send/></div>
        <Footer/>
    </div>
  )
}

export default Baa
