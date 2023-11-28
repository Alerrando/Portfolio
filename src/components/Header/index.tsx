import {
  FacebookLogo,
  List,
  TwitterLogo,
  X,
  YoutubeLogo,
} from "phosphor-react";
import React, { useState } from "react";
import { MenuMobile } from "./MenuMobile";

export function Header() {

  return (
    <header className="w-full bg-[#2e3238] md:bg-zinc-900 fixed z-20">
      <div className="w-[88%] hidden md:flex md:items-center md:justify-between py-2 px-4">
        <div className="w-full"></div>

        <nav className="relative h-16 w-auto top-0 right-0 flex transition-all z-10">
          <div className="w-full h-full grid grid-rows-sidebar md:bg-transparent md:flex">

            <ul className="flex flex-row items-center justify-center gap-9 text-white">
              <li className="hover:text-red-500 transition-colors text-lg">
                <a href="#home">Home</a>
              </li>
              <li className="hover:text-red-500 transition-colors text-lg">
                <a href="#projects">Projetos</a>
              </li>
              <li className="hover:text-red-500 transition-colors text-lg">
                <a href="#knowledge">Conhecimentos</a>
              </li>
              <li className="hover:text-red-500 transition-colors text-lg">
                <a href="#contact">Contato</a>
              </li>
            </ul>
          </div>
        </nav>
        <List className="block cursor-pointer text-white md:hidden" size={32} weight="bold" />
      </div>

      <div className="w-full h-auto flex items-center justify-center py-3 bg-[#1D1F24] fixed bottom-0 md:hidden">
        <MenuMobile />
      </div>
    </header>
  );
}
