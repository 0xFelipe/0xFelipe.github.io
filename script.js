document.addEventListener('DOMContentLoaded', getStatus);

function getStatus() {
  fetch('http://casa98.ddns.net:3000/status')
    .then(response => response.json())
    .then(data => {
      const statusElement = document.getElementById('status');
      statusElement.textContent = `Status do servidor: ${data.status}`;
      const uptimeElement = document.getElementById('uptime');
      uptimeElement.textContent = `Tempo de atividade: ${data.uptime} segundos`;
    })
    .catch(error => {
      console.error('Erro ao obter o status do servidor:', error);
    });
}
