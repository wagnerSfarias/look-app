

## Sobre

LookApp é um aplicativo desenvolvido com React Native, que tem o objetivo de oferecer ao usuário uma plataforma de marketplace de moda em conjunto com uma rede social, simulando a navegação por todas as etapas que um marketplace pode oferecer, desde a escolha do produto até conclusão do pagamento.

Os dados utilizados na construção desta aplicação foram consumidos de uma API fake local.


## Funcionalidades 

- Criar Login
- Fazer Login
- Visualizar Postagens
- Visualizar categorias
- Visualizar produtos
- Adicionar produtos ao carrinho
- Visualizar carrinho
- Realizar pedido
- Visualizar pedidos

## Layout 🖥️

![apresentacao](src/assets/gif.gif)

## Clone do projeto 

### Clone o repositório

```bash
     git clone https://github.com/wagnerSfarias/look-app.git

```
### Entre no diretório do projeto

```bash
    cd look-app
```

###  Instale as dependências
```bash
     yarn  
```

### Rodando API

 Para o desenvolvimento da API fake utilizei a biblioteca json-server.

 [Documentação json-server](https://github.com/typicode/json-server)

 Iniciando json-server

```bash
     json-server src/data/db.json
```

**Observação**: Antes de realizar qualquer requisição HTTP, é necessário editar a baseURL que está no arquivo dentro de /src/services/api.js e inserir o número de IP da sua maquina.

Exemplo:

```js
const api = axios.create({
  baseURL: 'http:// SEU IP AQUI:3000'
  baseURL: 'http://123.123.0.123:3000'
});

```

###  Executando projeto

```bash
     yarn expo start
```

## Tecnologias utilizadas 👨🏻‍💻

- React Native
- Expo
- React Navigation / Stack / Drawer
- Styled Components
- Async Storage
- Axios
- Json-server
- Moment
- Card-validator
- React Native Segmented Picker
- Stretchy
- Eslint / Prettier