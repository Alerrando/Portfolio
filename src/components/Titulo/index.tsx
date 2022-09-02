
type TituloProps = {
    titulo:string
}

export function Titulo(props:TituloProps){
    return (
        <div className="alinhamento justify-center w-full h-12 font-bold font-roboto text-2xl text-white bg-[#26BBA5]">
            {props.titulo}
        </div>
    )
}