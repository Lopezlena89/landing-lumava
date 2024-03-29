import Image from "next/image";
import Link from "next/link";
import { Navbar } from "@/components/ui/navbar/Navbar";
import { NavbarMovil } from "@/components/ui/navbar/NavbarMovil";
import SvgComponent from "@/components/svg/ImageSvg1";
import SvgComponent3 from "@/components/svg/ImageSVG3";


export default async function HomePage() {
   
    
    return(
        <>
            <main >
                <Navbar/>
                <NavbarMovil/>
                <SvgComponent />
                <SvgComponent3/>
                <section className="principal w-full h-full  flex flex-col  overflow-hidden ">
                    <div className="w-full h-full relative">
                        <div className="w-full h-[500px]  flex flex-col items-center justify-center  ">
                            <div 
                                className="text-purple-200 font-sans font-semibold text-5xl animation-title"
                            >
                                <h1 className="text-center text-5xl md:text-7xl flex flex-col"> 
                                        <span >Bienvenidos a</span>
                                        <span className="bg-gradient-to-r from-white via-purple-400  to-blue-400
                                    text-transparent bg-clip-text" >Lumava</span>
                                </h1>
                            </div>
                            <div 
                                className="text-purple-200 font-sans font-semibold text-xl mt-5 animation-title-dos"
                            >
                                <p className="text-center">Empodérate con nuestros servicios exclusivos </p>
                                <p className="text-center"> y convierte tus deseos en adquisiciones</p>
                            </div>
                            <Link 
                                href="#"
                                className="text-black w-40 h-10 flex justify-center items-center rounded-md   
                                mt-5 animation-button backdrop-blur-sm  bg-cyan-400 "
                            >
                                Portafolio
                            </Link>
                        </div>  
                        <div className="w-full h-[200px] md:h-[300px]  flex justify-center items-center animation-imagen relative ">
                            <Image 
                                alt="ipadpro" 
                                src={"/ipadpro.webp" }  
                                width={700} 
                                height={700} 
                                className="imagen absolute sm:-bottom-72 md:-bottom-[55%]  "  />
                        </div>       
                    </div>
                    
                </section>
                <section
                    className="w-full h-[1000px] bg-black"   
                >
                    
                    <h2 className="w-full h-[300px] bg-black flex flex-col justify-center items-center">
                        <p className=" text-6xl bg-gradient-to-r from-blue-700   to-blue-400
                                text-transparent bg-clip-text">El futuro es hoy</p>
                    </h2>
                    
                    
                </section>
                
            </main>
        </>

    )
  
}