const Pessoa = ({name, idade, profissao}) => {
  return (
    <div>
      <h2> Name: {name}</h2>
      <p> Idade: {idade}</p>
      <p> Profissão {profissao}</p>
    </div>
  );
};

export default Pessoa;
