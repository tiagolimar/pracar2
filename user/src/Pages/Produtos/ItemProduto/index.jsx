import PropTypes from 'prop-types';
import './style.css'


export const ItemProduto = ({ produto }) => {
    return (
        produto?
        <div className="cartao-produto border-bottom">
            <div className="cartao-produto-info">
                <h2>{produto.nome}</h2>
                <p>{produto.descricao}</p>
                <p>R$ {produto.preco}</p>
            </div>
            <div className="cartao-produto-img">
                <img src={produto.img} alt={produto.nome} className='rounded-4 shadow-sm mb-2'/>
            </div>
        </div>
        :null
    );
};

ItemProduto.propTypes = {
    produto: PropTypes.shape({
        nome: PropTypes.string.isRequired,
        descricao: PropTypes.string.isRequired,
        preco: PropTypes.number.isRequired,
        img: PropTypes.string.isRequired
    }).isRequired
};