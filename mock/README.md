# JSON Server

O projeto ultiliza o 'json-server' para servir uma API mock a partir de um arquivo JSON. Siga os passos abaixo para iniciar o servidor.

## Iniciar o servidor
1. Abra uma nova aba no terminal.
2. Execute o seguinte comando:
```
npx json-server -w -p 3333 ./mock/database.json
```
- `-w`: Observa o arquivo `database.json` para aplicar mudanças automaticamente.

- `-p 3333`: Define a porta `3333` para o servidor (na documentação do json-server a porta ultilizada esta usando a mesma onde o react roda, ultilizando a mesma haverá conflitos).

- `./mock/database.json`: Caminho para o arquivo JSON que serve como base de dados.

3. O servidor estará rodando na URL: `http://localhost:3333`.

## Notas
- O `json-server` foi instalado como uma dependência local do projeto, e é executado ultilizando o `npx` para garantir que a versão correta seja ultilizada.

- As alterações feitas no `database.json` serão refletidas em tempo real no servidor.

- Após isso em seu arquivo `package.json` configure no `script` o seguinte `"mock": "json-server -w -p 3333 ./mock/database.json"``e a partir de então, toda vez que você desejar iniciar o servidor só chame `npm run mock`.