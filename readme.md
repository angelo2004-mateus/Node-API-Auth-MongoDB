# Node.js MongoDB JWT Authentication API

Este repositório contém o código-fonte de uma API desenvolvida em Node.js com MongoDB, que utiliza JSON Web Tokens (JWT) como método de autenticação e verificação. A API oferece endpoints para autenticação de usuários, registro de novos usuários e acesso a recursos protegidos por autenticação.

## Recursos Principais

- **Autenticação de Usuário**: A API permite que os usuários se autentiquem fornecendo um email e senha válidos. Após a autenticação bem-sucedida, a API gera um token JWT que pode ser usado para autenticar solicitações subsequentes para acessar recursos protegidos.

- **Registro de Usuário**: Novos usuários podem se registrar fornecendo um nome de usuário, email e senha. A API valida os dados fornecidos e cria uma nova entrada no banco de dados para o novo usuário.

- **Proteção de Rotas**: Certas rotas da API estão protegidas por autenticação. Para acessar essas rotas, o cliente deve incluir o token JWT válido nos cabeçalhos da solicitação HTTP. Caso contrário, a API retorna um erro de autenticação.

- **Integração com MongoDB**: A API se integra ao MongoDB para armazenar dados de usuário, incluindo detalhes de autenticação e informações do perfil.

## Tecnologias Utilizadas

- Node.js: Plataforma de desenvolvimento para executar JavaScript do lado do servidor.
- MongoDB: Banco de dados NoSQL usado para armazenar dados de usuário.
- JSON Web Tokens (JWT): Método de autenticação stateless usado para autenticar solicitações HTTP.
- Express.js: Framework web utilizado para criar a API RESTful.
- Mongoose: Biblioteca ODM (Object Data Modeling) para Node.js que facilita a interação com o MongoDB.

Esta API fornece uma estrutura básica para construir sistemas de autenticação seguros em Node.js usando MongoDB e JWT. Os desenvolvedores podem estender e personalizar esta API conforme necessário para atender aos requisitos específicos de seus projetos.
-
-------------------------------------------------------------------------------------

# Node.js MongoDB JWT Authentication API

This repository contains the source code for an API developed in Node.js with MongoDB, which utilizes JSON Web Tokens (JWT) for authentication and verification. The API provides endpoints for user authentication, user registration, and access to resources protected by authentication.

## Main Features

- **User Authentication**: The API allows users to authenticate by providing a valid email and password. Upon successful authentication, the API generates a JWT token that can be used to authenticate subsequent requests to access protected resources.

- **User Registration**: New users can register by providing a username, email, and password. The API validates the provided data and creates a new entry in the database for the new user.

- **Route Protection**: Certain routes of the API are protected by authentication. To access these routes, the client must include a valid JWT token in the HTTP request headers. Otherwise, the API returns an authentication error.

- **Integration with MongoDB**: The API integrates with MongoDB to store user data, including authentication details and profile information.

## Technologies Used

- Node.js: Development platform for running server-side JavaScript.
- MongoDB: NoSQL database used to store user data.
- JSON Web Tokens (JWT): Stateless authentication method used to authenticate HTTP requests.
- Express.js: Web framework used to create the RESTful API.
- Mongoose: Object Data Modeling library for Node.js that facilitates interaction with MongoDB.

This API provides a basic framework for building secure authentication systems in Node.js using MongoDB and JWT. Developers can extend and customize this API as needed to meet the specific requirements of their projects.