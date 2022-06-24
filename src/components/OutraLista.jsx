function OutraLista({ itens }) {
  return (
    <>
      <h3>Lista de coisas boas:</h3>

      {/* If, else verifica se algo e verdadeiro */}
      { itens.length > 0 ?(  itens.map((item, index) => ( 
        <p key={index}>{item}</p>
      ))): (
          <p> Não há itens na Lista </p>
      )}
    </>
  );
}

export default OutraLista;
