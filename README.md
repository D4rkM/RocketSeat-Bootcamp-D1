## Primeiro desafio do Bootcamp da Rocketseat

Primeiro desafio desenvolvido no bootcamp da Rocketseat

O objetivo é desenvolver um Crud simples para projetos utilizando express

###Rotas

- [x] ``GET /projects``: Ver todos os projetos cadastrados;
- [x] ``POST /projects/:id``: Cadastrar o objeto contendo os dados do projeto;
- [x] ``PUT /projects/:id``: Atualizar nomes de projetos;
- [x] ``POST /projects/:id/tasks``: Adicionar tarefas aos projetos;
- [x] ``DELETE /projects/:id``: Remover projeto pelo id;

###Midlewares
- [x] Desenvolver um middleware que verifica o id do projeto vindo dos parametros de rotas;
- [x] Middleware global que emite um `console.log` com a contagem de quantas requisições foram feitas;