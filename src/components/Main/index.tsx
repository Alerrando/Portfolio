import foto from './image/imagem-princ.jpg'

export function Main(){
    return (
        <main className='w-full alinhamento h-[72.5vh] md:h-[91.1vh] bg-image-princ bg-cover'>
            <div className='mx-12 md:mx-20 w-[420px] text-center chegando'>
                <p className='text-[#f8f8ff] text-xl md:text-base font-bold font-playfair'>Olá, meu nome é</p>
                <h1 className='text-[#20b2aa] text-3xl md:text-4xl my-1 font-roboto font-bold'>Alerrando Breno</h1>
                <p className='text-[#f8f8ff] text-xl md:text-base font-bold font-playfair'>e sou</p>
                <h2 className='text-[#ffffe0] text-2xl md:text-2xl mb-3 font-roboto font-bold'>Desenvolvedor Front End</h2>
            </div>
        </main>
    )
}