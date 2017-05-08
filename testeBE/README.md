## Teste BackEnd


### Instruções

Para rodar o projeto é necessário ter instalado o MONGODB. O projeto está configurado para criar um db no caminho 
http://localhost:27017/teste. Caso seja necessário alterar a porta as configurações estão setadas nos arquivos abaixo:

* `testeBE/seeds/seed.js`
* `testeBE/app.js`

Após o db iniciado va na pasta raiz (testeBE) do projeto rode o comando:

```
npm install
```

Após o npm baixar todas as libraries de dependência do projeto rode o comando:


```
npm run seed
```

Este comando deve popular o db teste com os dados para consulta como solicitado. Após popular o banco execute o comando: 

```
npm start
```

A API rest estará rodando e esperando chamadas do frontend.
