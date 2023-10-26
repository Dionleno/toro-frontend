# Aplicação Toro Investimentos
Aplicação simulando ambiente da toro investimentos
 
<p align="center">
  <img alt="License" src="https://img.shields.io/static/v1?label=license&message=MIT&color=8257E5&labelColor=000000">
</p>

## ✨ Tecnologias

Esse projeto foi desenvolvido com as seguintes tecnologias:

- [Angular CLI](https://github.com/angular/angular-cli) version 16.2.7.
- [Typescript](https://www.typescriptlang.org/)
- [Angular Material](https://material.angular.io/) 
- 
## 💻 Projeto

O projeto tem como objetivo simular ambiente da toro investimentos.

## 🚀 Como executar

- Clone o repositório e acesso o diretório
  
#### Backend está nesse repositório [toro-microservice-backend](https://github.com/Dionleno/toro-microservice-backend) 

### Arquitetura do projeto
Foi provisionado essa arquitetura no AWS cloud, foi utilizado as seguintes tecnologias:
- AWS Lambda
- AWS CloudFront
- AWS IAM
- AWS RDS
- AWS S3
- OAUTH0 para autenticação
   
![image](https://github.com/Dionleno/toro-frontend/assets/19779057/178756f2-4ce3-4920-9bf7-9bcdbefb2965)

### Variaveis de ambiente
O arquivo auth_config.json contém as variaveis do outh0 necessarias para executar a aplicação local (Solicitar as credenciais ao desenvolvedor). Para executar no ambiente produtivo as variaveis estão cadastradas nas secrets do github.

### Para rodar localmente
- Rode `npm install` ou `npm i` para instalar as dependências
- Rode `npm start` para rodar a aplicação localmente

### Para fazer o deploy
Foi configurado uma esteira de desenvolvimento integrado com o CI/CD, para fazer o deploy no ambiente, basta fazer o merge na branch main.

