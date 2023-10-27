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

O projeto tem como objetivo simular ambiente da toro investimentos. <br><br>
Link da aplicação: [https://d3by8kp27jm2bq.cloudfront.net/](https://d3by8kp27jm2bq.cloudfront.net/)
<br><br>

Usuário   | Password
--------- | ------
client1@gmail.com | Cliente1
client2@gmail.com | Cliente2 
 

### 🚀 Como executar

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
    
![278452568-7151b0be-12db-4b1a-becd-ea9cc243c96f](https://github.com/Dionleno/toro-frontend/assets/19779057/33700939-2e06-4345-a5a0-fa208fb1f065)

### Variaveis de ambiente
O arquivo auth_config.json contém as variaveis do outh0 necessarias para executar a aplicação local (Solicitar as credenciais ao desenvolvedor). Para executar no ambiente produtivo as variaveis estão cadastradas nas secrets do github.

### Para rodar localmente
- Rode `npm install` ou `npm i` para instalar as dependências
- Rode `npm start` para rodar a aplicação localmente

### Para fazer o deploy
Foi configurado uma esteira de desenvolvimento integrado com o CI/CD, para fazer o deploy no ambiente, basta fazer o merge na branch main.

<img width="1430" alt="Captura de Tela 2023-10-26 às 22 59 10" src="https://github.com/Dionleno/toro-frontend/assets/19779057/43759c8b-2703-4924-9f57-513417bc768a">

