export default function Story() {

    const stories = [
        { usuario: "9gag", imagem: "assets/img/9gag.svg" },
        { usuario: "9gag", imagem: "assets/img/9gag.svg" },
        { usuario: "9gag", imagem: "assets/img/9gag.svg" },
        { usuario: "9gag", imagem: "assets/img/9gag.svg" },
        { usuario: "9gag", imagem: "assets/img/9gag.svg" },
        { usuario: "9gag", imagem: "assets/img/9gag.svg" },
        { usuario: "9gag", imagem: "assets/img/9gag.svg" },
        { usuario: "9gag", imagem: "assets/img/9gag.svg" },

    ];
    return (
       
        <div>
            {stories.map(story =>
            (
                <div className="story">
                    <div class="imagem">
                        <img src={story.imagem} alt="9gag" />
                    </div>
                    <div class="usuario">
                        {story}
                    </div>
                </div>
            )

            )}
        </div>
        
    )
};