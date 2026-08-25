# 📚 AllBooks

Boas vindas à API do AllBooks!

O AllBooks é uma API mockada para uma loja virtual de livros, desenvolvida como
projeto de estudo com foco em **autenticação JWT** e organização de uma API REST
em Node.js. Ainda é um MVP, com espaço para novas funcionalidades.

> Projeto criado durante estudos de back-end, usando `json-server` como banco
> mockado e `jsonwebtoken` para autenticação.

## 🛠️ Tecnologias utilizadas

- Node.js
- json-server
- jsonwebtoken (JWT)
- bcryptjs
- body-parser

## 🚀 Instalação

```bash
git clone https://github.com/lucascarreiroc/allbooks.git
cd allbooks
npm install
```

Crie um arquivo `.env` na raiz do projeto (use o `.env.example` como base) com:

```
JWT_SECRET=coloque_aqui_uma_string_longa_e_aleatoria
```

Depois, inicie a API:

```bash
npm run start-auth
```

## 📖 Como usar

### Registrar um novo usuário

```
POST http://localhost:8000/public/cadastrar
```

```json
{
    "nome": "vinicios neves",
    "email": "vinicios@alura.com.br",
    "senha": "123456",
    "endereco": "Rua Vergueiro, 3185",
    "complemento": "Vila Mariana",
    "cep": "04101-300"
}
```

> O e-mail é um campo único; cadastros com e-mails duplicados são recusados.

### Fazer login

```
POST http://localhost:8000/public/login
```

```json
{
  "email": "vinicios@alura.com.br",
  "senha": "123456"
}
```

Resposta:

```json
{
   "access_token": "<ACCESS_TOKEN>",
   "user": { "...": "dados do usuário" }
}
```

### Autenticar as próximas requisições

Inclua o token no header das requisições protegidas:

```
Authorization: Bearer <ACCESS_TOKEN>
```

As rotas `/public`, `/livros`, `/autores` e `/categorias` são de leitura
pública e não exigem autenticação.

## 🗺️ Roadmap

- [ ] Adicionar testes automatizados
- [ ] Migrar dados mockados dos livros para o `database.json`
- [ ] Adicionar paginação nas rotas de listagem

## ⚠️ Aviso

Este é um projeto de estudo. O "banco de dados" é um arquivo JSON local
(`json-server`), o que é ótimo para prototipagem, mas não deve ser usado em
produção.