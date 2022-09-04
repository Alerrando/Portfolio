import { useState } from "react";
import { Titulo } from "../Titulo";

export function Contato() {
  return (
    <footer>
      <Titulo titulo="Contato" />

      <div className="w-full h-auto bg-zinc-900 px-8 py-10 md:px-16">
        <div className="block md:grid grid-cols-2">
          <div className="w-full h-full">
            <h2 className="font-roboto text-2xl font-bold text-white">Entre em contato</h2>
            <form className="block md:grid md:w-full w-52 py-6">
              <label className="font-times text-xl font-bold text-white" htmlFor="name">
                Digite seu nome
              </label>
              <input
                type="text"
                placeholder="Digite seu nome..."
                name="name"
                className="mb-3 md:w-2/5 px-1 outline-none"
              />

              <label className="font-times text-xl font-bold text-white" htmlFor="email">
                Digite seu email
              </label>
              <input
                type="email"
                placeholder="Digite seu email..."
                name="email"
                className="mb-3 md:w-2/5 px-1 outline-none"
              />

              <label
                className="font-times text-xl font-bold text-white"
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
            </form>

          </div>
          
        </div>
      </div>
    </footer>
  );
}
