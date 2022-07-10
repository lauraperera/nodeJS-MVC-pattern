# nodeJS-MVC-pattern

### Implementando o padrão MVC (model-view-controller) em um projeto nodeJS utilizando API e o framework expressJS.

Neste projeto, foi utilizada uma estrutura de dados estática apenas para testes, contendo um _json_ com dados de 3 usuários fictícios.

A estrutura de dados, que representa o nosso "banco de dados" nesse projeto está na pasta **models**.

Na pasta **controller** estão todas as chamadas das funções que esta API utiliza, e suas definiões encontram-se na pasta **service**.

Por padrão, o modelo MVC possui, além das pastas **models** e **controller**, a pasta **views**, porém, como este projeto fictítio é apenas uma API que pode ser consumida por outra aplicação e não possui interface visual para o usuário, colocou-se na pasta **view** o arquivo que pode ser importado no _Postman_ para testar a API.

## MVC
O padrão MVC caracteriza-se pela separação da aplicação em 3 camadas: 

> Model: responsável por gerenciar os dados e seus comportamentos (onde fica toda a lógica de negócio da aplicação);

> View: interface do usuário, reponsável por renderizar os dados da camada **model**;

> Controller: faz a comunicação entre as camadas **model** e **view**, é nessa camada que os dados são recebidos e depois tratados pelo model e/ou renderizados na view.

## Rodar o projeto
```
$ npm install
```

```
$ nodemon index.js
```

