# Automatic test reload

Script para automatizar a execução dos testes.
script para rodar os testes do projeto  de forma automatizada
Dependências para utilização:
Gulp.js
Sell.js
 
Para instalar as dependências use o comando:
```console
npm i gulp shelljs gulp-watch
```
 
Para utiliza:

Copie o arquivo gulpfile.js para dentro da pasta do projeto.

Atualize os arquivos 'gulpfile.js' com as credenciais do banco de dados.
Conforme o exemplo abaixo:

```javascript
// gulpfile.js

const user = 'root';
const psw = '123456';
const host = 'localhost';
const port = '3306';
```
 
Em um terminal na pasta do projeto utilize o comando npx gulp para iniciar o script
```console
npx gulp
```
