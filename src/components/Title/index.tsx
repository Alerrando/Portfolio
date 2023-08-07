
type TitleProps = {
    title: string
}

export function Title({ title }: TitleProps) {
    return (
        <div className="w-full h-auto alinhamento justify-start font-bold font-roboto text-4xl text-white">
            { title }
        </div>
    )
}