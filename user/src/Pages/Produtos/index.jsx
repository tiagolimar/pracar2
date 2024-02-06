import img_bolo from '../../assets/bolo-mole.png';
import './style.css'

const ItemProduto = ({ produto }) => {
    return (
        <div className="cartao-produto d-flex flex-column mt-2">
            <img src={produto.img} alt={produto.nome} className='rounded-4 shadow-sm mb-2'/>
            <header className='d-flex justify-content-between gap-2'>
                <h2>{produto.nome}</h2>
                <p>R$ {produto.preco.toFixed(2)}</p>
            </header>
            <p>{produto.descricao}</p>
        </div>
    );
};

export const Produtos = () => {
    const listaProdutos = [...Array(12)].map((id) => ({
        id: parseInt(`213${id}`),
        nome: "Bolo mole",
        descricao: "Uma fatia de bolo mole de aproximadamente  150g",
        categoria: "Bolo e Tapioca",
        preco: 4.5,
        img: img_bolo,
    }));

    return (
        <div className="produtos row  row-cols-sm-2 row-cols-md-4 row-cols-lg-6">
            {listaProdutos.map((produto, id) => (
                <ItemProduto key={id} produto={produto} />
            ))}
        </div>
    );
};
