export const defaultValue = 'Vazio';

function formatDate(dateString) {
    if (!dateString) return '';
    // Converte yyyy-mm-dd para dd/mm/yy
    const [year, month, day] = dateString.split('-');
    return `${day}/${month}/${year.substring(2)}`;
}

function formatTime(timeString) {
    if (!timeString) return '';
    // Converte hh:mm:ss para hh:mm
    return timeString.substring(0, 5);
}

function formatDateTimeRange(startDate, endDate, startTime, endTime) {
    // Converte as datas e horas de início e término para os formatos desejados e os une
    const formattedStartDate = formatDate(startDate);
    const formattedEndDate = formatDate(endDate);
    const formattedStartTime = formatTime(startTime);
    const formattedEndTime = formatTime(endTime);
    
    const dateRange = `${formattedStartDate} a ${formattedEndDate}`;
    const timeRange = `${formattedStartTime} a ${formattedEndTime}`;
    
    return { dateRange, timeRange };
}

export default function getResume({ dadosPraca, dadosEvento, dadosPagamentos }){
    const { nome, url } = dadosPraca;
    const { chavePixA, nomePixA, chavePixB, nomePixB } = dadosPagamentos;
    let { local, dataInicio, dataTermino, horaInicio, horaTermino } = dadosEvento;
    
    dataInicio = dataInicio?.substring(0,10);
    dataTermino = dataTermino?.substring(0,10);

    const { dateRange, timeRange } = formatDateTimeRange(dataInicio, dataTermino, horaInicio, horaTermino);
    
    const infoPraca = {
        cabecalho: "Dados da Praça",
        infos:[
            {campo:"Nome da praça:", valor:nome},
            {tipo:"link", campo:"Painel de gerenciamento:", valor: window.location.href},
            {tipo:"link", campo:"Sistema dos Caixas:", valor:`${window.location.origin}/caixa/${url}`},
            {tipo:"link", campo:"Cardápio Online:", valor:`${window.location.origin}/cardapio/${url}`},
        ]
    };
    
    const infoEvento = {
        cabecalho:"Dados do Evento",
        url:`/adm/painel/${url}/evento`,
        infos:[
            {campo:"Nome do Evento:", valor:dadosEvento.nome || defaultValue},
            {campo:"Local do Evento:", valor:local || defaultValue},
            {campo:"Data do Evento:", valor:dateRange || defaultValue},
            {campo:"Horário do Evento:", valor:timeRange || defaultValue},
        ]
    };
    
    const infoPagamento = {
        cabecalho:"Dados de Pagamento",
        url:`/adm/painel/${url}/pagamentos`,
        infos:[
            {campo:"Chave Pix A:", valor:chavePixA || defaultValue},
            {campo:"Nome A:", valor:nomePixA || defaultValue},
            {campo:"Chave Pix B:", valor:chavePixB || defaultValue},
            {campo:"Nome B:", valor:nomePixB || defaultValue},
        ]
    };
    
    const resumo = [infoPraca, infoEvento, infoPagamento];
    return resumo
}
