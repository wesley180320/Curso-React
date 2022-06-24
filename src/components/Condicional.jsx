import { useState } from "react";

const Condicional = () => {
  const [email, setEmail] = useState();
  const [userEmail, setUserEmail] = useState();

  function enviarEmail(e) {
    e.preventDefault();

    setUserEmail(email);
    console.log("Email enviado");
  }

  function limparEmail() {
    setUserEmail("");
  }

  return (
    <div>
      <h2> Cadastre o seu email</h2>
      <form action=""></form>
      <input
        type="email"
        placeholder="Digite seu email"
        onChange={(e) => setEmail(e.target.value)}
      />
      <button type="submit" onClick={enviarEmail}>
        Enviar-email
      </button>
      {/* E executado quando o email é preenchido */}
      {userEmail && (
        <div>
          <p> O email do usuário é: {userEmail} </p>

          <button onClick={limparEmail}> Limpar Email</button>
        </div>
      )}
    </div>
  );
};

export default Condicional;
