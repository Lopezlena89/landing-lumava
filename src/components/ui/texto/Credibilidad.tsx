import { FiGitMerge } from "react-icons/fi";
import { AnimationCard } from '../card/AnimationCard'

export const Credibilidad = () => {
  return (
    <>
         <div className="w-full h-full flex flex-col items-start pt-10 p-5">
            <div className="flex items-center">
            <AnimationCard component = {<FiGitMerge size={23} className="text-white"/>}/> 
            <h3 className="text-white text-2xl ml-3">Credibilidad</h3>
            </div>
            
            <p className="text-white mt-5">Una página web bien diseñada y 
            actualizada transmite profesionalismo y confianza. Muchos consumidores
            consideran que las empresas que tienen una presencia en línea son más 
            confiables y legítimas.</p>
        </div>        
    </>
  )
}
