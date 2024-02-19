import { HiArrowsPointingOut } from "react-icons/hi2";
import { AnimationCard } from "../card/AnimationCard";


export const MarketingPromocion = () => {
  return (
    <>
        <div className="w-full h-full flex flex-col items-start pt-10 p-5">
            <div className="flex items-center">
            <AnimationCard component = {<HiArrowsPointingOut size={23} className="text-white"/>}/> 
            <h3 className="text-white text-2xl ml-3">Marketing y Promocion</h3>
            </div>
            
            <p className="text-white mt-5">Una página web te brinda la oportunidad 
            de promocionar tus productos, servicios o ideas de manera efectiva. 
            Puedes utilizar estrategias de marketing digital como el SEO, el 
            marketing de contenidos y las redes sociales para llegar a tu audiencia 
            objetivo.</p>
        </div> 
    </>
  )
}
