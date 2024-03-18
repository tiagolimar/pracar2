export default function CopyButton({value}) {

    const copyToClipboard = async () => {
        try {
            await navigator.clipboard.writeText(value);
            alert("Dado copiado para a área de transferência!");
        } catch (err) {
            console.error("Falha ao copiar o dado: ", err);
        }
    };

    return (
        <button onClick={copyToClipboard} className="btn text-primary btn-sm btn-copiar">
            copiar
        </button>
    );
}
