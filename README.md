# WigWEB

Aplicação web seguindo a ideia do app Wig (Where I Go) que foi criado em outros repositorios do perfil. O projeto como um todo conta com uma api em Java, um app Android também em Java e a ultima criação foi essa aplicação web com Angular.

## Oque é ?

A ideia consiste em uma espécie de rede social para avaliações a empresas e estabelcimentos, boas ou ruins. Vai alem de só reclamções.

Usuarios procuram e avaliam as empresas deixando um comentario e as empresas por sua vez respondem esse comentarios em seus perfis.

## Desenvolvimento

O projeto foi divido em pastas por componente ou ambientes (admin, usuario e empresa). Dependendo do atributo 'tipo' do usuario no banco de dados ele sera direcionado para um dos ambientes a seguir:

Usuarios - podem pesquisar por empresas e escrever avaliações sobre elas em seus perfis.

Empresa - podem apenas responder as avaliações feitas pelos usuarios destinadas a elas.

Admin - gerencia usuarios e empresas (inclusão, alteração, exclusão, leitura).

Foi organizado em modulos que contem seus componentes para que o lazy loading funcione, por conta disso os modulos não estão declarados no app.module e sim em 'app-routing-module.ts' pois sera importado somente se necessario.

# Interação com api

Como dito antes foi desenvolvido uma api em Java com a IDE Netbeans, onde estão codificadas todas a interações com o banco de dadoos usado ( SQL Server Express)

Todas as interações com este cliente web podem ser encontradas dentro da 'app/shared/methods.service.ts'.

Esta api estava rodando em 'localhost:8080' em um servidor Glassfish 4.1 do proprio Netbeans.

Foi criado uma proxy para remover erros de CORS em requisições para a api e pode ser encontrada em './proxy.conf.js'

# Angular cli doc

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 9.0.1.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

Run 'npm start' fro a dev server with proxy (to fix erros in cors)

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

## About Me

![Anurag's github stats](https://github-readme-stats.vercel.app/api?username=GustavoBonfimS&show_icons=true)
