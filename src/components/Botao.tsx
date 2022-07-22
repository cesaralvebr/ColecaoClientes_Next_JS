interface BotaoProps{
    cor?: 'green' | 'blue' | 'gray'
    className?:string
    children:any
    onClick?: () => void
}
export default function Botao({children, className, cor, onClick}:BotaoProps){
    const corSelecionada = cor ?? 'gray'
    return (
        <button onClick={onClick} className={`
        bg-gradient-to-r from-${cor}-400 to-${cor}-700 text-white
        p-1 m-1 rounded-md text-right
        ${className}`}>
            {children}
        </button>
    )
}