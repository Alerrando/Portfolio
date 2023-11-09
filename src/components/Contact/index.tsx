import {
  DeviceMobileCamera,
  Envelope,
  FacebookLogo,
  TwitterLogo,
  YoutubeLogo,
} from "phosphor-react";
import { Title } from "../Title";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "react-toastify";
import axios from "axios";

const schemaData = z.object({
  name: z.string().nullable("Nome obrigatorio"),
  email: z.string().email().nullable("Email obrigatorio"),
  description: z.string().nullable("Descrição obrigatorio"),
})

type SchemaDataType = z.infer<typeof schemaData>

export function Contact() {
  const { register, handleSubmit, formState: { disabled, errors } } = useForm<SchemaDataType>({
    resolver: zodResolver(schemaData),
  });

  return (
    <footer className="bg-zinc-900 px-2 py-10 md:px-16 flex flex-col gap-6">
      <Title title="Contato" />
      <a id="contato"></a>
      <div className="w-full h-auto">
        <div className="block md:grid grid-cols-2">
          <div className="w-full h-full border-b-[1px] md:border-r-[1px] border-zinc-600">
            <h2 className="font-roboto text-xl md:text-2xl font-bold text-white">
              Entre em contato
            </h2>
            <form className="block md:grid md:w-full w-11/12 py-6" onSubmit={handleSubmit(submit)}>
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
                className="mb-3 w-full md:w-2/5 py-1 px-2 outline-none rounded-md"
                { ...register("name") }
              />
              { errors.name && <span className="text-red-500 pt-2">{errors.name.message}</span> }

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
                className="mb-3 w-full md:w-2/5 py-1 px-2 outline-none rounded-md"
                { ...register("email") }
              />
              { errors.email && <span className="text-red-500 pt-2">{errors.email.message}</span> }

              <label
                className="font-times text-lg font-semibold text-white"
                htmlFor="mensagem"
              >
                Digite sua mensagem
              </label>
              <textarea
                cols={30}
                rows={8}
                className="md:w-3/5 px-2 py-1 outline-none resize-none rounded-md"
                name="mensagen"
                { ...register("description") }
              ></textarea>
              { errors.description && <span className="text-red-500 pt-2">{errors.description.message}</span> }


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
          <span>Alerrando © 2023</span>
          <span>Obrigado por acessar</span>
        </div>
      </div>
    </footer>
  );

    async function submit(e){
      const aux = await axios.post("https://formspree.io/f/mleyvvga", e)
        .then((res) => res.data)
        .catch((err) => console.log(err))

      if(aux.ok){
        toast.success("Mensagem enviada com sucesso!", {
          position: "bottom-left",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          });
      }
      else{
        toast.error("Erro ao enviar mensagem!", {
          position: "bottom-left",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      }
    }
}
