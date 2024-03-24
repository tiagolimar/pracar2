import Image from "next/image";

export default function ItemProduto({ produto }) {

    return (
        <div className="col gap-2 bg-white shadow-sm border border-black rounded p-2">
            <div className="d-flex gap-2">
                <img
                    width={100}
                    src={produto.url_img}
                    alt="imagem do produto"
                />
                <div>
                    <h4>{produto.nome}</h4>
                    <p className="fs-6">{produto.descricao}</p>
                </div>
            </div>
            <div className="d-flex justify-content-between">
                <div className="d-flex gap-2 align-items-center">
                    <label htmlFor="">Incluir</label>
                    <input type="checkbox" />
                </div>
                <h4>
                    {(+produto.preco.replace(",", ".")).toLocaleString(
                        "pt-BR",
                        { style: "currency", currency: "BRL" }
                    )}
                </h4>
            </div>
        </div>
    );
}
