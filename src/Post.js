import { useState } from "react"

export default function Post() {

    let [postLiked, setPostLiked] = useState('none');
    let [heartName, setHeartName] = useState('heart-outline');
    let [postName, setPostName] = useState('bookmark-outline');
    let [numberLikes, setNumberLikes] = useState(Number('101'));
    let [clicado, setClicado] = useState(false);



    function curtePostImg() {
        if (!clicado) {
            setClicado(true)
            setPostLiked('red');
            setHeartName('heart');
            setNumberLikes(numberLikes + 1)
        }

    }

    function curtePost() {
        if (heartName === 'heart-outline') {
            setClicado(true);
            setHeartName('heart');
            setPostLiked('red');
            setNumberLikes(numberLikes + 1)
        } else {
            setClicado(false);
            setHeartName('heart-outline');
            setPostLiked('none');
            setNumberLikes(numberLikes - 1);
        }
    }

    function salvaPost() {
        if (postName === 'bookmark-outline') {
            setPostName('bookmark');
        } else {
            setPostName('bookmark-outline');
        }
    }

    const posts = [
        { usuario: "meowed", fotousuario: "assets/img/meowed.svg", conteudo: "assets/img/gato-telefone.svg", curtida: "assets/img/respondeai.svg", textocurtida: "respondeai" },
        { usuario: "barked", fotousuario: "assets/img/barked.svg", conteudo: "assets/img/dog.svg", curtida: "assets/img/adorable_animals.svg", textocurtida: "adorable_animals" },
        { usuario: "meowed", fotousuario: "assets/img/meowed.svg", conteudo: "assets/img/gato-telefone.svg", curtida: "assets/img/respondeai.svg", textocurtida: "respondeai" },
    ]
    return (

        <div class="posts">

            {posts.map(post =>
            (
                <div className="post" data-test="post">
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
                        <img data-test="post-image" onDoubleClick={curtePostImg} src={post.conteudo} alt={post.usuario} />
                    </div>
                    <div class="fundo">
                        <div class="acoes">
                            <div>
                                <ion-icon data-test="like-post" onClick={curtePost} name={heartName} class={postLiked}></ion-icon>
                                <ion-icon name="chatbubble-outline"></ion-icon>
                                <ion-icon name="paper-plane-outline"></ion-icon>
                            </div>
                            <div>
                                <ion-icon data-test="save-post" onClick={salvaPost} name={postName}></ion-icon>
                            </div>
                        </div>
                        <div class="curtidas">
                            <img src={post.curtida} alt={post.textocurtida} />
                            <div class="texto">
                                Curtido por <strong>{post.textocurtida} </strong> e <strong data-test="likes-number">outras {numberLikes} pessoas</strong>
                            </div>
                        </div>
                    </div>
                </div>
            )

            )}
        </div>

    )

}