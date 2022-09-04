import { Titulo } from "../Titulo";

export function Contato(){
    return(
        <footer>
            <Titulo titulo="Contato" />

            <div className="w-full h-auto bg-zinc-900 px-8 py-10 md:px-16">
                <div className="block md:flex">
                    <div className="text-white">
                        <h2 className="font-roboto text-2xl font-bold">Entre em contato</h2>
                    </div>
                </div>
            </div>
        </footer>
    )
}