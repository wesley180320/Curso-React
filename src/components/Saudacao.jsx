const Saudacao = ({ name }) => {
  
    function gerarSaudacao(algumNome){

        return `olá, ${ algumNome}, td bem? `

    }  
    return (
    <div>
      {name && <p> {gerarSaudacao(name)} </p>}
    </div>
  );
};

export default Saudacao;
