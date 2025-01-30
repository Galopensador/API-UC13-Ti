# API de Carros - WEBAPI

Esta é uma API em construção, que sera uma API RESTFUL desenvolvida paara o gerenciamento de informações de carros, utilizando **Node.js** e **Express**. A API permite crial, ler, atualizar e exxcluir carros, com validação de dados utilizando a biblioteca **Joi**

Este é um projeto de CRUD(Create,Read,Update,Delete), que será expandido no futuro. Este é apenas o escopo inicial.

## Funcionalidades

-**GET /**: Retorna a lista completa de carro.
-**GET /:Sigla**: Retorna as informações de um carro especifico, identificado pela sigla.
-**POST /**: Adiciona um novo carro a lista.
-**PUT /**: Atualiza as informações de um carro especifico, identificado pela sigla.
-**DELETE /**: Remove um carro pela sigla.

## Estrutura inicial do projeto

-**app.js**: Arquivo principal que configura o servidor Express e as rotas de API.
-**tabelaCarros.js**: Contem a lista de carros (DADOS FICTÍCIOS).
-**validacao.js**: Contém a validação **Joi** para os dados de carro.

## Tecnologias usadas

-**Node.js**: Ambiente de execução para JavaScript.
-**Express**: FrameWork para construção de API REST.
-**Joi**: Biblioteca para validação de dados.

## EndPoints

### 1. **GET /**

Retorna a lista de Carros disponiveis

#### Exemplo de resposta:

```json
[
    {   
        "nome": "Ferrari",
        "sigla": "FER",
        "velocidadeMaxima": 340,
        "potencia": 800,
        "consumo": 5.5
    },

    {
        "nome": "Bugatti Chiron",
        "sigla": "CHIRON",
        "velocidadeMaxima": 420,
        "potencia": 1500,
        "consumo": 12.0,
    },
]
```

## Como rodar o projeto

1. **Clone este repositorio**

```bash
git clone http://github.com/seu-usuario/nome-do-repositorio.git
```

2. **Instale as dependencias:**

navegue ate o diretorio do projeto e executo o comando:
```bash
npm install
```
3. **Inicie o servidor:**

Após a instalção das dependencias, inicie o servidor:
```bash
node ./ apps.js
```

4. **Acesse o API:**


A API está disponível em [http://localhost:3000](http://localhost:3000)
