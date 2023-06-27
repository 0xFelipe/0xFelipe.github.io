document.addEventListener("DOMContentLoaded", function() {
  var serverStatusElement = document.getElementById("server-status");
  
  // Função para buscar o status do servidor
  function getServerStatus() {
    // Fazer uma requisição para o servidor para obter o status
    // Aqui você pode usar XMLHttpRequest, fetch ou qualquer outra biblioteca que preferir
    
    // Exemplo usando fetch:
    fetch("url_do_seu_endpoint_de_status")
      .then(function(response) {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("Erro ao obter o status do servidor");
        }
      })
      .then(function(data) {
        // Exibir o status do servidor no elemento "server-status"
        serverStatusElement.textContent = "Status: " + data.status;
      })
      .catch(function(error) {
        serverStatusElement.textContent = "Erro ao obter o status do servidor: " + error.message;
      });
  }
  
  // Chamar a função para obter o status do servidor inicialmente
  getServerStatus();
  
  // Atualizar o status do servidor a cada x segundos (por exemplo, a cada 10 segundos)
  setInterval(getServerStatus, 10000);
});
