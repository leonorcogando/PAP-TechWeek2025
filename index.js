// Countdown Timer
const eventDate = new Date('2026-06-15T09:00:00').getTime();
// Podes mudar para qualquer data, por exemplo:
// const eventDate = new Date("2026-12-31T23:59:59").getTime();

function updateCountdown() {
    const now = new Date().getTime();
    const distance = eventDate - now;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById('days').textContent = String(days).padStart(2, '0');
    document.getElementById('hours').textContent = String(hours).padStart(2, '0');
    document.getElementById('minutes').textContent = String(minutes).padStart(2, '0');
    document.getElementById('seconds').textContent = String(seconds).padStart(2, '0');

    if (distance < 0) {
        document.getElementById('days').textContent = '00';
        document.getElementById('hours').textContent = '00';
        document.getElementById('minutes').textContent = '00';
        document.getElementById('seconds').textContent = '00';
    }
}

setInterval(updateCountdown, 1000);
updateCountdown();

// Se a página for carregada com um hash (ex: #programacao), removemos o hash
// e garantimos que o scroll fique no topo para evitar saltar diretamente para a secção
window.addEventListener('load', function() {
    if (window.location.hash) {
        // espera um tick para garantir que o browser já processou o jump
        setTimeout(function() {
            // volta para o topo
            window.scrollTo(0, 0);
            // remove o hash da URL sem recarregar a página
            if (history.replaceState) {
                history.replaceState(null, '', window.location.pathname + window.location.search);
            } else {
                // fallback: limpa o hash (pode causar um pequeno jump em navegadores antigos)
                window.location.hash = '';
            }
        }, 0);
    }
});

// Theme Toggle
function toggleTheme() {
    document.body.classList.toggle('light-mode');
}

// Modal
function openModal(type) {
    const modal = type === 'login'
        ? document.getElementById('loginModal')
        : document.getElementById('registerModal');

    modal.classList.add('active');
}

function closeModal(type) {
    const modal = type === 'login'
        ? document.getElementById('loginModal')
        : document.getElementById('registerModal');

    modal.classList.remove('active');
}

// Fechar clicando fora
window.onclick = function(event) {
    if (event.target.classList.contains('modal')) {
        event.target.classList.remove('active');
    }
}
