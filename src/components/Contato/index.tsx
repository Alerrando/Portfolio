import {
  DeviceMobileCamera,
  Envelope,
  FacebookLogo,
  TwitterLogo,
  YoutubeLogo,
} from "phosphor-react";
import { Titulo } from "../Title";

export function Contato() {
  return (
    <footer>
      <Titulo titulo="Contato" />
      <a id="contato"></a>
      <div className="w-full h-auto bg-zinc-900 px-8 py-10 md:px-16">
        <div className="block md:grid grid-cols-2">
          <div className="w-full h-full border-b-[1px] md:border-r-[1px] border-zinc-600">
            <h2 className="font-roboto text-2xl font-bold text-white">
              Entre em contato
            </h2>
            <form className="block md:grid md:w-full w-52 py-6">
              <label
                className="font-times text-lg font-semibold text-white"
                htmlFor="name"
              >
                Digite seu nome
              </label>
              <input
                type="text"
                placeholder="Digite seu nome..."
                name="name"
                className="mb-3 md:w-2/5 px-1 outline-none"
              />

              <label
                className="font-times text-lg font-semibold text-white"
                htmlFor="email"
              >
                Digite seu email
              </label>
              <input
                type="email"
                placeholder="Digite seu email..."
                name="email"
                className="mb-3 md:w-2/5 px-1 outline-none"
              />

              <label
                className="font-times text-lg font-semibold text-white"
                htmlFor="mensagem"
              >
                Digite sua mensagem
              </label>
              <textarea
                cols={30}
                rows={8}
                className="md:w-3/5 px-1 outline-none resize-none"
                name="mensagen"
              ></textarea>

              <button className="bg-[#26BBA5] w-32 py-2 mt-8 rounded-full text-white opacity-80 hover:opacity-100">
                Enviar
              </button>
            </form>
          </div>
          <div className="pt-4 md:px-8 md:pt-0 border-b-[1px] border-zinc-600">
            <h2 className="font-roboto text-2xl font-bold text-white">
              Formas de contato
            </h2>

            <div className="grid gap-6 mt-8 text-white">
              <div className="flex gap-4">
                <Envelope size={28} weight="bold" />
                <span>alerrando2@gmail.com</span>
              </div>

              <div className="flex gap-4">
                <DeviceMobileCamera size={28} weight="bold" />
                <span>(18)99823-3887</span>
              </div>
            </div>

            <div className="alinhamento md:grid mt-16 mb-6 gap-7">
              <FacebookLogo size={38} weight="bold" className="cursor-pointer text-[#1877F2]" />
              <YoutubeLogo size={38} weight="bold" className="cursor-pointer text-[#FF0000]" />
              <TwitterLogo size={38} weight="bold" className="cursor-pointer text-[#1A8CD8]" />
            </div>
          </div>
        </div>

        <div className="grid gap-6 mt-4 md:flex md:items-center md:gap-8 text-xl text-white">
          <span>Alerrando © 2022</span>
          <span>Obrigado por acessar</span>
        </div>
      </div>
    </footer>
  );
}
