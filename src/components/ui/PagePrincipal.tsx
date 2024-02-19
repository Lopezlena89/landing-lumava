

import Image from "next/image";
import Link from "next/link";
import { Navbar } from "@/components/ui/Navbar";
import { AnimationCarousel } from "@/components/ui/animation-carousel/AnimationCarousel";
import { CardShine } from './card-shine/CardShine';
import { PresenciaLinea } from './texto/PresenciaLinea';
import { Accesibilidad } from "./texto/Accesibilidad";
import { MarketingPromocion } from "./texto/MarketingPromocion";
import { Credibilidad } from "./texto/Credibilidad";
import { Interaccion } from "./texto/Interaccion";
import { VentaLinea } from "./texto/VentaLinea";

export const PagePrincipal = () => {

   
    return(
        <>
            
            <div>
                <Navbar/>
                <div className="principal w-full h-[900px] flex flex-col overflow-hidden ">
                    <div className="w-full h-[350px] flex flex-col items-center justify-center  mt-20 ">
                        <div 
                            className="text-white font-sans font-semibold text-5xl animation-title mt-10"
                        >
                        <h1 className="text-center text-7xl"> 
                                <span className="bg-gradient-to-r from-purple-700 via-pink-500  to-orange-500
                                text-transparent bg-clip-text"> Bienvenidos a Lumava </span>
                            
                            </h1>
                            <p className="text-center mt-3">
                                creando sitios web
                                        
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
                            bg-cyan-500 mt-5 hover:bg-cyan-300 animation-button"
                        >
                            Contact Sales
                        </Link>
                        
                    </div>
                    <div className="w-full h-[900px] flex justify-center items-center animation-imagen mt-10 ">
                        <Image alt="ipadpro" src={"/ipadpro.png" }  width={900} height={600} style={{width:'auto',height:'auto'}} />
                    </div>
                </div>
                <div className="w-full h-[150px] bg-black flex justify-center shadow-inner shadow-purple-400">
                    <AnimationCarousel/>
                </div>
                <div
                   
                    className="w-full h-[1400px] bg-black"
                    
                >
                    {/* TITULO */}
                    <div className="w-full h-[300px] bg-black flex flex-col justify-center items-center">
                        <h2 className=" text-6xl bg-gradient-to-r from-blue-700   to-blue-400
                                text-transparent bg-clip-text">El futuro es hoy,</h2>
                        <p className="text-white text-6xl opacity-0 duration-1000 hover:opacity-100 ">oiste viejo </p>
                    </div>
                    {/* Tarjetas */}
                    <div className="w-full h-[1000px] bg-[url('/glow-lines.png')] bg-cover bg-no-repeat flex  justify-center items-center">
                        <div className='w-1/3 h-full flex flex-col items-center relative'>
                            <div className='w-11/12 h-[400px]  absolute top-0 '>
                                <CardShine component={<PresenciaLinea/>}/>
                            </div>
                            <div className='w-11/12 h-[400px]  absolute bottom-36 '>
                                <CardShine component={<Accesibilidad/>}/>
                            </div>
                            
                        </div>
                        <div className='w-1/3 h-full flex flex-col items-center relative  '>
                            <div className='w-11/12 h-[400px] absolute top-32 '>
                                <CardShine component ={<MarketingPromocion/>}/>
                            </div>
                            <div className='w-11/12 h-[400px] absolute bottom-10 '>
                                <CardShine component={<Credibilidad/>}/>
                            </div>
                        </div>
                        <div className='w-1/3 h-full flex flex-col items-center relative'>
                            <div className='w-11/12 h-[400px]  absolute top-0 '>
                                <CardShine component={<Interaccion/>}/>
                            </div>
                            <div className='w-11/12 h-[400px]  absolute bottom-36 '>
                                <CardShine component={<VentaLinea/>}/>
                            </div>
                            
                        </div>
                        

                        
                    </div>
                </div>
            </div>
                
               
            
        </>
    )
}
