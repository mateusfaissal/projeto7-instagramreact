import { useState } from "react"

export default function User() {

        let [nome, setNome] = useState ('catanacomics')
        let [imagem, setImagem] = useState ('assets/img/catanacomics.svg')

        function editaImagem() {
            let novaImagem = prompt('Insira o link da sua nova imagem');

            if(novaImagem) {
                setImagem(novaImagem);
            } else {
                alert('Imagem inválida, tente novamente');
            }
        }

        function editaNome() {
            let novoNome = prompt('Edite seu nome!');
            if (novoNome) {
                setNome(novoNome);
            } else {
                alert('Nome inválido, tente novamente');
            }
            
        }

    

    return (
        <div className="usuario">
          <img onClick={editaImagem} src={imagem} alt="imagem de perfil" />
          <div className="texto">
            <span>
              <strong>{nome}</strong>
              <ion-icon onClick={editaNome} name="pencil"></ion-icon>
            </span>
          </div>
        </div>
    )

}