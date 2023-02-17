# API para Salvar Links
<h2>Você pode acessar o site e testar sua funcionalidade atráves do link abaixo</h2>
<p>Link para acessar o site: https://salve-seu-link.netlify.app/</p>
<p>Repositorio do front-end: https://github.com/LaezioAP/front-end-api-salvar-links</p>
<p>O Deploy do Back-End foi feito no site da Heroku</p>
<p>O Deploy do Front-End foi feito no site da Netlify</p>
<hr/>
<h2>Devnology - Teste Programa de Trainee</h2>
<hr>
<h2>Objetivo: Desenvolva uma API gerenciar links, com a URL e um título/label. Os links também podem ser editados e excluídos.</h2>
<ul>
  <li>Usuário pode criar conta</li>
  <li>Usuário pode fazer login</li>
  <li>Usuário consegue adicionar suas URL favoritas</li>
  <li>Usuário consegue excluir suas URL</li>
  <li>Usuário consegue editar suas URL</li>
  <li>Usuário consegue acessar os links diretos de determinado registro que ele adicionou</li>
  <li>Usuario consegue sair do site</li>
</ul>
<hr>
<h2>Bibliotecas utilizadas</h2>
<ul>
  <li>Express: Express.js é um framework para Node.js que fornece recursos mínimos para construção de servidores web</li>
  <li>Axios: Axios é um cliente HTTP baseado em Promises para fazer requisições. Pode ser utilizado tanto no navegador quando no Node.js.</li>
  <li>Cheerio: O Cheerio permite manipular a estrutura do HTML, e retornar o conteúdo que desejamos através da utilização de seletores que são semelhantes ao JQuery</li>
  <li>Bcrypt: O bcrypt é uma biblioteca para encriptação de dados. Neste caso, o dado a ser criptografado é o password.</li>
  <li>JsownWebToken: Um JWT é um padrão para autenticação e troca de informações definido pela RFC7519. Nele é possível armazenar de forma segura e compacta objetos JSON</li>
  <li>Cors: CORS é um mecanismo que permite que recursos restritos em uma página da web sejam recuperados por outro domínio fora do domínio ao qual pertence o recurso que será recuperado.</li>
  <li>Dotenv: O DotEnv é um pacote leve do npm que carrega automaticamente as variáveis de ambiente de um arquivo.</li>
  <li>Knex: O knex é um query-builder ou “construtor de consultas” em tradução livre, para Node. js, e que interage com bancos relacionais.</li>
</ul>


## Endpoints

### Criar conta na plataforma

#### `POST` `/cadastrar-usuario`

Esse endpoint deverá criar uma conta no sistema "api-salvar-links"

-   Você deverá, **OBRIGATORIAMENTE**:

    -   Inserir seu nome
    -   Inserir seu email
    -   Inserir sua senha

        OBS: caso seja feita a solicitação pelo SITE (https://salve-seu-link.netlify.app/cadastrar)
    -   Inserir seu confirmar senha

-   **Resposta**

    Em caso de **sucesso**, você será redirecionado para a página de login do site e seu cadastro será realizado!  
    Em caso de **falha na validação**, a resposta mostrará uma mensagem de error no próprio site ou na API

### Login no sistema

#### `POST` `/login`

Esse endpoint deverá lhe redirecionar para página de dashboard (OBS: Você só consegue acessar a página de dashboard caso faça login, pois será enviado um TOKEN)

-   Você deverá, **OBRIGATORIAMENTE**:

    -   Inserir o email cadastrado
    -   Inserir a senha cadastrada

-   **Resposta**

    Em caso de **sucesso**, você será redirecionado para a dashboard do site! 
    Em caso de **falha na validação**, a resposta mostrará uma mensagem de error no próprio site ou na API


### Listar links registrados

#### `GET` `/dashboard`

Esse endpoint deverá listar todas os links salvos

-   Você deverá, **OBRIGATORIAMENTE**:

    -   Fazer login na plataforma para ver seus registros

-   **Resposta**
    -   Listagem de todos os seus registros salvos
    
### Cadastrar URL

#### `POST` `/adicionar-url`

Esse endpoint deverá realizar o salvamento de um determinado LINK.

-   Você deverá, **OBRIGATORIAMENTE**:

    -   Colocar no input um LINK VÁLIDO!

-   **Resposta**

    Em caso de **sucesso**, o axios fara a requisição para o site e o Cheerio pegará o Título do link e salvará no banco de dados.
    Em caso de **falha na validação**, o link não será salvo!
    
### Excluir link salvo

#### `DELETE` `/dashboard/:id`

Esse endpoint deve excluir um link registrado no banco de dados

-   Você deverá, **OBRIGATORIAMENTE**:

    -   Caso seja na API você deverá inserir manualmente no params o id de determinado link salvo
    -   Caso seja pelo site é só aperta no ícone da LIXEIRA que será feita a exclusão!


-   **Resposta**

    Em caso de **sucesso**, será feita a exclusão do registro no banco de dados  
    Em caso de **falha na validação**, a resposta mostrará uma mensagem de error na API

### Editar link salvo

#### `PUT` `/dashboard/:id`

Esse endpoint deverá editar manualmente um link salvo

-   Você deverá, **OPCIONALMENTE**:

    - Você pode enviar o URL ou Título para fazer a atualização. Caso não envie a URL ela será salva com o valor que está no banco de dados, assim para o Título.

-   **Resposta**

    Em caso de **sucesso**, o registro será atualizado! 
