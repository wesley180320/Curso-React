import Item from "./Item";

const List = () => {
  return (
    <>
      <h1> Minha Lista</h1>
      <ul>
        <Item marca= "ferrari"  ano_lancamento={2012} />
        <Item marca = "Renault" ano_lancamento={2014}/>
      </ul>
    </>
  );
};

export default List;
