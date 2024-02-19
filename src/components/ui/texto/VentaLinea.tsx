import { AnimationCard } from "../card/AnimationCard"
import { FiWifi } from "react-icons/fi";


export const VentaLinea = () => {
  return (
    <>
        <div className="w-full h-full flex flex-col items-start pt-10 p-5">
            <div className="flex items-center">
            <AnimationCard component = {<FiWifi size={23} className="text-white"/>}/> 
            <h3 className="text-white text-2xl ml-3">Venta en linea</h3>
            </div>
            
            <p className="text-white mt-5">Si vendes productos o servicios, 
            una página web te proporciona una plataforma para realizar ventas en 
            línea, lo que puede ampliar tu alcance más allá de tu ubicación física 
            y llegar a clientes en todo el mundo.</p>
        </div>        
    </>
  )
}
