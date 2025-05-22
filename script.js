const fs = require('fs');

// Cria um arquivo logs.txt com conteúdo inicial
fs.writeFileSync('logs.txt', 'Log inicial\n', (err) => {
  if (err) throw err;
  console.log('Arquivo logs.txt criado!');
});

function adicionarLog(nomeAluno){
  const idUnico = uuid();
  const dataHora = new Date().toLocaleString("pt-BR");
const mensagem = `${idUnico}, ${dataHora}, ${nomeAluno}/n`;
fs.appendFile('logs.txt', mensagem, 'utf8', (err) => {
});
}
