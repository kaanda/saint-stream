components
- header
- logo
- navbar - home, discover, movie release...
- menu - busca
- content
- movie detail - background, descrição do filme, top cast, botões (listagem de pessoas)
- buttons - listagem de botões (trailer, add favoritos, share e like)
- card films - listagem de filmes, ranking e categoria
- footer
- menu - home, discover, movie release...
- social media
- copy right
- privacy policy, terms of use, language

Pensando em componentização
- navbar - terá no header e no footer (home, discovery, etc)
- menu - terá no header (busca)
- detalhes - terá no content (detalhes do filme)
- buttons - terá no content (trailer, add favoritos, share e like)
- card films - terá no content (listagem de filmes, ranking e categoria)


# História de Usuário 1: Visualizar a Página Inicial  
Descrição:  
Como um usuário, quero poder acessar a página inicial para ter uma visão geral do site e descobrir as funcionalidades disponíveis.

Tarefas:

- [ ] Implementar o layout da página inicial incluindo cabeçalho, logotipo, barra de navegação e rodapé.
- [ ] Inserir um carrossel ou destaque para filmes populares ou em lançamento no conteúdo principal da página.
- [ ] Integrar links funcionais na barra de navegação para redirecionar os usuários para as seções "Home", "Discover", e "Movie Release".
- [ ] Implementar uma seção de mídias sociais e informações de direitos autorais no rodapé.

# História de Usuário 3: Pesquisar Filmes  
Descrição:  
Como um usuário, quero poder buscar por filmes específicos para encontrar rapidamente o que estou procurando.

Tarefas:

- [ ] Implementar uma barra de busca no menu ou cabeçalho da página.
- [ ] Desenvolver funcionalidade de pesquisa que filtra os filmes por título, diretor, ou ator.
- [ ] Exibir os resultados da pesquisa em uma página ou seção dedicada, listando os filmes que correspondem aos critérios de busca.

# História de Usuário 4: Interagir com Detalhes do Filme  
Descrição:  
Como um usuário, quero visualizar os detalhes de um filme, incluindo elenco principal e opções de interação como trailer, adicionar a favoritos, compartilhar e curtir.

Tarefas:

- [ ] Desenvolver uma interface detalhada para cada filme que inclua fundo, descrição, elenco principal e botões de ação.
- [ ] Implementar funcionalidades para os botões, permitindo aos usuários assistir ao trailer, adicionar o filme aos favoritos, compartilhar nas redes sociais, e curtir.
- [ ] Exibir informações complementares, como ranking e categoria, na listagem de filmes relacionados ou sugeridos.

# História de Usuário 5: Navegar por Categorias de Filmes  
Descrição:  
Como um usuário, quero poder explorar filmes por categorias ou rankings para descobrir novos títulos interessantes.

Tarefas:

- [ ] Criar filtros ou seções no site que permitam aos usuários visualizar filmes por categoria (ex: ação, romance, terror) ou ranking.
- [ ] Implementar a exibição de cartões de filmes que incluam a imagem do filme, título, e informações básicas.
- [ ] Permitir que os usuários cliquem em um cartão de filme para serem redirecionados à página de detalhes do filme.

# História de Usuário 6: Acessar Menu e Rodapé  
Descrição:  
Como um usuário, quero acessar facilmente o menu e o rodapé para navegar pelo site e encontrar informações legais ou de contato.

Tarefas:

- [ ] Implementar um menu de navegação no rodapé que replique ou complemente as opções disponíveis na barra de navegação do cabeçalho.
- [ ] Incluir links para as políticas de privacidade, termos de uso, e opções de mudança de idioma no rodapé.
- [ ] Disponibilizar ícones de mídias sociais para fácil acesso às páginas do site nessas plataformas.
- [ ] no componente Content tem um <h1>Filmes</h1> -> deixar ele dinâmico para receber filmes ou séries

Cada história de usuário é essencial para guiar o desenvolvimento do projeto, garantindo que o site seja intuitivo, informativo e agradável para os usuários.


const Header = <header></header>
const Footer = <footer></footer>
const Content = <content></content>

function MovieScreen = (props) {
  return (
    <Header />  
    <Content {...props} />
    <Footer />
  )
}

## Add Supported Image Sizes  
                                 Min Res      Max Res  
poster   = Poster ............  500 x 750   2000 x 3000  
backdrop = Fanart ............ 1280 x 720   3840 x 2160  
still    = TV Show Episode ... 1280 x 720   3840 x 2160  
profile  = Actors Actresses ..  300 x 450   2000 x 3000  
logo     = TMDb Logo  

## API Supported Image Sizes  

|  poster  | backdrop |  still   | profile  |   logo   |
| :------: | :------: | :------: | :------: | :------: |
| -------- | -------- | -------- |    w45   |    w45   |
|    w92   | -------- |    w92   | -------- |    w92   |
|   w154   | -------- | -------- | -------- |   w154   |
|   w185   | -------- |   w185   |   w185   |   w185   |
| -------- |   w300   |   w300   | -------- |   w300   |
|   w342   | -------- | -------- | -------- | -------- |
|   w500   | -------- | -------- | -------- |   w500   |
| -------- | -------- | -------- |   h632   | -------- |
|   w780   |   w780   | -------- | -------- | -------- |
| -------- |  w1280   | -------- | -------- | -------- |
| original | original | original | original | original |  

Original Size is the size of the uploaded image.  
It can be between Minimum Resolution and Maximum Resolution.

# AJUSTES
- [ ] todas as fontes do projeto serão na cor branca, incluindo o logo e o search, então se um filme tiver uma imagem de fundo clara, a fonte não será visível. Fazer um ajuste para que a fonte seja preta quando a imagem de fundo for clara e branca quando a imagem de fundo for escura.
- [ ] 

App 
  -> Header
  -> Content
    -> MoviesContainer.component     
    -> SeriesContainer.component
  -> Footer
App

[X] Criar um componente separado para getCasting e importar ele no MoviesContainer e SeriesContainer
[X] Criar uma pasta utils e dentro dela criar um arquivo chamado getId.js, importar ele no MoviesContainer e SeriesContainer
[X] Criar MovieContainer e add o estado nele
    * add aqui o estado, pois ele é o pai e os filhos vão poder receber o estado por props
    * importar getId.js
    * importar getCasting
    * add aqui primeiro filme que tá sendo chamado no content como background + infos 
    * toda a <div id="movies">
[X] Criar SeriesContainer e add o estado nele
    * add aqui o estado, pois ele é o pai e os filhos vão poder receber o estado por props
    * importar getId.js
    * importar getCasting
    * add aqui primeira serie que tá sendo chamada no content como background + infos 
    * toda a <div id="serie">
