# Programação de Funcionalidades

Implementação do sistema descritas por meio dos requisitos funcionais e/ou não funcionais. Deve relacionar os requisitos atendidos os artefatos criados (código fonte) além das estruturas de dados utilizadas e as instruções para acesso e verificação da implementação que deve estar funcional no ambiente de hospedagem.

Para cada requisito funcional, pode ser entregue um artefato desse tipo.

O professor Rommel Carneiro apresenta alguns exemplos prontos para serem utilizados como referência:
- Login do sistema: [https://repl.it/@rommelpuc/LoginApp](https://repl.it/@rommelpuc/LoginApp) 
- Cadastro de Contatos: [https://repl.it/@rommelpuc/Cadastro-de-Contatos](https://repl.it/@rommelpuc/Cadastro-de-Contatos)


> **Links Úteis**:
>
> - [Trabalhando com HTML5 Local Storage e JSON](https://www.devmedia.com.br/trabalhando-com-html5-local-storage-e-json/29045)
> - [JSON Tutorial](https://www.w3resource.com/JSON)
> - [JSON Data Set Sample](https://opensource.adobe.com/Spry/samples/data_region/JSONDataSetSample.html)
> - [JSON - Introduction (W3Schools)](https://www.w3schools.com/js/js_json_intro.asp)
> - [JSON Tutorial (TutorialsPoint)](https://www.tutorialspoint.com/json/index.htm)

Os requisitos para realização dos testes de software são:
<ul><li>Site publicado na internet;</li>
<li>Navegador da internet: Chrome, Firefox ou Edge.</li>
</ul>

Os testes funcionais a serem realizados na aplicação são descritos a seguir.

<table>
 <tr>
  <th>Caso de teste</th>
  <th>Requisitos associados</th>
  <th>Objetivo do teste</th>
  <th>Passos</th>
  <th>Critérios de êxito</th>
  <th>Responsável</th>
 </tr>
 <tr>
  <td>CT-01: Verificar o funcionamento dos links da página Home</td>
  <td>
   <ul>
    <li>RF-001:	O usuário deve ser capaz de se cadastrar no site como cidadão.</li>
   <li>RF-002:	O usuário deve ser capaz de fazer login no site como cidadão.</li>
   <li>RF-003:	O gestor público deve ser capaz de se cadastrar no site como gestor.</li>
    <li>RF-004:	O usuário deve ser capaz de fazer login no site como gestor</li>
   </ul>
  </td>
  <td>Verificar se os links da página Home estão encaminhando para as respectivas páginas corretamente</td>
  <td>
   <ol>
    <li>Acessar o navegador.</li>
    <li>Informar o endereço do site.</li>
    <li>Visualizar a página Home.</li>
    <li>Clicar nos links da página Home.</li>
   </ol>
   </td>
  <td>Todos os links da página Home devem encaminhar os usuários para as páginas descritas.</td>
  <td>Guilherme</td>
 </tr>
</table>

<table>
 <tr>
  <th>Caso de teste</th>
  <th>Requisitos associados</th>
  <th>Objetivo do teste</th>
  <th>Passos</th>
  <th>Critérios de êxito</th>
  <th>Responsável</th>
 </tr>
 <tr>
  <td>CT-01: Verificar o funcionamento dos links da página Home</td>
  <td>
   <ul>
    <li>RF-001:	O usuário deve ser capaz de se cadastrar no site como cidadão.</li>
   <li>RF-002:	O usuário deve ser capaz de fazer login no site como cidadão.</li>
   <li>RF-003:	O gestor público deve ser capaz de se cadastrar no site como gestor.</li>
    <li>RF-004:	O usuário deve ser capaz de fazer login no site como gestor</li>
   </ul>
  </td>
  <td>Verificar se os links da página Home estão encaminhando para as respectivas páginas corretamente</td>
  <td>
   <ol>
    <li>Acessar o navegador.</li>
    <li>Informar o endereço do site.</li>
    <li>Visualizar a página Home.</li>
    <li>Clicar nos links da página Home.</li>
   </ol>
   </td>
  <td>Todos os links da página Home devem encaminhar os usuários para as páginas descritas.</td>
  <td>Guilherme</td>
 </tr>
</table>

## Exemplo

## Requisitos Atendidos

As tabelas que se seguem apresentam os requisitos funcionais e não-funcionais que relacionam o escopo do projeto com os artefatos criados:

### Requisitos Funcionais

|ID    | Descrição do Requisito | Responsável | Artefato Criado |
|------|------------------------|------------|-----------------|
|RF-001| A aplicação deve permitir que o usuário gerencie suas tarefas | João | index.html |
|RF-002| A aplicação deve permitir a emissão de um relatório de tarefas realizadas no mês | Ana Paula | cadastro-noticia.html |

## Descrição das estruturas:

## Notícia
|  **Nome**      | **Tipo**          | **Descrição**                             | **Exemplo**                                    |
|:--------------:|-------------------|-------------------------------------------|------------------------------------------------|
| Id             | Numero (Inteiro)  | Identificador único da notícia            | 1                                              |
| Título         | Texto             | Título da notícia                         | Sistemas de Informação PUC Minas é o melhor                                   |
| Conteúdo       | Texto             | Conteúdo da notícia                       | Sistemas de Informação da PUC Minas é eleito o melhor curso do Brasil                            |
| Id do usuário  | Numero (Inteiro)  | Identificador do usuário autor da notícia | 1                                              |

