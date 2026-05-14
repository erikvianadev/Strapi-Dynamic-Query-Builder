# Consulta de posts antigos no Strapi

Script Node.js para consultar registros do endpoint `old-posts` de uma API Strapi da Prefeitura de Rio Preto, aplicando filtros por termos e campos.

## Objetivo

O projeto monta dinamicamente uma query string usando `qs` e realiza uma requisição para a API Strapi, buscando posts antigos com base em:

- termos definidos em `STRAPI/TRABALHO_1/terms.js`
- campos pesquisáveis definidos em `STRAPI/TRABALHO_1/camps.js`
- endpoint configurado em `STRAPI/TRABALHO_1/endpoints.js`

O ponto de entrada da execução é `STRAPI/TRABALHO_1/main.js`.

## Estrutura

```text
.
├── STRAPI/
│   └── TRABALHO_1/
│       ├── camps.js
│       ├── endpoints.js
│       ├── main.js
│       └── terms.js
├── package.json
└── package-lock.json
```

## Pré-requisitos

- Node.js 18 ou superior
- npm

Observação: o projeto usa `fetch` nativo do Node.js, por isso a recomendação de Node 18+.

## Instalação

```bash
npm install
```

## Como executar

```bash
npm start
```

Ou diretamente:

```bash
node STRAPI/TRABALHO_1/main.js
```

## Comportamento atual

Na execução, o script:

1. monta os filtros com base nos termos e campos configurados
2. gera a query string para o Strapi
3. faz a requisição para a API
4. imprime no terminal a query gerada e os dados retornados

## Configuração dos filtros

### Termos pesquisados

Arquivo: [STRAPI/TRABALHO_1/terms.js](/c:/Users/Pichau/Desktop/PROJETOS_E_ESTUDOS_PREFEITURA_RP/STRAPI/TRABALHO_1/terms.js)

Exemplo atual:

```js
exports.termsFilter = ['GCM', 'guarda municipal', 'guarda civil municipal']
```

### Campos pesquisados

Arquivo: [STRAPI/TRABALHO_1/camps.js](/c:/Users/Pichau/Desktop/PROJETOS_E_ESTUDOS_PREFEITURA_RP/STRAPI/TRABALHO_1/camps.js)

Exemplo atual:

```js
exports.campsFilter = ['title', 'content']
```

### Endpoint da API

Arquivo: [STRAPI/TRABALHO_1/endpoints.js](/c:/Users/Pichau/Desktop/PROJETOS_E_ESTUDOS_PREFEITURA_RP/STRAPI/TRABALHO_1/endpoints.js)

Exemplo atual:

```js
exports.endpointOldPostsPrefeituraRP = {
  STRAPI_URL_BASE: 'https://novopainel.riopreto.sp.gov.br/api',
  STRAPI_ENDPOINT: 'old-posts',
}
```

## Dependências

- `qs`: serialização da query string para filtros complexos do Strapi

## Publicação no GitHub

Antes de enviar para o GitHub:

- mantenha `node_modules` fora do versionamento
- revise se URLs, termos e campos estão corretos para o ambiente desejado
- execute `npm install` para recriar dependências localmente, se necessário

## Licença

MIT
