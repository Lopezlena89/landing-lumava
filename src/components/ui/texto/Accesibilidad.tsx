import { AnimationCard } from "../card/AnimationCard"
import { BsUniversalAccessCircle } from "react-icons/bs";


export const Accesibilidad = () => {
  return (
    <>
         <div className="w-full h-full flex flex-col items-start pt-10 p-5">
            <div className="flex items-center">
            <AnimationCard component = {<BsUniversalAccessCircle size={23} className="text-white"/>}/> 
            <h3 className="text-white text-2xl ml-3">Accesibilidad</h3>
            </div>
            
            <p className="text-white mt-5">Una página web proporciona un punto
             de acceso constante a la información sobre tu negocio o proyecto. 
             Está disponible las 24 horas del día, los 7 días de la semana, 
             lo que permite que las personas obtengan información incluso fuera 
             del horario comercial.</p>
        </div>        
    </>
  )
}
