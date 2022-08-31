import {
  FacebookLogo,
  List,
  TwitterLogo,
  X,
  YoutubeLogo,
} from "phosphor-react";
import { useState } from "react";
import logo from "./image/favicon.ico";

export function Header() {
  const [menu, setMenu] = useState("hidden");

  function handleMenu(){
    menu == "block" ? setMenu("hidden") : setMenu("block");
  }

  return (
    <header className="w-full bg-princ flex justify-center fixed">
      <div className="w-[92%] alinhamento justify-between py-2">
        <div className="w-[45px] h-[45px]">
          <img src={logo} alt="icone do site" className="w-full h-full cursor-pointer" />
        </div>

        <nav className={`absolute h-screen w-48 top-0 right-0 md:relative md:h-full md:flex md:w-auto transition-all ${menu}`}>
          <div className="w-full h-full grid grid-rows-sidebar bg-[#2e3238] md:bg-transparent md:flex">
            <header className="alinhamento justify-end mr-4 cursor-pointer md:hidden">
              <X size={32} className="text-white" weight="bold" onClick={() => handleMenu()} />
            </header>

            <main className="h-52 flex mx-auto mt-8 mb-20 md:items-center md:m-0 md:h-full">
              <ul className=" block md:flex md:gap-6 text-white">
                <li className="mb-6 hover:text-red-500 transition-colors text-xl md:mb-0">
                  <a href="#">Projetos</a>
                </li>
                <li className="mb-6 hover:text-red-500 transition-colors text-xl md:mb-0">
                  <a href="#">Sobre</a>
                </li>
                <li className="mb-6 hover:text-red-500 transition-colors text-xl md:mb-0">
                  <a href="#">Contato</a>
                </li>
              </ul>
            </main>

            <footer className="w-full md:hidden">
              <div className="alinhamento justify-around">
                <div className="w-10 h-10 rounded-full">
                  <FacebookLogo
                    className="h-[80%] w-[80%] text-white cursor-pointer transition-colors hover:text-[#1877F2]"
                    weight="bold"
                  />
                </div>

                <div className="w-10 h-10 rounded-full">
                  <YoutubeLogo
                    className="h-[80%] w-[80%] text-white cursor-pointer transition-colors hover:text-[#FF0000]"
                    weight="bold"
                  />
                </div>

                <div className="w-10 h-10 rounded-full">
                  <TwitterLogo
                    className="h-[80%] w-[80%] text-white cursor-pointer transition-colors hover:text-[#1A8CD8]"
                    weight="bold"
                  />
                </div>
              </div>
            </footer>
          </div>
        </nav>
        <List className="block cursor-pointer text-white md:hidden" size={32} weight="bold" onClick={() => handleMenu()} />
      </div>
    </header>
  );
}
