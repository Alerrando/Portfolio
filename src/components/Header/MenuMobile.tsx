import { Atom, EnvelopeSimpleOpen, House, ProjectorScreen } from "phosphor-react";
import { useState } from "react";

export function MenuMobile(){
    
    return(
        <div className="w-5/6 h-auto flex items-center justify-between relative">
            <a href="#home" className="p-2 rounded-full hover:bg-[#539DF3] text-menuMobile hover:text-blue-900">
                <House size={26} />
            </a>

            <a href="#projects" className="p-2 rounded-full hover:bg-[#539DF3] text-menuMobile hover:text-blue-900">
                <ProjectorScreen size={26} />
            </a>

            <a href="#knowledge" className="p-2 rounded-full hover:bg-[#539DF3] text-menuMobile hover:text-blue-900">
                <Atom size={26} />
            </a>

            <a href="#contact" className="p-2 rounded-full hover:bg-[#539DF3] text-menuMobile hover:text-blue-900">
                <EnvelopeSimpleOpen size={26} />
            </a>
        </div>
    )
}