# PaginaElaine

Este projeto foi gerado usando [Angular CLI](https://github.com/angular/angular-cli) versão 20.0.5.

## Configuração da API

Este projeto inclui um servidor backend com NewsAPI para buscar notícias.

### Instalação das dependências

```bash
npm install
```

### Executando o projeto

#### Opção 1: Executar servidor e frontend separadamente

**Terminal 1 - Servidor backend:**

```bash
npm run server
```

**Terminal 2 - Frontend Angular:**

```bash
npm run start
```

#### Opção 2: Executar ambos simultaneamente

```bash
npm run dev
```

### Endpoints da API

O servidor roda em `http://localhost:3000` e oferece os seguintes endpoints:

- `GET /api/top-headlines` - Busca as principais notícias
- `GET /api/everything` - Busca todas as notícias com filtros
- `GET /api/sources` - Busca as fontes de notícias disponíveis

### Exemplo de uso da API

```javascript
// Buscar top headlines
fetch("http://localhost:3000/api/top-headlines")
  .then((response) => response.json())
  .then((data) => console.log(data));

// Buscar notícias sobre um tema específico
fetch("http://localhost:3000/api/everything")
  .then((response) => response.json())
  .then((data) => console.log(data));
```

## Development server

Para iniciar apenas o servidor de desenvolvimento do Angular:

```bash
ng serve
```

Navegue para `http://localhost:4200/`. O aplicativo será recarregado automaticamente sempre que você modificar qualquer arquivo fonte.

## Code scaffolding

Angular CLI inclui ferramentas poderosas de scaffolding de código. Para gerar um novo componente, execute:

```bash
ng generate component component-name
```

Para uma lista completa de schematics disponíveis (como `components`, `directives`, ou `pipes`), execute:

```bash
ng generate --help
```

## Building

Para construir o projeto:

```bash
ng build
```

Isso compilará seu projeto e armazenará os artefatos de build no diretório `dist/`. Por padrão, o build de produção otimiza seu aplicativo para performance e velocidade.

## Running unit tests

Para executar testes unitários com o test runner [Karma](https://karma-runner.github.io), use o seguinte comando:

```bash
ng test
```

## Running end-to-end tests

Para testes end-to-end (e2e), execute:

```bash
ng e2e
```

Angular CLI não vem com um framework de teste end-to-end por padrão. Você pode escolher um que atenda às suas necessidades.

## Recursos Adicionais

Para mais informações sobre como usar o Angular CLI, incluindo referências detalhadas de comandos, visite a página [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli).
