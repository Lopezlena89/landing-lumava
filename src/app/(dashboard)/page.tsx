import Image from "next/image";
import Link from "next/link";
import { Navbar } from "@/components/ui/navbar/Navbar";
import { PresenciaLinea,
    Accesibilidad,
    MarketingPromocion,
    Credibilidad,
    Interaccion,
    VentaLinea ,
} from "@/components/ui/texto";
import { CardShine } from "@/components/ui/card-shine/CardShine";
import { NavbarMovil } from "@/components/ui/navbar/NavbarMovil";


export default async function HomePage() {
    return(
        <>
            <main >
                <Navbar/>
                <NavbarMovil/>
                <section className="principal w-full h-[900px] flex flex-col overflow-hidden ">
                    <div className="w-full h-[350px] flex flex-col items-center justify-center  md:mt-20 ">
                        <div 
                            className="text-white font-sans font-semibold text-5xl animation-title mt-10"
                        >
                            <h1 className="text-center text-7xl flex flex-col"> 
                                    <span>Bienvenidos a</span>
                                    <span className="text" >Lumava</span>
                            </h1>
                        </div>
                        <div 
                            className="text-white font-sans font-semibold text-xl mt-20 animation-title-dos"
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
                    <div className="w-full h-[900px] flex justify-center items-center animation-imagen mt-10  ">
                        <Image alt="ipadpro" src={"/ipadpro.webp" }  width={900} height={600} style={{width:'auto',height:'auto'}} className="imagen" />
                    </div>
                </section>
                <section
                    className="w-full h-[1400px] bg-black"   
                >
                    
                    <h2 className="w-full h-[300px] bg-black flex flex-col justify-center items-center">
                        <p className=" text-6xl bg-gradient-to-r from-blue-700   to-blue-400
                                text-transparent bg-clip-text">El futuro es hoy</p>
                    </h2>
                    
                    <section  className="w-full h-auto grid grid-cold md:grid-cols-3 bg-[url('/glow-lines.webp')] bg-cover bg-no-repeat relative ">
                        
                            <div className='w-full h-full p-5 '>
                                <CardShine component={<PresenciaLinea/>}/>
                            </div>
                            <div className='w-full full p-5'>
                                <CardShine component={<Accesibilidad/>}/>
                            </div>
                            
                        
                        
                            <div className='w-full h-full p-5'>
                                <CardShine component ={<MarketingPromocion/>}/>
                            </div>
                            <div className='w-full h-full p-5'>
                                <CardShine component={<Credibilidad/>}/>
                            </div>
                      
                            <div className='w-full h-full p-5'>
                                <CardShine component={<Interaccion/>}/>
                            </div>
                            <div className='w-full h-full p-5'>
                                <CardShine component={<VentaLinea/>}/>
                            </div>

                    </section>
                </section>
                
            </main>
        </>

    )
  
}