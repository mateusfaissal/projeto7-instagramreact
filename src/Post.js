import { useState } from "react"

export default function Post() {

    //let [postSalvo, setPostSalvo] = useState ('none');
    let [postName, setPostName] = useState('bookmark-outline')

    function salvaPost () {
        if (postName === 'bookmark-outline') {
            setPostName('bookmark');
        } else {
            setPostName('bookmark-outline');
        }
    }

    const posts = [
        { usuario: "meowed", fotousuario: "assets/img/meowed.svg", conteudo: "assets/img/gato-telefone.svg", curtida:"assets/img/respondeai.svg", textocurtida:"respondeai" },
        { usuario: "barked", fotousuario: "assets/img/barked.svg", conteudo: "assets/img/dog.svg", curtida:"assets/img/adorable_animals.svg", textocurtida:"adorable_animals" },
        { usuario: "meowed", fotousuario: "assets/img/meowed.svg", conteudo: "assets/img/gato-telefone.svg", curtida:"assets/img/respondeai.svg", textocurtida:"respondeai" },
    ]
    return (

        <div class="posts">

            {posts.map(post =>
            (
                <div className="post">
                    <div className="topo">
                        <div class="usuario">
                            <img src={post.fotousuario} alt={post.usuario} />
                            {post.usuario}
                        </div>
                        <div class="acoes">
                            <ion-icon name="ellipsis-horizontal"></ion-icon>
                        </div>
                    </div>
                    <div class="conteudo">
                        <img src={post.conteudo} alt={post.usuario} />
                    </div>
                    <div class="fundo">
              <div class="acoes">
                <div>
                  <ion-icon name="heart-outline"></ion-icon>
                  <ion-icon name="chatbubble-outline"></ion-icon>
                  <ion-icon name="paper-plane-outline"></ion-icon>
                </div>
                <div>
                  <ion-icon onClick ={salvaPost} name={postName}></ion-icon>
                </div>
                </div>
                <div class="curtidas">
                <img src={post.curtida} alt={post.textocurtida} />
                <div class="texto">
                  Curtido por <strong>{post.textocurtida} </strong> e <strong>outras 101.523 pessoas</strong>
                </div>
              </div>
                </div>
                </div>
            )

            )}
        </div>

    )

}