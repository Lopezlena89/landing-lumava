'use client'
import { useRef } from 'react';
import { Navbar } from "@/components/ui/Navbar";

import { AnimationCarousel } from "@/components/ui/animation-carousel/AnimationCarousel";
import { AnimationCard } from "@/components/ui/card/AnimationCard";
import { useScroll,motion, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { CardShine } from './card-shine/CardShine';

export const PagePrincipal = () => {

    const ref = useRef<HTMLDivElement>(null)
    
    const {scrollYProgress} = useScroll({
        target:ref,
        offset:["0 1","1.33 1"]
    });
    const scaleProgress = useTransform(scrollYProgress,[0,0.6],[0.7,1]);
    const opacityProgress = useTransform(scrollYProgress,[0,1],[0.6,1]);

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
                        <Image alt="ipadpro" src={"/ipadpro.png" } width={900} height={600} />
                    </div>
                </div>
                <div className="w-full h-[170px] bg-black flex justify-center shadow-inner shadow-purple-400">
                    <AnimationCarousel/>
                </div>
                <motion.div
                    ref={ref} 
                    className="w-full h-[1400px] bg-black mb-3 sm:mb-8 last:mb-0"
                    style={{
                        scale:scaleProgress,
                        opacity:opacityProgress
                    }}
                >
                    {/* TITULO */}
                    <div className="w-full h-[400px] bg-black flex flex-col justify-center items-center">
                        <h2 className=" text-8xl bg-gradient-to-r from-blue-700   to-blue-400
                                text-transparent bg-clip-text">El futuro es hoy,</h2>
                        <p className="text-white text-8xl">oiste viejo </p>
                    </div>
                    {/* Tarjetas */}
                    <div className="w-full  h-[1000px] bg-[url('/glow-lines.png')] bg-cover bg-no-repeat flex justify-center items-center">
                        <CardShine/>
                        <AnimationCard/>

                        
                    </div>
                </motion.div>
            </div>
                
               
            
        </>
    )
}
