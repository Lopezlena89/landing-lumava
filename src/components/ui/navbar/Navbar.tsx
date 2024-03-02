import Image from 'next/image'
import Link from 'next/link'
import { PiInstagramLogoBold, PiLinkSimple, PiMoonFill, PiSunFill } from 'react-icons/pi'

export const Navbar = () => {
  return (
    <>
        <nav 
            className="hidden z-10 w-full h-16 bg-black fixed md:flex justify-between items-center list-none 
            font-sans backdrop-blur-sm bg-black/40 px-10"
        >
            <li className="flex justify-center items-center">
                <Image
                    src="/logo01.webp"
                    width={130}
                    height={130}
                    alt="Lumava Agency"
                    
                />
            </li>
            <li className=" flex items-center justify-evenly lg:justify-end md:text-[13px] lg:text-base w-[80%] text-zinc-500">
                <Link
                    className="pr-3 hover:text-violet-500 hover:duration-300"
                    href='#'
                >
                    Nosotros
                </Link>
                
                <Link
                    className="pr-3 hover:text-violet-500 hover:duration-300"
                    href='#'
                >
                    Portafolio
                </Link>
                
                <Link
                    className="pr-3 hover:text-violet-500 hover:duration-300"
                    href='#'
                >
                    Desarrollo Web
                </Link>
                
                <Link
                    className="pr-3 hover:text-violet-500 hover:duration-300"
                    href='#'
                >
                    Diseño & Branding
                </Link>
                
                <Link
                className='hover:text-violet-500 hover:duration-300'
                    href='#'
                >
                    Paquetes
                </Link>
                
                <div className="flex items-center text-zinc-500 ml-10">
                    <Link
                        href='#'
                    >
                        <PiInstagramLogoBold  className="p-2 cursor-pointer hover:text-violet-500 hover:duration-300" size={40}/>
                    </Link>
                    {/* <Link
                        href='#'
                    >
                        <PiMoonFill  className="cursor-pointer hover:text-violet-500 hover:duration-300" size={25}/>
                    </Link> */}
                    <Link
                        href='#'
                    >
                        <PiSunFill  className="cursor-pointer hover:text-violet-500 hover:duration-300" size={25}/>
                    </Link>

                </div>
            </li>
            
            
        </nav>
    </>
  )
}
