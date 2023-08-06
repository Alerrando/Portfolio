import { Atom, EnvelopeSimpleOpen, House, ProjectorScreen } from "phosphor-react";
import { useState } from "react";

export function MenuMobile(){

    return(
        <div className="w-5/6 h-auto flex items-center justify-between relative">
            <div className="p-2 rounded-full hover:bg-[#539DF3] text-menuMobile hover:text-blue-900">
                <House size={26} />
            </div>

            <div className="p-2 rounded-full hover:bg-[#539DF3] text-menuMobile hover:text-blue-900">
                <ProjectorScreen size={26} />
            </div>

            <div className="p-2 rounded-full hover:bg-[#539DF3] text-menuMobile hover:text-blue-900">
                <Atom size={26} />
            </div>

            <div className="p-2 rounded-full hover:bg-[#539DF3] text-menuMobile hover:text-blue-900">
                <EnvelopeSimpleOpen size={26} />
            </div>
        </div>
    )
}