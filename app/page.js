import Image from "next/image";
import Header1 from "./components/Header1";
import Header2 from "./components/Header2";
import Header3 from "./components/Header3";
import banner1 from "@/public/image/banner1.jpg"
 import banner2 from "@/public/image/banner2.jpg"
import Link from "next/link";
import Header4 from "./components/Header4";
import Footer from "./components/Footer";

 export const metadata = {
  title: 'Best Online Hotel Booking Site For Sanitized Stay.',
 
 }

function Home() {
  return (
    <div>
       {/* <Head>
        <title>
           Best Online Hotel Booking Site For Sanitized Stay.
        </title>
      </Head> */}
      <Header1/>
      <Header2/>
      <Header3/>
      <div className="mx-20">
        <div className=" my-14">
          <Image
            src={banner1}
            alt="banner1"
            
            className=" h-80 w-full"
          />
        </div>
        <div className="mb-14">
          <Image
            src={banner2}
            alt="banner1"
            
            className=" h-40 w-full"
          />
        </div>
        <Header4 />
      </div>
      <Footer />
    </div>
  )
}

export default Home;