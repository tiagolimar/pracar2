export default function CopyLinkButton({linkToCopy}) {

    const copyToClipboard = async () => {
        try {
            await navigator.clipboard.writeText(linkToCopy);
            alert("Link copiado para a área de transferência!");
        } catch (err) {
            console.error("Falha ao copiar o texto: ", err);
        }
    };

    return (
        <button onClick={copyToClipboard} className="btn btn-outline-dark m-2 flex-grow-1">
            Copiar link
        </button>
    );
}
