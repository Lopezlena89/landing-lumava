import { AnimationCard } from "../card/AnimationCard"
import { TbWorldWww } from "react-icons/tb";
export const PresenciaLinea = () => {
  return (
    <>
        <div className="w-full h-full flex flex-col items-start pt-10 p-5">
            <div className="flex items-center">
            <AnimationCard component = {<TbWorldWww size={23} className="text-white"/>}/> 
            <h3 className="text-white text-2xl ml-3">Presencia en linea</h3>
            </div>
            
            <p className="text-white mt-5">En un mundo donde la mayoría de las personas buscan información en 
            Internet, tener una página web es fundamental para que tu negocio, proyecto 
            o marca personal sea visible y accesible para un público más amplio.</p>
        </div>
    </>
  )
}
