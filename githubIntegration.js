const axios = require('axios');

const token = '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'; // Substitua pelo seu token de acesso pessoal
const owner = 'Filmes12'; // Substitua pelo nome do proprietário do repositório
const repo = 'banco'; // Substitua pelo nome do seu repositório
const path = 'usuarios.json'; // Substitua pelo caminho para o arquivo que você deseja acessar

// Fazendo a solicitação GET para obter o conteúdo do arquivo
axios.get(`https://api.github.com/repos/${owner}/${repo}/contents/${path}`, {
    headers: {
        Authorization: `Bearer ${token}`
    }
})
.then(response => {
    // Se a solicitação for bem-sucedida, o conteúdo do arquivo estará em response.data
    console.log('Conteúdo do arquivo:', Buffer.from(response.data.content, 'base64').toString('utf-8'));
})
.catch(error => {
    // Se houver algum erro na solicitação
    console.error('Erro ao acessar o arquivo:', error.response.data);
});
