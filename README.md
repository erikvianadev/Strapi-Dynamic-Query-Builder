# Strapi Dynamic Query Builder

Projeto Node.js para construir consultas dinâmicas em APIs Strapi, com foco em filtrar múltiplos termos em múltiplos campos de forma escalável, organizada e fácil de manter.

## O Problema

Ao consumir conteúdos de uma API Strapi, surgiu a necessidade de buscar vários termos ao mesmo tempo em mais de um campo, sem depender de uma solução rígida, repetitiva ou difícil de expandir.

O desafio era criar uma forma de:

- pesquisar múltiplos termos com facilidade
- aplicar a busca em múltiplos campos
- evitar duplicação de lógica
- manter a solução escalável para ajustes futuros

Em um cenário real, montar esses filtros manualmente a cada mudança rapidamente vira um ponto de manutenção ruim. A proposta deste projeto foi justamente resolver isso com uma estrutura mais limpa e reaproveitável.

## A Solução

A solução adotada foi uma abordagem modular para a construção da query dinâmica.

Em vez de concentrar tudo em um único arquivo, o projeto separa as responsabilidades em módulos simples:

- `terms.js`: define os termos pesquisados
- `camps.js`: define os campos onde a busca será feita
- `endpoints.js`: centraliza a configuração do endpoint
- `main.js`: monta os filtros, gera a query string e executa a requisição

Essa separação facilita manutenção, leitura e evolução do projeto. Para alterar os termos, os campos ou o endpoint, basta ajustar o módulo correspondente, sem reescrever a lógica principal.

## Como Funciona

O script combina dinamicamente os termos e os campos configurados para gerar um filtro compatível com Strapi usando operador `$or`, e serializa esse objeto com `qs`.

Fluxo da aplicação:

1. lê os termos configurados
2. lê os campos que devem ser pesquisados
3. monta dinamicamente o objeto de filtros
4. serializa a query string no formato esperado pelo Strapi
5. faz a requisição para a API
6. exibe no terminal a query gerada e a resposta recebida

## Estrutura do Projeto

```text
.
|-- STRAPI/
|   `-- TRABALHO_1/
|       |-- camps.js
|       |-- endpoints.js
|       |-- main.js
|       `-- terms.js
|-- package.json
`-- package-lock.json
```

## Organização Modular

### Termos pesquisados

Arquivo: [STRAPI/TRABALHO_1/terms.js](/c:/Users/Pichau/Desktop/PROJETOS_E_ESTUDOS_PREFEITURA_RP/STRAPI/TRABALHO_1/terms.js)

```js
exports.termsFilter = ['GCM', 'guarda municipal', 'guarda civil municipal']
```

### Campos pesquisados

Arquivo: [STRAPI/TRABALHO_1/camps.js](/c:/Users/Pichau/Desktop/PROJETOS_E_ESTUDOS_PREFEITURA_RP/STRAPI/TRABALHO_1/camps.js)

```js
exports.campsFilter = ['title', 'content']
```

### Endpoint configurado

Arquivo: [STRAPI/TRABALHO_1/endpoints.js](/c:/Users/Pichau/Desktop/PROJETOS_E_ESTUDOS_PREFEITURA_RP/STRAPI/TRABALHO_1/endpoints.js)

```js
exports.endpointOldPostsPrefeituraRP = {
  STRAPI_URL_BASE: 'https://novopainel.riopreto.sp.gov.br/api',
  STRAPI_ENDPOINT: 'old-posts',
}
```

## Tecnologias e Dependências

- Node.js 18+
- `qs` para serialização de query strings complexas
- `fetch` nativo do Node.js para consumo da API

## Instalação

```bash
npm install
```

## Execução

```bash
npm start
```

Ou diretamente:

```bash
node STRAPI/TRABALHO_1/main.js
```

## Valor Técnico
- construção dinâmica de filtros para Strapi
- separação de responsabilidades
- organização modular
- facilidade de manutenção
- base escalável para novas buscas e endpoints

## Possíveis Evoluções

- receber termos e campos por parâmetros
- suportar múltiplos endpoints reutilizando a mesma lógica
- adicionar tratamento de erros mais robusto
- incluir testes para validar a geração das queries

## Licença

MIT
