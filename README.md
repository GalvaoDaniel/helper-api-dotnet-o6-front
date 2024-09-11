# Helper API Dotnet O6 Front

Este projeto é uma aplicação frontend desenvolvida em React para consumir uma API de investimentos. Ele oferece uma interface para calcular rendimentos e visualizar os resultados em gráficos, utilizando componentes do Material-UI.

## Principais Tecnologias

- **`React 18.3.1`**: Biblioteca para construção de interfaces de usuário.
- **`Material-UI`**: Biblioteca de componentes para criar UI modernas e responsivas.
- **`Axios 1.7.7`**: Cliente HTTP para realizar requisições à API.
- **`Vite 5.4.1`**: Ferramenta de build rápida para projetos frontend.
- **`TypeScript 5.5.3`**: Superconjunto de JavaScript que adiciona tipagem estática.
- **`Playwright 1.47.0`**: Framework para testes automatizados de navegadores.

## Funcionalidades

- **`Calculadora de Investimentos`**: Permite simular rendimentos com base nas taxas fornecidas pela API.
- **`Gráfico de Resultados`**: Exibe os resultados dos cálculos de rendimento em formato gráfico.
- **`Integração com API`**: Consome dados de uma API para obter as taxas de CDI e calcular investimentos.

## Instalação

Siga os passos abaixo para configurar o projeto em seu ambiente local:

1. Clone o repositório:

    ```bash
    git clone https://github.com/GalvaoDaniel/helper-api-dotnet-o6-front.git
    cd helper-api-dotnet-o6-front
    ```

2. Instale as dependências:

    ```bash
    npm install
    ```

## Scripts Disponíveis

No diretório do projeto, você pode executar os seguintes comandos:

- **`npm run dev`**: Executa o aplicativo em modo de desenvolvimento.

- **`npx playwright test`**: Executa os testes com o playwright.

- **`npm run lint`**: Executa o ESLint para identificar problemas no código.

## Testes Automatizados

O projeto inclui testes automatizados usando **Playwright**. Siga os passos abaixo para executar os testes:

### Configuração para Executar os Testes

1. Instale as dependências do Playwright:

    ```bash
    npm install @playwright/test
    ```

2. Execute os testes:

    ```bash
    npx playwright test
    ```

Os testes irão verificar se o cálculo de investimentos está funcionando corretamente. Eles simulam interações do usuário, como preenchimento de campos e verificação dos resultados exibidos na tela.


