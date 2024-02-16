import Image from 'next/image'
import Link from 'next/link'
import { PiInstagramLogoBold, PiLinkSimple, PiMoonFill, PiSunFill } from 'react-icons/pi'

export const Navbar = () => {
  return (
    <>
        <nav 
            className="w-full h-16 bg-black fixed flex justify-between items-center list-none 
            font-sans backdrop-blur-sm bg-black/20   "
        >
                    <li className="flex justify-center items-center">
                        <Image
                            src="/logo01.png"
                            width={130}
                            height={130}
                            alt="Picture of the author"
                            className="pl-5"
                        />
                    </li>
                    <li className="text-violet-100 ">
                        <Link
                            className="pr-3 hover:text-violet-500 hover:duration-300"
                            href='#'
                        >
                            About
                        </Link>
                        <Link
                            className="pr-3 hover:text-violet-500 hover:duration-300"
                            href='#'
                        >
                            Web design
                        </Link>
                        <Link
                            className="pr-3 hover:text-violet-500 hover:duration-300"
                            href='#'
                        >
                            Design
                        </Link>
                        <Link
                            className="pr-3 hover:text-violet-500 hover:duration-300"
                            href='#'
                        >
                            Portfolio
                        </Link>
                        <Link
                        className='hover:text-violet-500 hover:duration-300'
                            href='#'
                        >
                            Contact
                        </Link>
                    </li>
                    <li className="flex pr-5 items-center text-violet-100">
                        <Link
                            href='#'
                        >
                            <PiInstagramLogoBold  className="p-2 cursor-pointer hover:text-violet-500 hover:duration-300" size={40}/>
                        </Link>
                        <Link
                            href='#'
                        >
                            <PiLinkSimple  className="p-2 cursor-pointer hover:text-violet-500 hover:duration-300" size={40}/>
                        </Link>
                        <Link
                            href='#'
                        >
                            <PiMoonFill  className="cursor-pointer hover:text-violet-500 hover:duration-300" size={25}/>
                        </Link>
                        <Link
                            href='#'
                        >
                            <PiSunFill  className="cursor-pointer hover:text-violet-500 hover:duration-300" size={25}/>
                        </Link>
                        
                        
                        
                    </li>
                    
                </nav>
    </>
  )
}
