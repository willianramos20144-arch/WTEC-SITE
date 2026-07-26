// ==========================================
// WTEC REFRIGERAÇÃO - FUNÇÕES DO SITE
// ==========================================

const NUMERO_WHATSAPP = "5562981446237";

/**
 * Função para abrir WhatsApp com serviço específico
 */
function abrirWhats(servico) {
    const mensagem = `Olá! Vim pelo site da WTEC Refrigeração.%0A%0A` +
                     `📌 Serviço: ${servico}%0A%0A` +
                     `Gostaria de um orçamento e mais informações.`;

    window.open(`https://wa.me/${NUMERO_WHATSAPP}?text=${mensagem}`, "_blank");
}

/**
 * Função para enviar diagnóstico completo via WhatsApp
 */
function enviarDiagnostico() {
    // Pegando os valores dos campos
    const equipamento = document.getElementById("equipamento").value;
    const marca = document.getElementById("marca").value;
    const problema = document.getElementById("problema").value;
    const tempo = document.getElementById("tempo").value;

    // Validação dos campos obrigatórios
    if (equipamento === "" || marca === "" || problema === "") {
        alert("⚠️ Por favor, preencha os campos: Equipamento, Marca e Problema.");
        return;
    }

    // Montando a mensagem
    let mensagem = `Olá! Vim pelo site da WTEC Refrigeração.%0A%0A` +
                   `🔹 Equipamento: ${equipamento}%0A` +
                   `🔹 Marca: ${marca}%0A` +
                   `🔹 Problema: ${problema}%0A`;

    // Adiciona o campo "tempo" se estiver preenchido
    if (tempo && tempo !== "") {
        mensagem += `🔹 Quando começou: ${tempo}%0A`;
    }

    mensagem += `%0A📅 Gostaria de agendar uma visita técnica.`;

    // Abrindo WhatsApp
    window.open(`https://wa.me/${NUMERO_WHATSAPP}?text=${mensagem}`, "_blank");
}

/**
 * Função para abrir WhatsApp com mensagem personalizada
 * (pode ser usada em qualquer botão do site)
 */
function falarWhatsApp(mensagemPersonalizada) {
    let mensagem = mensagemPersonalizada || 
                   `Olá! Vim pelo site da WTEC e gostaria de um orçamento.`;
    
    window.open(`https://wa.me/${NUMERO_WHATSAPP}?text=${encodeURIComponent(mensagem)}`, "_blank");
}

/**
 * Função para voltar ao topo da página (útil para botão flutuante)
 */
function voltarAoTopo() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// ==========================================
// EVENTOS AO CARREGAR A PÁGINA
// ==========================================
document.addEventListener('DOMContentLoaded', function() {
    console.log('🚀 Site WTEC Refrigeração carregado com sucesso!');

    // Se houver formulário de diagnóstico, adiciona evento de tecla Enter
    const formBox = document.querySelector('.form-box');
    if (formBox) {
        formBox.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                e.preventDefault();
                enviarDiagnostico();
            }
        });
    }
});