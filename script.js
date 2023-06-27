fetch('https://casa98.ddns.net:3000/status')
        .then(response => response.json())
        .then(data => {
          const statusElement = document.getElementById('status');
          const uptimeElement = document.getElementById('uptime');

          statusElement.textContent = 'Status: ' + data.status;
          uptimeElement.textContent = 'Uptime: ' + data.uptime;
          statusElement.style.color = data.status === 'Online' ? 'green' : 'red';
        })
        .catch(error => {
          console.error('Ocorreu um erro ao obter o status do servidor:', error);
        });