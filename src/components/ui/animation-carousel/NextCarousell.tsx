import { FaReact,FaDocker,FaHtml5,FaNodeJs,FaGitAlt } from "react-icons/fa";
import  { IoLogoCss3,IoLogoJavascript } from "react-icons/io5";
import { TbBrandNextjs } from "react-icons/tb";
import { SiTypescript,SiMongodb,SiPrisma,SiExpress,SiTailwindcss,SiAdobephotoshop} from "react-icons/si";
import { FaGithub } from "react-icons/fa6";
import { GrMysql } from "react-icons/gr";
import { BiLogoPostgresql } from "react-icons/bi";

export const NextCarousell = () => {
  return (
    <>
        <div className="slide">
                    <FaReact size={30} className="text-blue-700 "/>
                </div>
                <div className="slide">
                    <SiTypescript size={30} className="text-blue-700 "/>
                </div>
                <div className="slide">
                    <TbBrandNextjs size={30} className="text-white "/>
                </div>
                <div className="slide">
                    <FaNodeJs size={30} className="text-green-600 "/>
                </div>
                <div className="slide">
                    <SiMongodb size={30} className="text-green-600 "/>
                </div>
                <div className="slide">
                    <FaDocker size={30} className="text-blue-600 "/>
                </div>
                <div className="slide">
                    <SiPrisma size={30} className="text-white "/>
                </div>
                <div className="slide">
                    <SiExpress size={30} className="text-white"/>
                </div>
                <div className="slide">
                    <BiLogoPostgresql size={30} className="text-blue-500"/>
                </div>
                <div className="slide">
                    <GrMysql size={30} className="text-blue-700"/>
                </div>
                <div className="slide">
                    <FaHtml5 size={30} className="text-red-600"/>
                </div>
                <div className="slide">
                    <IoLogoCss3 size={30} className="text-blue-700"/>
                </div>
                <div className="slide">
                    <IoLogoJavascript size={30} className="text-yellow-400"/>
                </div>
                <div className="slide">
                    <SiTailwindcss size={30} className="text-blue-500"/>
                </div>
                <div className="slide">
                    <FaGitAlt size={30} className="text-red-500"/>
                </div>
                <div className="slide">
                    <FaGithub size={30} className="text-white"/>
                </div>
                <div className="slide">
                    <SiAdobephotoshop size={30} className="text-blue-500"/>
                </div>
    </>
  )
}
