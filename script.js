// ==========================================
// WTEC REFRIGERAÇÃO - FUNÇÕES DO SITE
// ==========================================

const NUMERO_WHATSAPP = "5562981446237";

function abrirWhats(servico) {
    const mensagem = `Olá! Vim pelo site da WTEC Refrigeração.%0A%0A` +
                     `📌 Serviço: ${servico}%0A%0A` +
                     `Gostaria de um orçamento e mais informações.`;
    window.open(`https://wa.me/${NUMERO_WHATSAPP}?text=${mensagem}`, "_blank");
}

function enviarDiagnostico() {
    const equipamento = document.getElementById("equipamento").value;
    const marca = document.getElementById("marca").value;
    const problema = document.getElementById("problema").value;
    const tempo = document.getElementById("tempo").value;

    if (equipamento === "" || marca === "" || problema === "") {
        alert("⚠️ Por favor, preencha os campos: Equipamento, Marca e Problema.");
        return;
    }

    let mensagem = `Olá! Vim pelo site da WTEC Refrigeração.%0A%0A` +
                   `🔹 Equipamento: ${equipamento}%0A` +
                   `🔹 Marca: ${marca}%0A` +
                   `🔹 Problema: ${problema}%0A`;

    if (tempo && tempo !== "") {
        mensagem += `🔹 Quando começou: ${tempo}%0A`;
    }

    mensagem += `%0A📅 Gostaria de agendar uma visita técnica.`;
    window.open(`https://wa.me/${NUMERO_WHATSAPP}?text=${mensagem}`, "_blank");
}

function falarWhatsApp(mensagemPersonalizada) {
    let mensagem = mensagemPersonalizada || `Olá! Vim pelo site da WTEC e gostaria de um orçamento.`;
    window.open(`https://wa.me/${NUMERO_WHATSAPP}?text=${encodeURIComponent(mensagem)}`, "_blank");
}

function voltarAoTopo() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// CONTROLE DO MODAL
function abrirModal() {
    const modal = document.getElementById("modalAviso");
    if (modal) modal.classList.add("mostrar");
}

function fecharModal() {
    const modal = document.getElementById("modalAviso");
    if (modal) modal.classList.remove("mostrar");
}

// EVENTOS AO CARREGAR
document.addEventListener('DOMContentLoaded', function() {
    console.log('🚀 Site WTEC carregado!');

    const formBox = document.querySelector('.form-box');
    if (formBox) {
        formBox.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                e.preventDefault();
                enviarDiagnostico();
            }
        });
    }

    // Abre o modal após 1 segundo de carregamento
    setTimeout(abrirModal, 1000); 
});
