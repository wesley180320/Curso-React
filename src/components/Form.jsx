import { useState } from "react";

const Form = () => {
    function cadastrarUsuario(e) {
        //Parar o processamento ao enviar
        e.preventDefault();
        console.log("Nome", name, "Senha", senha);
        console.log("Usuario cadastrado");
    }

    const [name, setName] = useState();
    const [senha, setSenha] = useState();

    return (
        <div>
            <h1> Meu cadastro: </h1>
        
            <form onSubmit={cadastrarUsuario}>
                <div>
                    <label htmlFor="name">Nome:</label>
                    <input
                        type="text"
                        placeholder="Digite seu nome"
                        id="name"
                        onChange={(e) => setName(e.target.value)}
                    />
                </div>

                <div>
                    <label htmlFor="Senha"> Senha </label>
                    <input
                        type={"password"}
                        placeholder="Senha"
                        id="senha"
                        onChange={(e) => setSenha(e.target.value)}
                    />
                </div>

                <div>
                    <input type="submit" value={"Cadastrar"} />
                </div>
            </form>
        </div>
    
    );
};


export default Form;