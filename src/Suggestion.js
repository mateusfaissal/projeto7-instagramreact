export default function Suggestion() {

    const sugestoes = [
        { imagem: "assets/img/bad.vibes.memes.svg", nome: "bad.vibes.memes" },
        { imagem: "assets/img/chibirdart.svg", nome: "chibirdart" },
        { imagem: "assets/img/razoesparaacreditar.svg", nome: "razoesparaacreditar" },
        { imagem: "assets/img/adorable_animals.svg", nome: "adorable_animals" },

    ]

    return (
        <div className="sugestoes">

            {sugestoes.map(sugestao =>
            (
                <div className="sugestao">
                    <div className="usuario">
                        <img src={sugestao.imagem} alt={sugestao.nome} />
                        <div className="texto">
                            <div className="nome">{sugestao.nome}</div>
                            <div className="razao">Segue você</div>
                        </div>
                        <div class="seguir">Seguir</div>
                    </div>
                </div>
            ))}

        </div>
    )
}