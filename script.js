const WA_NUMBER = '525657679366';
const GYM_ADDRESS = 'Calz. de las Bombas 294, Coapa, Jardines de Coyoacán, Coyoacán, 04890 Ciudad de México, CDMX';

window.addEventListener('load', () => {
  setTimeout(() => document.getElementById('loader')?.classList.add('hide'), 1800);
});

document.getElementById('year').textContent = new Date().getFullYear();

const menuBtn = document.getElementById('menuBtn');
const menu = document.getElementById('menu');
menuBtn?.addEventListener('click', () => menu.classList.toggle('active'));
menu?.querySelectorAll('a').forEach(a => a.addEventListener('click', () => menu.classList.remove('active')));

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) entry.target.classList.add('on');
  });
}, { threshold: 0.15 });
document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

const chatToggle = document.getElementById('chatToggle');
const chatBox = document.getElementById('chatBox');
chatToggle?.addEventListener('click', () => chatBox.classList.toggle('active'));

function sendWhats(message){
  const url = `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(message)}`;
  window.open(url, '_blank');
}
window.sendWhats = sendWhats;

const chatAnswers = {
  precios: `<strong>💰 Planes mensuales</strong><br>• Inscripción: $500<br>• 12 clases por mes: $899<br>• Mensualidad completa: $1100<br>• Entrenamiento personalizado: $2500`,
  horarios: `<strong>🕒 Horarios</strong><br>• Lunes a viernes: 7:00 AM a 10:00 PM<br>• Sábados y domingos: 8:00 AM a 12:00 PM`,
  torneo: `<strong>🏆 Torneo Debut</strong><br>• Fecha: 4 de julio<br>• Pesaje: 8:00 a 9:00 AM<br>• Inicio: 10:00 AM<br>• Público: $150<br>• Participación: $150`,
  personalizado: `<strong>🥊 Entrenamiento personalizado</strong><br>Entrena con tu coach, mejora combinaciones en manoplas y recibe atención directa. Costo: $2500.`,
  ubicacion: `<strong>📍 Ubicación</strong><br>Calz. de las Bombas 294, Coapa, Jardines de Coyoacán, Coyoacán, 04890 Ciudad de México, CDMX<br>También puedes tocar “Cómo llegar” para abrir Google Maps.`
};

function showChatInfo(type){
  const answer = document.getElementById('chatAnswer');
  if(answer) answer.innerHTML = chatAnswers[type] || 'Te puedo apoyar por WhatsApp con más informes.';
}
window.showChatInfo = showChatInfo;

document.querySelectorAll('[data-chat]').forEach(button => {
  button.addEventListener('click', () => showChatInfo(button.dataset.chat));
});

document.querySelectorAll('[data-whatsapp]').forEach(button => {
  button.addEventListener('click', () => sendWhats(button.dataset.whatsapp));
});

// Reproduce videos de galería al pasar el mouse.
document.querySelectorAll('.media-grid video').forEach(video => {
  video.addEventListener('mouseenter', () => video.play().catch(() => {}));
  video.addEventListener('mouseleave', () => video.pause());
});
