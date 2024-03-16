# Api rest

Esta api rest, foi criada com varios endpoint e rotas, O principal objetivo em ter criado ela, foi para reforça meu conhecimento em criação de apis com Node.js e suas libs e frameworks.
### 🤔 Oque ela faz?
Ela foi criada com endpoints e rotas para cadastro, login e cadastro de Alunos, Armazenado os dados diretamente No banco de dados Mysql com  Sequelize(ORM) , na mesma tbm contém uma rota para Uploads de imagens para os alunos , ela disponibiliza uma url da imagen,
com ela podemos listar os usuarios , listar os cadastro e fotos  dos alunos.

# Exemplo de uso abaixo
## cadastro
> rota para criaçao de login é 'Localhost/users' usando o metodo post.
<br>

> A senha é salva como um hash realizado com  a lib bcryptjs

Observação para realizar o cadastro com sucesso é nescesario enviar um body em Json, exemplo :
```Json
{
"nome":"danilo",
"email":"danilo@gmail.com",
"password": "123456"
}
```

![image](https://github.com/danzok/Alunos-simple-api/assets/105066526/8a75ee29-5af2-4efe-9d66-e12f488af04b)


## login

> rota para  login é 'Localhost/tokens' usando o metodo post. 
<br>

> A senha  enviado no body da requisição é realizado uma comparação ao hash salvo no banco de dados ainda usando o bcryptjs.

Observação para realizar o login com sucesso é nescesario enviar um body em Json, exemplo :
```Json
{
"email":"danilo@gmail.com",
"password": "123456"
}
```
> se tudo estiver correto retornara um token feito com jwt no response , este mesmo token deve ser enviado no header com a key : authorization Beare <token> na requisiçao para outras rotas.
![image](https://github.com/danzok/Alunos-simple-api/assets/105066526/5e98cc0e-b763-47c2-9235-243385f1ac5f)

## Listando alunos

> Podemos listar todos os alunos cadastrado na url 'alunos/'
<br>

> na lista retornara também fotos relacionado a eles .
>
> 
> se tudo estiver correto retornara assim :
![image](https://github.com/danzok/Alunos-simple-api/assets/105066526/fcfa7abc-d727-45d2-b5af-1770f2812131)

> A outras rotas que não mostrei como criar o aluno, fazer o upload de fotos.

