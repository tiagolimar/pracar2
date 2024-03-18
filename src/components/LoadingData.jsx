export default function LoadingData({on}) {
    if (on) {
        return <div className="placeholder-wave">Processando, aguarde...</div>;
    }
    return null;
}
