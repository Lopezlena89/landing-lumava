
import { Navbar } from "@/components/ui/Navbar";
import Image from "next/image";

import Link from "next/link";

export default async function HomePage() {

    return(
        <>
            <div className="w-full h-screen bg-black ">
                <Navbar/>
                <div className="principal w-full h-[900px] flex flex-col overflow-hidden ">
                    <div className="w-full h-[350px] flex flex-col items-center justify-center  mt-20">
                        <div 
                            className="text-white font-sans font-semibold text-5xl animation-title"
                        >
                           <p className="text-center"> 
                                <span className="bg-gradient-to-r from-blue-800  to-blue-400
                                        text-transparent bg-clip-text ">Bienvenidos </span> 
                                
                                
                                  
                            a  <span className="bg-gradient-to-r from-pink-600  to-violet-600
                                                text-transparent bg-clip-text">LUMAVA </span> 
                                
                            </p>
                            <p className="text-center mt-3">
                                        creador de <span className="bg-gradient-to-r from-orange-400  to-red-600
                                        text-transparent bg-clip-text">sitios web </span> 
                                         
                            </p>
                        </div>
                        <div 
                            className="text-white font-sans font-semibold text-xl mt-5 animation-title-dos"
                        >
                            <p className="text-center">Empodérate con nuestros servicios exclusivos </p>
                           <p className="text-center"> y convierte tus deseos en adquisiciones</p>
                        </div>
                        <Link 
                            href='#' 
                            className="text-white w-40 h-10 flex justify-center items-center rounded-md
                            bg-cyan-500 mt-5 active:bg-cyan-300 animation-button"
                        >
                            Contact Sales
                        </Link>
                        
                    </div>
                    <div className="w-full h-[900px] bg-im flex justify-center items-center animation-imagen mt-10">
                        <Image alt="ipadpro" src={"/ipadpro.png" } width={900} height={600}/>
                    </div>
                </div>
               
                <div className="w-full h-[1500px] bg-black">

                </div>
            </div>
        </>
    )
}