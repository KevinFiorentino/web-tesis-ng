/* Script principal de NodeJS - express para iniciar la web */

const express = require('express');
const path = require('path');

const app = express();

/* dist/web-tfi-ng guarda la aplicación luego de ser compilada */
app.use(express.static(__dirname+'/dist/web-tfi-ng'));

/* Seteo directorio público */
app.use('/public', express.static('src/assets'));

/* Se envía al cliente el index.html compilado */
app.get('/',function(req,res){
    res.sendFile(path.join(__dirname+'/dist/web-tfi-ng/index.html'));
});

app.listen(process.env.PORT || 8080);