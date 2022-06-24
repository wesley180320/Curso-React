import PropTypes  from 'prop-types';

const Item = ({marca, ano_lancamento}) => {
  return (
    <>
      <li>{marca} - {ano_lancamento}</li>
    </>
  );
};

// Definindo regras para as props
Item.propTypes = {

    marca: PropTypes.string,
    ano_lancamento: PropTypes.number,
}

// Para props vazias
Item.defaultProps = {

    marca:'faltou a marca',
    ano_lancamento: 0,

}

export default Item;