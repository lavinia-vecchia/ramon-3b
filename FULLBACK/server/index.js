import { Express } from 'express'

const app = Express()


app.get('/pegar', function (reg, res){
    res.send('enviar esta mensagem')
})

app.get('pegaroutracoisa', function (reg, res){
    res.send('esta é outra mensagem')
})
app.listen(8000)