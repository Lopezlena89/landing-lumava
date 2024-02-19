import { AnimationCard } from "../card/AnimationCard"
import { FiUsers } from "react-icons/fi";


export const Interaccion = () => {
  return (
    <>
        <div className="w-full h-full flex flex-col items-start pt-10 p-5">
        <div className="flex items-center">
        <AnimationCard component = {<FiUsers size={23} className="text-white"/>}/> 
        <h3 className="text-white text-2xl ml-3">Interaccion con cliente</h3>
        </div>
        
        <p className="text-white mt-5">A través de una página web, puedes 
        interactuar con tus clientes potenciales y existentes a través de 
        formularios de contacto, chats en vivo, comentarios en publicaciones y más.
        Esto te permite responder preguntas, resolver problemas y construir 
        relaciones con tus clientes.</p>
    </div>        
    </>
  )
}
