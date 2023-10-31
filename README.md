# App 

GymPass style app.

## RFs (Requisitos Funcionais)

# - O que será possivel o usuario fazer

- [] Deve ser possivel se cadastrar;
- [] Deve ser possivel se autenticar;
- [] Deve ser possivel obter o perfil de um usuario logado;
- [] Deve ser possivel obter o numero de cheki-ins realizados pelo usuarios logado;
- [] Deve ser possivel o usuario obter o seu historico de cheki-ins;
- [] Deve ser possivel o usuario buscar academias proxima;
- [] Deve ser possivel o usuario buscar academias pelo nome;
- [] Deve ser possivel o usuario realizar cheki-ins em uma academia;
- [] Deve ser possivel validar o cheki-in de um usuario;
- [] Deve ser possivel cadastrar uma academia;

## RNs (Regras de Negocio)

# - Caminhos que cada Requisito funcionais pode tomar, que condições são aplicadas nos RFs

- [] O usuario não deve poder se cadastrar com um e-mail duplicado;
- [] O usuario não pode fazer 2 check-ins no mesmo dia;
- [] O usuario não pode fazer check-in se não estiver perto (100m) da academia;
- [] O check-in só pode ser validado até 20 minutos após criado;
- [] O check-in só pode ser validados por administradores;
- [] A academia só pode ser cadastrada por administradores;

## RNFs (Requisitos não-funcionais)

# - Requisitos tecnicos que não depende do usuario final

- [] A senha do usuario precisa estar criptografada;
- [] Os dados da aplicação estar persistindo em um banco de dados PostgreSQL;
- [] Todas listas de dados precisam estar paginadas com 20 itens por pagina;
- [] O usuario deve ser itentificado por um JWT (Json Web Token)
