import { Collection, Footer, Lists, Navbar, Send } from "@/components"
import Head from "next/head"

function Yevro() {
  return (
    <div>
      <Head>
        <title>Yevro Page</title>
      </Head>
      <Navbar/>
      <Lists/>
      <Collection/>
      <div style={{display:"flex" , alignItems:"center" , justifyContent:"center", marginBottom:"20px"}}><Send/></div>
      <Footer/>
    </div>
  )
}

export default Yevro
