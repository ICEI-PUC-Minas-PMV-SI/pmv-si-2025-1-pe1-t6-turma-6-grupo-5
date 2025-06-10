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
  <td>CT-02: Verificar o funcionamento do cadastro de novos chamados</td>
  <td>
   <ul>
   <li>RF-008: O usuário (cidadão) deve ser capaz de fazer o registro de problemas</li>
   </ul>
  </td>
  <td>Verificar a funcionalidade de registro de novo chamado. </td>
  <td>
   <ol>
    <li>Acessar o navegador.</li>
    <li>Informar o endereço do site.</li>
    <li>Visualizar a página Home.</li>
    <li>Clicar na página "Novo chamado".</li>
    <li>Preencher os dados necessários.</li>
    <li>Clicar em "Enviar".</li>
   </ol>
   </td>
  <td>Após concluir os passos, o novo chamado deve ser armazenado no local storage e aparecer na página de chamados.</td>
  <td>Sofia</td>
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
  <td>CT-03: Verificar o funcionamento do cadastro de chamados na visão do gestor.</td>
  <td>
   <ul>
   <li>RF-006:	O gestor público deve ser capaz de alterar o status da ocorrência reportada.</li>
   <li>RF-007:	O gestor público deve ser capaz de contactar o usuário que realizou o chamado.</li>
   </ul>
  </td>
  <td>Verificar a funcionalidade da opção de mudança de status do chamado publicado e o acesso aos dados que permitem o contato do gestor com o cidadão. </td>
  <td>
   <ol>
    <li>Acessar o navegador.</li>
    <li>Informar o endereço do site.</li>
    <li>Visualizar a página Home.</li>
    <li>Clicar na página "Login".</li>
    <li>Visualizar a página de login.</li>
    <li>Preencher os dados necessários para acessar a conta de gestor.</li>
    <li>Clicar em "Entrar".</li>
    <li>Visualizar a página do perfil de gestor.</li>
    <li>Clicar em "Acessar".</li>
    <li>Visualizar a página de chamados.</li>
    <li>Visualizar o número de contato do cidadão no card do chamado.</li>
   </ol>
   </td>
  <td>Deve ser possível ver na página de cadastro do cidadão a mudança de status feita pelo gestor e que o número de contato do cidadão seja acessado facilmente.</td>
  <td>Sofia</td>
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
  <td>CT-04: Verificar o funcionamento do cadastro de usuários e gestores no app.</td>
  <td>
   <ul>
   <li>RF-001:	O usuário deve ser capaz de se cadastrar no site como cidadão.</li>
   <li>RF-003:	O gestor público deve ser capaz de se cadastrar no site como gestor.</li>
   <li>RF-005:	O usuário não pode se cadastrar duas vezes com o mesmo email.</li>
   </ul>
  </td>
  <td>Verificar a funcionalidade de cadastro de usuários e gestores, sendo necessário uma verificação a mais para garantir a autenticidade do gestor.</td>
  <td>
   <ol>
    <li>Acessar o navegador.</li>
    <li>Informar o endereço do site.</li>
    <li>Visualizar a página Home.</li>
    <li>Clicar na página "Cadastrar".</li>
    <li>Visualizar a página de cadastro.</li>
    <li>Preencher os dados necessários para criar a conta de gestor ou usuário.</li>
    <li>Clicar em "Cadastrar".</li>
    <li>Confirmar o aparecimento de um pop-up, informando que o usuário foi cadastrado com sucesso.</li>
   </ol>
   </td>
  <td>Deve ser possível ver no localstorage o usuário cadastrado com sucesso.</td>
  <td>Tiago</td>
 </tr>
</table>

# Registro de Testes de Software
Os testes funcionais realizados na aplicação web são descritos a seguir.

## CT-01
Responsável: Sofia.

https://github.com/user-attachments/assets/e8538d67-0e20-42be-b5be-c9d2aded5db1

## CT-02 e CT-03
Responsável: Guilherme.

https://github.com/user-attachments/assets/ef6d1ec4-92c0-457e-88cb-7158a890496b

## CT-04
Responsável: Tiago






