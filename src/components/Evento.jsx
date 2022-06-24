import Button from "./evento/Button"

const Evento = () => {
  function meuEvento() {
    console.log("Opa, fui ativado!");
  }


  function segundoEvento (){

    console.log("Segundo evento")

  }

  return (
    <div>
      <p> Clique para disparar um evento: </p>

    
    <Button event={meuEvento} text="Primeiro Evento"/>

    <Button event={segundoEvento} text="Segundo Evento"/>
      {/* <button onClick={meuEvento}> Ativar! </button> */}
    </div>
  );


};

export default Evento;
