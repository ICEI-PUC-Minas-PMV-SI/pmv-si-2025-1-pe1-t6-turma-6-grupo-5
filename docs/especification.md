# Especificações do Projeto

Definição do problema e ideia de solução a partir da perspectiva do usuário. É composta pela definição do  diagrama de personas, histórias de usuários, requisitos funcionais e não funcionais além das restrições do projeto.

Apresente uma visão geral do que será abordado nesta parte do documento, enumerando as técnicas e/ou ferramentas utilizadas para realizar a especificações do projeto.

Caso deseje atribuir uma imagem a sua persona, utilize o site https://thispersondoesnotexist.com/

## Personas

Pedro Paulo tem 26 anos, é arquiteto recém-formado e autônomo. Pensa em se desenvolver profissionalmente através de um mestrado fora do país, pois adora viajar, é solteiro e sempre quis fazer um intercâmbio. Está buscando uma agência que o ajude a encontrar universidades na Europa que aceitem alunos estrangeiros.

Enumere e detalhe as personas da sua solução. Para tanto, baseie-se tanto nos documentos disponibilizados na disciplina e/ou nos seguintes links:

> **Links Úteis**:
> - [Rock Content](https://rockcontent.com/blog/personas/)
> - [Hotmart](https://blog.hotmart.com/pt-br/como-criar-persona-negocio/)
> - [O que é persona?](https://resultadosdigitais.com.br/blog/persona-o-que-e/)
> - [Persona x Público-alvo](https://flammo.com.br/blog/persona-e-publico-alvo-qual-a-diferenca/)
> - [Mapa de Empatia](https://resultadosdigitais.com.br/blog/mapa-da-empatia/)
> - [Mapa de Stalkeholders](https://www.racecomunicacao.com.br/blog/como-fazer-o-mapeamento-de-stakeholders/)
>
Lembre-se que você deve ser enumerar e descrever precisamente e personalizada todos os clientes ideais que sua solução almeja.

## Histórias de Usuários

Com base na análise das personas forma identificadas as seguintes histórias de usuários:

|EU COMO... `PERSONA`| QUERO/PRECISO ... `FUNCIONALIDADE`                                        |PARA ... `MOTIVO/VALOR`                                                |
|--------------------|---------------------------------------------------------------------------|-----------------------------------------------------------------------|
|Cidadão             | Reportar problemas urbanos                                                | Agilizar na resolução dos mesmos.                                     |
|Cidadão             | Dar feedback sobre a reforma realizada                                    | Garantir a qualidade dos serviços prestados.                          |
|Cidadão             | Adicionar informações ou fotos ao chamado                                 | Fornecer detalhes e ajudar a gestão a resolver o problema mais rápido.|
|Cidadão             | Acompanhar o status de chamado no aplicativo (Ex. em andamento, resolvido)| Saber se o problema foi resolvido ou se está em andamento.            |
|Gestor              | Fazer um relatório das ocorrências atendidas em determinado mês           | Prestação de contas para a comunidade.                                |
|Gestor              | Verificar os problemas reportados que ainda não foram solucionados        | Que possa direcionar ações futuras da administração.                  |
|Gestor              | Entrar em contato com o cidadão que reportou determinado problema         | Esclarecer algo que não ficou claro nas informações prestadas.        |


## Requisitos

As tabelas que se seguem apresentam os requisitos funcionais e não funcionais que detalham o escopo do projeto.

### Requisitos Funcionais

|ID    | Descrição do Requisito  | Prioridade | 
|------|----------------------------------------------------------|----| 
|RF-001| O usuário deve ser capaz de se cadastrar no site como cidadão | ALTA | 
|RF-002| O usuário deve ser capaz de fazer login no site como cidadão | ALTA | 
|RF-003| O gestor público deve ser capaz de se cadastrar no site como gestor | ALTA | 
|RF-004| O usuário deve ser capaz de fazer login no site como gestor | ALTA | 
|RF-005| O usuário não pode se cadastrar duas vezes com o mesmo email | ALTA | 
|RF-006| O gestor público deve ser capaz de alterar o status da ocorrência reportada | ALTA | 
|RF-007| O gestor público deve ser capaz de contactar o usuário que realizou o chamado | ALTA | 
|RF-008| O usuário(cidadão) deve ser capaz de fazer o registro de problemas | ALTA | 
|RF-009| O usuário(cidadão) deve ser capaz de anexar fotos ao registro de problemas | MÉDIA | 
|RF-010| O gestor público deve ser capaz de especificar um mês na geração de relatório | MÉDIA | 
|RF-011| O gestor público deve ser capaz de filtrar os chamados não solucionados | MÉDIA | 
|RF-012| Adicionar ferramentas para que gestores possam moderar conteúdos inadequados ou irrelevantes | MÉDIA | 
|RF-013| Adicionar mecanismos para que os usuários possam fornecer feedback sobre a plataforma e sugerir melhorias | BAIXA | 
|RF-014| Integrar ferramentas de mapas que permitam aos usuários marcar a localização exata dos problemas reportados | BAIXA | 
|RF-015| O usuário deve ser capaz de adicionar uma foto de perfil | BAIXA | 

### Requisitos não Funcionais

|ID     | Descrição do Requisito  |Prioridade |
|-------|-------------------------|----|
|RNF-001| O aplicativo deve ser em linguagem HTML, CSS e Javascript | ALTA | 
|RNF-002| A aplicação deve ser responsiva, permitindo uma boa visualização em dispositivos móveis | ALTA | 
|RNF-003| O aplicativo deve estar disponível em um domínio público da internet, com uma disponibilidade mínima de 99% | MÉDIA | 
|RNF-004| A aplicação deve ser compatível com todos os principais navegadores de mercado | MÉDIA | 
|RNF-005| Implementar mecanismos de backup e recuperação de dados | MÉDIA | 
|RNF-006| A interface deve ser intuitiva para usuários de diferentes níveis de conhecimento tecnológico | MÉDIA | 
|RNF-007| Deve suportar, simultaneamente, pelo menos 1000 usuários ativos | MÉDIA | 

## Restrições

O projeto está restrito pelos itens apresentados na tabela a seguir.

|ID| Restrição                                             |
|--|-------------------------------------------------------|
|01| O projeto deverá ser entregue até o final do semestre |
|02| Não pode ser desenvolvido um módulo de backend        |
