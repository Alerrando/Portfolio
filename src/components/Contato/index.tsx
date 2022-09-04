import { Titulo } from "../Titulo";

export function Contato(){
    return(
        <footer>
            <Titulo titulo="Contato" />

            <div className="w-full h-auto bg-zinc-900 px-8 py-10 md:px-16">
                <div className="block md:flex">
                    <div className="text-white">
                        <h2 className="font-roboto text-2xl font-bold">Entre em contato</h2>

                        <form className="block w-52 py-6">
                            <label>Digite seu nome</label>
                            <input type="text" placeholder="Digite seu nome..." className="mb-3" />

                            <label>Digite seu email</label>
                            <input type="email" placeholder="Digite seu email..." className="mb-3" />

                            <label>Digite sua mensagem</label>
                            <textarea cols={30} rows={10}></textarea>
                        </form>
                    </div>
                </div>
            </div>
        </footer>
    )
}