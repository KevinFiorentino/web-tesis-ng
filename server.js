const express = require('express');
const path = require('path');

const app = express();

app.use(express.static(__dirname+'/dist/web-tesis-ng'));
app.use('/public', express.static('src/assets'));

app.get('/',function(req,res){
    res.sendFile(path.join(__dirname+'/dist/web-tesis-ng/index.html'));
});

app.listen(process.env.PORT || 8080);